# Plan de entregas

## Etapa 1 — Estructura y documentación

- [x] Inspección de repositorio e historial.
- [x] Base React/Vite/TypeScript y FastAPI/Pydantic.
- [x] Directorios para dominio, conectores, servicios y migraciones.
- [x] Arquitectura modular y política de conectores autorizados.
- [x] Archivo de entorno de ejemplo sin secretos.
- [x] Relevamiento inicial de Argenprop y ZonaProp.

## Etapa 2 — Panel con datos simulados

- Dashboard, tarjetas, filtros editables, favoritos, descartados, historial y configuración.
- Datos exclusivamente simulados; sin llamadas a portales o a Supabase.

## Etapa 3 — Datos y filtros

- Proyecto Supabase, autenticación, migraciones, RLS y CRUD del perfil.
- Requiere crear el proyecto y cargar variables de entorno fuera del repositorio.

## Etapas posteriores

- Etapa 4: normalización y motor central.
- Etapa 5: conectores con autorización y credenciales verificadas.
- Etapa 6: ranking, deduplicación e historial de detecciones.
- Etapa 7: tarea horaria, bloqueo de concurrencia, registros y recuperación de errores.
- Etapa 8: pruebas, revisión de seguridad y despliegue privado.
