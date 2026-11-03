import { createRoot } from "react-dom/client";
import "./styles.css";

const rows = [
  ["Operación", "Alquiler"], ["Zonas", "Ramos Mejía · Haedo · Lomas del Mirador"],
  ["Tope mensual", "ARS 1.300.000 (incluye expensas)"], ["Ambientes y superficie", "3+ ambientes · más de 60 m²"],
  ["Antigüedad", "menos de 15 años"], ["Exterior", "Patio o balcón (obligatorio)"],
  ["Tipos", "Departamento · PH · Casa"], ["Preferencias", "Cochera deseable · acepta mascotas"],
];

function App() {
  return <main><p className="eyebrow">VERSIÓN INICIAL · SIN FUENTES ACTIVAS</p><h1>Buscador inmobiliario</h1><p className="intro">Perfil preparado para ordenar futuros avisos autorizados.</p><section><h2>Perfil de búsqueda</h2><dl>{rows.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl></section><aside><strong>Estado: en espera</strong><br />No hay scraping, credenciales, automatización horaria ni despliegue habilitados.</aside></main>;
}

createRoot(document.getElementById("root")!).render(<App />);
