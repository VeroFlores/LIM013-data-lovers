import { filterByRol,search,averageInfo, order } from '../src/data.js';
export const inpuTest=[
  {name: "Aatrox",info:{attack: 8,defense: 4,magic: 3,difficulty: 4},tags:["Mage", "Assassin"]},
  {name: "Veigar",info: {attack: 2,defense: 2,magic: 10,difficulty: 7},tags:["Mage"]},
  {name: "Olaf",info: {attack: 9,defense: 5,magic: 3,difficulty: 3},tags: ["Fighter", "Tank"]},
  {name: "Rengar",info: {attack: 7,defense: 4,magic: 2,difficulty: 8},tags:["Assassin", "Fighter"]},
  {name: "Draven",info: {attack: 9,defense: 3,magic: 1,difficulty: 8},tags: ["Marksman"]},
];
export const outputFilterRol=[
  {name: "Aatrox",info:{attack: 8,defense: 4,magic: 3,difficulty: 4},tags:["Mage", "Assassin"]},
  {name: "Rengar",info: {attack: 7,defense: 4,magic: 2,difficulty: 8},tags:["Assassin", "Fighter"]},
];
export const outputSearch=[
  {name: "Aatrox",info:{attack: 8,defense: 4,magic: 3,difficulty: 4},tags:["Mage", "Assassin"]},
];
export const outputOrderAsc=[
  {name: "Aatrox",info:{attack: 8,defense: 4,magic: 3,difficulty: 4},tags:["Mage", "Assassin"]},
  {name: "Draven",info: {attack: 9,defense: 3,magic: 1,difficulty: 8},tags: ["Marksman"]},
  {name: "Olaf",info: {attack: 9,defense: 5,magic: 3,difficulty: 3},tags: ["Fighter", "Tank"]},
  {name: "Rengar",info: {attack: 7,defense: 4,magic: 2,difficulty: 8},tags:["Assassin", "Fighter"]},
  {name: "Veigar",info: {attack: 2,defense: 2,magic: 10,difficulty: 7},tags:["Mage"]},
];
export const outputOrderDesc=[
  {name: "Veigar",info: {attack: 2,defense: 2,magic: 10,difficulty: 7},tags:["Mage"]},
  {name: "Rengar",info: {attack: 7,defense: 4,magic: 2,difficulty: 8},tags:["Assassin", "Fighter"]},
  {name: "Olaf",info: {attack: 9,defense: 5,magic: 3,difficulty: 3},tags: ["Fighter", "Tank"]},
  {name: "Draven",info: {attack: 9,defense: 3,magic: 1,difficulty: 8},tags: ["Marksman"]},
  {name: "Aatrox",info:{attack: 8,defense: 4,magic: 3,difficulty: 4},tags:["Mage", "Assassin"]},
];
describe('Filtrar según rol',()=>{
  it('Debe ser una función',()=>{
    expect(typeof filterByRol).toBe('function');
  });
  it('Debe retornar al campeón de rol',()=>{
    expect(filterByRol(inpuTest,"Assassin")).toEqual(outputFilterRol);
  })
})
describe('Búsqueda por nombre', () => {
  it('is a function', () => {
    expect(typeof search).toBe('function');
  });
  it('returns `Aatrox`', () => {
    expect(search(inpuTest,"aatrox")).toEqual(outputSearch);
  });
});
describe('Ordenar nombres de A-Z/Z-A', () => {
  it('is a function', () => {
    expect(typeof order).toBe('function');
  });

  it('returns `Nombres ordenados de A-Z`', () => {
    expect([...order(inpuTest,"Ascendente")]).toEqual(outputOrderAsc);
  });
  it('returns `Nombres ordenados de Z-A`', () => {
    expect([...order(inpuTest,"Descendente")]).toEqual(outputOrderDesc);
  });
});
describe('Obtener promedio de ataque del rol asesino', () => {
  it('is a function', () => {
    expect(typeof averageInfo).toBe('function');
  });

  it('returns `(7+8)/2=7.5`', () => {
    expect(averageInfo("attack",outputFilterRol)).toEqual(7.5);
  });
  it('returns `(3+2)/2=2.5`', () => {
    expect(averageInfo("magic",outputFilterRol)).toEqual(2.5);
  });
});
