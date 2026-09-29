export interface Marca {
  nombre: string;
  modelos: string[];
}

export const AUTOMOTIVE_DATABASE: Marca[] = [
  {
    nombre: 'Toyota',
    modelos: [
      'Hilux (Pantalla Central & Clúster)',
      'Corolla Cross (Pantalla Central 9" / 10.5")',
      'Prado TXL / VX (Consola Central & Tablero)',
      'Land Cruiser 300 (Pantalla 12.3")',
      'Fortuner (Pantalla Central)',
      'RAV4 (Pantalla Central 10.5")',
      'Yaris Cross / Yaris Sedán',
      '4Runner (Pantalla Central)',
      'Corolla Sedán',
      'Personalizado / Otra Referencia Toyota',
    ]
  },
  {
    nombre: 'Mercedes-Benz',
    modelos: [
      'Clase A / CLA (Doble Pantalla MBUX 10.25")',
      'Clase C (Pantalla Central Vertical 11.9" & Clúster 12.3")',
      'Clase E (Pantalla MBUX Superscreen)',
      'GLA / GLB (Doble Pantalla MBUX)',
      'GLC (Pantalla Central Vertical 11.9" & Clúster)',
      'GLE / GLS (Doble Pantalla Panorámica 12.3")',
      'EQE / EQS (MBUX Hyperscreen)',
      'Personalizado / Otra Referencia Mercedes-Benz',
    ]
  },
  {
    nombre: 'BMW',
    modelos: [
      'Serie 3 G20 (BMW Curved Display 14.9" + 12.3")',
      'Serie 4 Gran Coupé (BMW Curved Display)',
      'X1 / iX1 (BMW Curved Display)',
      'X3 (Pantalla Central 12.3" & Clúster Live Cockpit)',
      'X4 (Pantalla Central 12.3")',
      'X5 / X6 (BMW Curved Display 14.9")',
      'Serie 5 / i5 (BMW Curved Display)',
      'iX (BMW Curved Display 14.9" + 12.3")',
      'Personalizado / Otra Referencia BMW',
    ]
  },
  {
    nombre: 'Chevrolet',
    modelos: [
      'Tracker Turbo (Pantalla Central 8" / 11")',
      'Onix Turbo / Onix Sedán (MyLink 8")',
      'Captiva Turbo / Captiva XL (Pantalla Vertical 10.4")',
      'Montana (Pantalla Integrada 8" & Clúster)',
      'Colorado / S10 (Pantalla Central 11" & Clúster Digital)',
      'D-Max',
      'Tahoe / Suburban (Pantalla Central 10.2")',
      'Blazer EV / Equinox EV',
      'Traverse',
      'Personalizado / Otra Referencia Chevrolet',
    ]
  },
  {
    nombre: 'Tesla',
    modelos: [
      'Model 3 (Pantalla Central 15.4" & Pantalla Trasera)',
      'Model Y (Pantalla Central 15.4")',
      'Model S (Pantalla Central 17" & Clúster)',
      'Model X (Pantalla Central 17" & Clúster)',
      'Cybertruck (Pantalla Central 18.5" & Trasera 9.4")',
    ]
  },
  {
    nombre: 'Mazda',
    modelos: [
      'CX-30 (Pantalla Central 8.8" / 10.25" & Clúster)',
      'Mazda 3 (Pantalla Central 8.8" / 10.25")',
      'CX-5 (Pantalla Central 10.25")',
      'CX-50 (Pantalla Central Panorámica)',
      'Mazda 2 (Pantalla Central MZD Connect)',
      'CX-90 (Pantalla Central 12.3" & Clúster Digital)',
      'Personalizado / Otra Referencia Mazda',
    ]
  },
  {
    nombre: 'BYD',
    modelos: [
      'Song Plus DM-i (Pantalla Giratoria 12.8" / 15.6" & Clúster)',
      'Dolphin / Dolphin Mini / Seagull (Pantalla Giratoria 10.1" / 12.8")',
      'Yuan Plus EV (Pantalla Giratoria 12.8")',
      'Seal EV (Pantalla Giratoria 15.6" & Clúster)',
      'Tang EV (Pantalla Giratoria 15.6")',
      'Han EV (Pantalla Giratoria 15.6")',
      'Shark Pickup (Pantalla Central & Clúster)',
      'Personalizado / Otra Referencia BYD',
    ]
  },
  {
    nombre: 'Ford',
    modelos: [
      'Ranger / Ranger Raptor (Pantalla Vertical SYNC 4 12" & Clúster)',
      'Explorer (Pantalla Central 13.2" / Vertical 10.1")',
      'Bronco Sport (Pantalla Central SYNC 8")',
      'Escape Híbrida (Pantalla Central 13.2" & Clúster 12.3")',
      'F-150 / F-150 Lariat (Pantalla Central SYNC 4 12")',
      'Maverick (Pantalla Central 8" / 13.2")',
      'Mustang Mach-E (Pantalla Vertical 15.5")',
      'Personalizado / Otra Referencia Ford',
    ]
  },
  {
    nombre: 'Kia',
    modelos: [
      'Sportage (Doble Pantalla Curva Panorámica 12.3")',
      'Seltos (Doble Pantalla Integrada 10.25")',
      'Picanto (Pantalla Flotante 8")',
      'Sonet (Pantalla Central 8" / 10.25")',
      'K3 / K3 Cross (Doble Pantalla Panorámica)',
      'EV6 / EV9 (Pantalla Panorámica Curva 12.3")',
      'Sorento (Doble Pantalla Panorámica 12.3")',
      'Personalizado / Otra Referencia Kia',
    ]
  },
  {
    nombre: 'Hyundai',
    modelos: [
      'Tucson (Pantalla Central Táctil 10.25" & Clúster Digital)',
      'Creta / Creta Grand (Pantalla Central 10.25")',
      'Kona Híbrida / Eléctrica (Doble Pantalla 12.3")',
      'Santa Fe (Doble Pantalla Panorámica Curva 12.3")',
      'HB20 / HB20S (Pantalla Central 8")',
      'Ioniq 5 (Doble Pantalla 12.3")',
      'Personalizado / Otra Referencia Hyundai',
    ]
  },
  {
    nombre: 'Nissan',
    modelos: [
      'Frontier / Navara (Pantalla Central 8")',
      'Kicks (Pantalla Central NissanConnect 8")',
      'Qashqai (Pantalla Central 12.3" & Clúster Digital)',
      'X-Trail e-POWER (Pantalla Central 12.3" & Clúster Digital 12.3")',
      'Versa (Pantalla Central 7" / 8")',
      'Sentra (Pantalla Flotante 8")',
      'Personalizado / Otra Referencia Nissan',
    ]
  },
  {
    nombre: 'Renault',
    modelos: [
      'Duster (Pantalla Easy Link 8")',
      'Kardian (Pantalla Central 8" & Clúster Digital 7")',
      'Kwid / Kwid E-Tech (Pantalla Media Evolution 8")',
      'Arkana (Pantalla Central Vertical 9.3" & Clúster)',
      'Koleos (Pantalla Vertical R-Link 8.7")',
      'Oroch (Pantalla Flotante 8")',
      'Megane E-Tech (Pantalla OpenR 12" & Clúster 12.3")',
      'Personalizado / Otra Referencia Renault',
    ]
  },
  {
    nombre: 'Audi',
    modelos: [
      'Q3 / Q3 Sportback (Pantalla MMI Touch 10.1" & Virtual Cockpit)',
      'Q5 / Q5 Sportback (Pantalla MMI Touch 10.1")',
      'A3 / S3 (Pantalla MMI Touch 10.1" & Virtual Cockpit)',
      'A4 / A5 (Pantalla Flotante MMI Touch 10.1")',
      'Q7 / Q8 (Doble Pantalla MMI Touch 10.1" + 8.6")',
      'e-tron / Q8 e-tron (Doble Pantalla Central MMI)',
      'Personalizado / Otra Referencia Audi',
    ]
  },
  {
    nombre: 'Volkswagen',
    modelos: [
      'T-Cross (Pantalla VW Play 10" & Active Info Display)',
      'Nivus (Pantalla VW Play 10" & Clúster Digital 10.25")',
      'Taos (Pantalla VW Play 10" & Digital Cockpit Pro)',
      'Amarok (Pantalla Central Vertical 12")',
      'Tiguan (Pantalla Central 12.9" / 15")',
      'Virtus / Polo (Pantalla VW Play 10")',
      'Personalizado / Otra Referencia Volkswagen',
    ]
  },
  {
    nombre: 'Suzuki',
    modelos: [
      'Grand Vitara Híbrida (Pantalla Flotante 9" & Clúster)',
      'Jimny (Pantalla Central 7" / 9")',
      'Fronx (Pantalla Flotante 9")',
      'Swift / Swift Híbrido (Pantalla Central 7" / 9")',
      'Baleno (Pantalla Central 9")',
      'Personalizado / Otra Referencia Suzuki',
    ]
  },
  {
    nombre: 'JAC',
    modelos: [
      'JS4 (Pantalla Central Flotante 10.25")',
      'JS6 (Doble Pantalla Integrada 12.3")',
      'JS8 (Pantalla Central 10.25")',
      'T8 PRO / T9 Pickup (Pantalla Vertical 10.4")',
      'E-J7 Eléctrico (Pantalla Vertical 10.4")',
      'Personalizado / Otra Referencia JAC',
    ]
  },
  {
    nombre: 'Jetour',
    modelos: [
      'Dashing (Pantalla Central 15.6" & Clúster)',
      'X70 / X70 Plus (Doble Pantalla Panorámica 10.25")',
      'T2 (Pantalla Central 15.6" & Clúster Digital)',
      'X90 Plus (Doble Pantalla Panorámica 12.3")',
      'Personalizado / Otra Referencia Jetour',
    ]
  },
  {
    nombre: 'Citroen',
    modelos: [
      'C3 (Pantalla Táctil 10" Citroën Connect)',
      'Basalt (Pantalla Táctil 10.25")',
      'C4 Cactus (Pantalla Central 7")',
      'C5 Aircross (Pantalla Central 10" & Clúster 12.3")',
      'Personalizado / Otra Referencia Citroen',
    ]
  },
  {
    nombre: 'Peugeot',
    modelos: [
      '208 (Pantalla Central 10" & Clúster i-Cockpit 3D)',
      '2008 (Pantalla Central 10" & i-Cockpit 3D 10")',
      '3008 (Pantalla Panorámica Curva 21")',
      '5008 (Pantalla Panorámica Curva 21")',
      'Personalizado / Otra Referencia Peugeot',
    ]
  },
  {
    nombre: 'MG',
    modelos: [
      'ZS / ZS EV (Pantalla Central 10.1")',
      'MG4 EV (Pantalla Central 10.25" & Clúster 7")',
      'MG GT (Pantalla Central 10" & Clúster 12.3")',
      'Marvel R (Pantalla Vertical Gigante 19.4")',
      'HS (Pantalla Central 10.1" & Clúster 12.3")',
      'Personalizado / Otra Referencia MG',
    ]
  },
  {
    nombre: 'Subaru',
    modelos: [
      'Forester (Pantalla Central 8" / 11.6")',
      'Outback (Pantalla Vertical Starlink 11.6")',
      'Crosstrek (Pantalla Vertical 11.6")',
      'WRX (Pantalla Vertical 11.6")',
      'Personalizado / Otra Referencia Subaru',
    ]
  },
  {
    nombre: 'Isuzu',
    modelos: [
      'D-Max (Pantalla Central 9" & Clúster)',
      'MU-X (Pantalla Central 9")',
      'Personalizado / Otra Referencia Isuzu',
    ]
  }
];

export const AUTOMOTIVE_DEVICE_ITEMS = AUTOMOTIVE_DATABASE.flatMap(brand =>
  brand.modelos.map(model => ({
    brand: brand.nombre,
    category: 'Automotriz' as const,
    model,
  }))
);
