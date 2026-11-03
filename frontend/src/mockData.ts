import type { Listing } from "./types";
// Datos exclusivos de interfaz. No representan avisos reales ni provienen de portales.
export const listings: Listing[] = [
  { id:"ramos-1", title:"Departamento luminoso con balcón", location:"Ramos Mejía", type:"Departamento", source:"Demostración", rent:920000, expenses:145000, rooms:3, surface:76, age:8, balcony:"Sí", patio:"No", garage:"Sí", pets:"Sí", score:94, gradient:"linear-gradient(140deg,#315f53,#a2c6ae 55%,#ede2ca)" },
  { id:"haedo-1", title:"Tres ambientes, espacio de trabajo", location:"Haedo", type:"Departamento", source:"Demostración", rent:840000, expenses:110000, rooms:3, surface:68, age:11, balcony:"Sí", patio:"No", garage:"Pendiente", pets:"Sí", score:88, gradient:"linear-gradient(140deg,#d0b38d,#f0e8d8 45%,#607d72)" },
  { id:"ramos-2", title:"PH renovado con patio privado", location:"Ramos Mejía", type:"PH", source:"Demostración", rent:790000, rooms:3, surface:82, age:14, balcony:"No", patio:"Sí", garage:"No", pets:"Pendiente", score:82, gradient:"linear-gradient(140deg,#b9d0c2,#f4f1e8 48%,#b37a55)" },
  { id:"lomas-1", title:"Casa con cochera y patio", location:"Lomas del Mirador", type:"Casa", source:"Demostración", rent:970000, expenses:50000, rooms:4, surface:105, age:12, balcony:"No", patio:"Sí", garage:"Sí", pets:"Sí", score:74, gradient:"linear-gradient(140deg,#5f796d,#e3d5b9 45%,#d7a16d)" },
];
