# Portales y cumplimiento

Fecha de relevamiento inicial: 2026-11-03. Alcance: Argenprop y ZonaProp. Este documento no autoriza ninguna extracción; registra qué falta validar antes de habilitar una fuente.

## Conclusión operativa

No se habilita Playwright, scraping, tareas horarias ni recolección de avisos. Solo podrá activarse una integración tras confirmar por escrito o en documentación oficial que el uso previsto está permitido, respetando límites, autenticación, retención y atribución.

| Fuente | Hallazgo público | Decisión |
| --- | --- | --- |
| Argenprop | Sus términos prohíben extraer (scraping) contenido o base de datos para listas de inventario u otra información privada, y prohíben copiar, reproducir o distribuir el material. Ofrece búsqueda guardada y alertas nativas para usuarios registrados. No se identificó una API pública para este caso de uso. | Usar las alertas y búsqueda guardada nativas, o solicitar una integración/permiso escrito. No automatizar el sitio con navegador ni extraer avisos. |
| ZonaProp | Sus términos prohíben usar máquinas, software, herramientas, agentes u otros mecanismos para navegar o buscar distintos de las herramientas del sitio; además restringen la reproducción y uso comercial no autorizado. No se identificó una API pública para este caso de uso. | Usar las herramientas de búsqueda y alertas que el portal ofrezca al usuario, o solicitar una integración/permiso escrito a Navent/Dridco. No automatizar el sitio con navegador ni extraer avisos. |

## Evidencia y límites del relevamiento

- Argenprop: [términos y condiciones](https://www.argenprop.com/TerminosCondiciones), en particular las restricciones sobre copia y extracción, y las funciones de búsquedas guardadas/alertas. La revisión se hizo el 2026-11-03.
- ZonaProp: [términos y condiciones](https://www.zonaprop.com.ar/terminos.bum), en particular §§ 1.3, 1.5 y 7. La página indica última actualización el 22 de febrero de 2018; se debe confirmar vigencia directamente con el portal antes de cualquier acuerdo.
- `robots.txt` es una señal técnica, no una autorización contractual. No se utilizará como base suficiente para automatizar ninguna fuente.
- Los portales pueden cambiar términos, APIs, atributos y límites sin aviso. Confirmar el texto vigente antes de cada activación.

## Lista de aprobación por fuente

1. URL y fecha de términos/API revisados.
2. Base de autorización (API, permiso escrito o acuerdo) archivada.
3. Frecuencia, cuota y política ante error definidas; una hora no se presume válida.
4. Mapeo de filtros: alquiler, localidad, precio + expensas, ambientes, m², antigüedad, patio/balcón, tipo, cochera y mascotas.
5. Política de almacenamiento, retención, enlace/atribución y datos personales aprobada.
6. Propietario responsable y mecanismo de apagado inmediato definidos.

No se usarán mecanismos para sortear autenticación, CAPTCHA, rate limits, bloqueos ni otras medidas técnicas.
