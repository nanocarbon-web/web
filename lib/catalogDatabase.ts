export interface Marca {
  nombre: string;
  modelos: string[];
}

export interface Categoria {
  tipo: string;
  marcas: Marca[];
}

function parseCSVRow(str: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

export async function fetchLiveDatabase(): Promise<Categoria[] | null> {
  const SPREADSHEET_ID = '1Mkg9Ds9zVnTJ4VP2wtYswXBJt96Ec8L4cSx6xMOEg9o';
  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;

  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const csvText = await res.text();
    const lineas = csvText.split('\n');

    const dbMap: Record<string, Record<string, string[]>> = {};

    lineas.forEach((linea, index) => {
      if (index === 0 && linea.toLowerCase().includes('tipo')) return;
      const row = parseCSVRow(linea);
      const tipo = row[0]?.trim();
      const marca = row[1]?.trim();
      const modelo = row[2]?.trim();

      if (!tipo || !marca || !modelo) return;

      if (!dbMap[tipo]) dbMap[tipo] = {};
      if (!dbMap[tipo][marca]) dbMap[tipo][marca] = [];

      if (!dbMap[tipo][marca].includes(modelo)) {
        dbMap[tipo][marca].push(modelo);
      }
    });

    const dbArray: Categoria[] = Object.keys(dbMap).map(tipo => ({
      tipo,
      marcas: Object.keys(dbMap[tipo]).map(marca => ({
        nombre: marca,
        modelos: dbMap[tipo][marca],
      })),
    }));

    return dbArray.length > 0 ? dbArray : null;
  } catch (err) {
    console.warn('Could not fetch live Google Sheets catalog, using fallback', err);
    return null;
  }
}
