# Portales y cumplimiento

Fecha de relevamiento inicial: 2026-11-03. Este documento no autoriza ninguna extracción; registra qué falta validar antes de habilitar una fuente.

## Conclusión operativa

No se habilita Playwright, scraping, tareas horarias ni recolección de avisos. Solo podrá activarse una integración tras confirmar por escrito o en documentación oficial que el uso previsto está permitido, respetando límites, autenticación, retención y atribución.

| Fuente | Hallazgo público | Decisión |
| --- | --- | --- |
| Mercado Libre Inmuebles | Existe documentación para una API de inmuebles. Sus términos de desarrolladores prohíben robots, harvesters, spiders y scraping para obtener contenido que no sea entregado por el programa/API; también prohíben evadir límites. | Evaluar únicamente API oficial, con credenciales propias y aprobación del caso de uso. No automatizar la web. |
| Argenprop | Se localizaron términos de uso públicos. El acceso automatizado y una API pública aplicable a este buscador no quedaron verificados en este relevamiento. | No conectar ni automatizar sin autorización expresa del titular o canal oficial documentado. |
| ZonaProp | No se verificó una API pública aplicable ni autorización de recolección automática en este relevamiento. | No conectar ni automatizar; solicitar canal/permiso comercial u oficial. |

## Evidencia y límites del relevamiento

- Mercado Libre: [guía de inmuebles](https://developers.mercadolibre.com.ar/es_ar/tipos-de-publicacion-y-actualizaciones-de-articulos/introduccion-guia-de-inmuebles) y [términos de desarrolladores](https://developers.mercadolibre.com.ar/es_ar-terminos-y-condiciones). La consulta pública de estos recursos devolvió restricciones de acceso desde el verificador, por lo que deben revisarse manualmente al momento de integrar.
- Argenprop: [términos y condiciones](https://www.argenprop.com/terminoscondiciones). El verificador no pudo abrir la página por la respuesta del sitio; esto no debe interpretarse como permiso.
- Los portales pueden cambiar términos, APIs, atributos y límites sin aviso. Confirmar el texto vigente antes de cada activación.

## Lista de aprobación por fuente

1. URL y fecha de términos/API revisados.
2. Base de autorización (API, permiso escrito o acuerdo) archivada.
3. Frecuencia, cuota y política ante error definidas; una hora no se presume válida.
4. Mapeo de filtros: alquiler, localidad, precio + expensas, ambientes, m², antigüedad, patio/balcón, tipo, cochera y mascotas.
5. Política de almacenamiento, retención, enlace/atribución y datos personales aprobada.
6. Propietario responsable y mecanismo de apagado inmediato definidos.

No se usarán mecanismos para sortear autenticación, CAPTCHA, rate limits, bloqueos ni otras medidas técnicas.
