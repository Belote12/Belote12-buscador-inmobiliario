# Buscador inmobiliario

Base inicial para reunir y ordenar avisos de alquiler. Esta versión **no consulta portales, no ejecuta Playwright y no se despliega**. Su objetivo es dejar acordados el modelo de búsqueda, el panel y los límites de una futura integración autorizada.

## Criterio de búsqueda acordado

| Campo | Regla |
| --- | --- |
| Operación | Alquiler |
| Zonas (prioridad) | Ramos Mejía (1), Haedo (2), Lomas del Mirador (3) |
| Presupuesto mensual total | hasta ARS 1.300.000, incluyendo expensas |
| Ambientes | 3 o más |
| Superficie | más de 60 m² |
| Antigüedad | menor a 15 años |
| Exterior | patio **o** balcón, obligatorio |
| Tipo (prioridad) | departamento (1), PH (2), casa (3) |
| Cochera | deseable; no excluyente |
| Mascotas | acepta mascotas |
| Frecuencia objetivo | una vez por hora, solo cuando exista una fuente autorizada |

## Estructura

- `frontend/`: panel React/Vite/TypeScript; por ahora muestra el perfil de búsqueda y no realiza solicitudes.
- `backend/`: API FastAPI mínima y contrato para conectores. La ejecución de conectores está bloqueada por configuración.
- `docs/PORTALES_Y_CUMPLIMIENTO.md`: resultado del relevamiento inicial y requisitos antes de habilitar fuentes.
- `docs/DECISIONES.md`: decisiones de la primera versión.

## Desarrollo local

Requisitos: Node.js 20+ y Python 3.11+.

```bash
cd frontend
npm install
npm run dev
```

En otra terminal:

```bash
cd backend
python -m venv .venv
.venv\\Scripts\\activate
pip install -e .[dev]
uvicorn app.main:app --reload
```

El backend responde en `http://127.0.0.1:8000/health`. No hay tarea horaria configurada.

## Próximo paso seguro

Antes de conectar un portal, registrar por fuente: autorización escrita o API oficial aplicable, términos vigentes, límites de frecuencia, campos disponibles, retención permitida y responsable. Ver `docs/PORTALES_Y_CUMPLIMIENTO.md`.
