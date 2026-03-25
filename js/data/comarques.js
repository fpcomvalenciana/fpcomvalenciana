// Mapa comarca → municipios (según Diputació d'Alacant)
// Nombres en castellano y valenciano según el BOE
export const comarcaMunicipis = {
  "L'Alacantí": {
    es: "L'Alacantí",
    val: "L'Alacantí",
    municipis: {
      "Alicante":                 { val: "Alacant/Alicante" },
      "San Vicente del Raspeig":  { val: "Sant Vicent del Raspeig" },
      "Mutxamel":                 { val: "Mutxamel" },
      "Sant Joan d'Alacant":      { val: "Sant Joan d'Alacant" },
      "El Campello":              { val: "El Campello" },
    }
  },
  "L'Alcoià": {
    es: "L'Alcoià",
    val: "L'Alcoià",
    municipis: {
      "Alcoy/Alcoi":              { val: "Alcoi/Alcoy" },
    }
  },
  "El Comtat": {
    es: "El Comtat",
    val: "El Comtat",
    municipis: {
      "Cocentaina":               { val: "Cocentaina" },
      "Muro de Alcoy/Muro d'Alcoi": { val: "Muro d'Alcoi" },
    }
  },
  "La Marina Alta": {
    es: "La Marina Alta",
    val: "La Marina Alta",
    municipis: {
      "Dénia":                    { val: "Dénia" },
      "Xàbia/Jávea":             { val: "Xàbia" },
      "Pedreguer":                { val: "Pedreguer" },
      "Benissa":                  { val: "Benissa" },
      "Calp/Calpe":              { val: "Calp" },
      "Ondara":                   { val: "Ondara" },
    }
  },
  "La Marina Baixa": {
    es: "La Marina Baixa",
    val: "La Marina Baixa",
    municipis: {
      "Benidorm":                 { val: "Benidorm" },
      "Altea":                    { val: "Altea" },
      "l'Alfàs del Pi":          { val: "l'Alfàs del Pi" },
      "La Vila Joiosa/Villajoyosa": { val: "La Vila Joiosa" },
      "La Nucía":                 { val: "La Nucía" },
      "Callosa d'En Sarrià":     { val: "Callosa d'En Sarrià" },
    }
  },
  "L'Alt Vinalopó": {
    es: "L'Alt Vinalopó",
    val: "L'Alt Vinalopó",
    municipis: {
      "Villena":                  { val: "Villena" },
    }
  },
  "El Vinalopó Mitjà": {
    es: "El Vinalopó Mitjà",
    val: "El Vinalopó Mitjà",
    municipis: {
      "Elda":                     { val: "Elda" },
      "Novelda":                  { val: "Novelda" },
    }
  },
  "El Baix Vinalopó": {
    es: "El Baix Vinalopó",
    val: "El Baix Vinalopó",
    municipis: {
      "Elx/Elche":               { val: "Elx" },
    }
  },
  "La Vega Baixa": {
    es: "La Vega Baixa / El Baix Segura",
    val: "La Vega Baixa / El Baix Segura",
    municipis: {
      "Orihuela":                 { val: "Oriola" },
      "Torrevieja":               { val: "Torrevieja" },
      "Callosa de Segura":        { val: "Callosa de Segura" },
      "Almoradí":                 { val: "Almoradí" },
      "Jacarilla":                { val: "Jacarilla" },
      "Bigastro":                 { val: "Bigastro" },
    }
  },
};

// Llista ordenada de comarcas
export const comarques = Object.keys(comarcaMunicipis);

// Mapa municipio → comarca (índice invers per a cerques ràpides)
export const municipiComarca = {};
for (const [comarca, data] of Object.entries(comarcaMunicipis)) {
  for (const mun of Object.keys(data.municipis)) {
    municipiComarca[mun] = comarca;
  }
}
