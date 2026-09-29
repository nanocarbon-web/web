import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

function parseCSVRow(str: string) {
  const result = [];
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

export async function GET() {
  const SPREADSHEET_ID = '1Mkg9Ds9zVnTJ4VP2wtYswXBJt96Ec8L4cSx6xMOEg9o';
  // Obtenemos la primera pestaña (gid=0) en formato CSV puro.
  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`Google devolvió estado ${res.status}`);
    }
    
    // Texto crudo del CSV
    const csvText = await res.text();
    const lineas = csvText.split('\n');

    const dbMap: any = {};
      
    lineas.forEach((linea, index) => {
      // Ignorar cabecera si somos la fila 0
      if (index === 0 && linea.toLowerCase().includes('tipo')) return;
      
      const row = parseCSVRow(linea);
      
      const tipo = row[0]?.trim();
      const marca = row[1]?.trim();
      const modelo = row[2]?.trim();

      // Ignorar filas en blanco
      if (!tipo || !marca || !modelo) return;

      if (!dbMap[tipo]) dbMap[tipo] = {};
      if (!dbMap[tipo][marca]) dbMap[tipo][marca] = [];
      
      // Añadir modelo al arreglo de la marca si no existe aún
      if (!dbMap[tipo][marca].includes(modelo)) {
        dbMap[tipo][marca].push(modelo);
      }
    });

    const dbArray = Object.keys(dbMap).map(tipo => {
      return {
        tipo: tipo,
        marcas: Object.keys(dbMap[tipo]).map(marca => {
          return {
            nombre: marca,
            modelos: dbMap[tipo][marca],
          }
        })
      }
    });

    return NextResponse.json(dbArray);

  } catch (error: any) {
    console.error('Error procesando CSV de Sheets:', error);
    return NextResponse.json({ error: 'Error accediendo a la hoja de cálculo pública.' }, { status: 500 });
  }
}
