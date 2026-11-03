# Arquitectura propuesta — INMO TRACKER

## Propósito

INMO TRACKER centraliza resultados de fuentes inmobiliarias **autorizadas**, aplica el perfil de búsqueda, conserva trazabilidad y presenta propiedades priorizadas. Un conector no autorizado permanece deshabilitado y no puede iniciar tráfico de red.

## Componentes

```text
Fuentes autorizadas ──> Conectores ──> Normalizador ──> Motor de reglas ──> Persistencia
                                                                    │              │
                                                                    └──> Ranking ──┴──> API FastAPI ──> Panel React
```

| Componente | Responsabilidad | Estado actual |
| --- | --- | --- |
| `frontend/` | Panel responsive React/Vite/TypeScript. | Base creada; diseño completo en etapa 2. |
| `backend/app/domain/` | Modelos del dominio: perfil, propiedad, campos pendientes, detección y ranking. | Reservado para etapa 3–4. |
| `backend/app/connectors/sources/` | Adaptadores aislados por proveedor; validan autorización y normalizan respuestas. | Reservado; todos desactivados. |
| `backend/app/services/` | Reglas, cálculo de total, deduplicación, historial y orquestación. | Reservado para etapas 4 y 6. |
| `supabase/` | Migraciones versionadas; datos y autenticación. | Sin proyecto ni credenciales configurados. |

## Contrato de conector

Cada conector futuro implementará el mismo contrato lógico:

1. Declarar la fuente, el método de acceso y la evidencia de autorización.
2. Informar si está habilitado y la causa si no lo está.
3. Recibir un perfil de búsqueda, respetar las cuotas del proveedor y devolver datos permitidos.
4. Convertir la respuesta a un registro normalizado con URL de origen y estado de verificación por campo.
5. No resolver CAPTCHA, no eludir bloqueos y no usar Playwright salvo permiso expreso del proveedor para ese flujo.

El motor central no conoce detalles de cada portal. Si no existe una autorización activa, la ejecución termina antes de realizar una solicitud.

## Datos y seguridad previstos

- Supabase/Postgres se incorporará en etapa 3, mediante migraciones; no hay esquema remoto todavía.
- Las tablas expuestas mediante Data API tendrán RLS habilitado y permisos mínimos explícitos.
- Cada fila de datos personales o de usuario tendrá propietario; las políticas restringirán lectura y escritura a dicho usuario autenticado.
- El frontend usará únicamente URL y clave publicable. `SUPABASE_SERVICE_ROLE_KEY` queda solo en backend y nunca se registra.
- Imágenes se mostrarán por URL de origen solo si la fuente lo permite; no se copiarán a almacenamiento propio en esta etapa.

## Ejecución futura

El scheduler de la etapa 7 disparará el motor cada 60 minutos únicamente para conectores habilitados. Usará un bloqueo de ejecución, registro estructurado y resultado por fuente; no se programará mientras no haya por lo menos una fuente autorizada.

## Decisiones pendientes

- Elegir fuente(s) con API, feed o acuerdo de acceso vigente.
- Crear y vincular un proyecto Supabase privado.
- Definir el único usuario inicial o el modelo multiusuario antes de escribir políticas RLS.
- Elegir el servicio de despliegue al llegar a la etapa 8.
