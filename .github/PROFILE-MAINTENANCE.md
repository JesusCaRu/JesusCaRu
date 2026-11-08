# Mantenimiento del perfil

El perfil está en `README.md`. Las cabeceras son SVG locales con cuatro variantes: claro, oscuro, móvil claro y móvil oscuro. El elemento `<picture>` elige la variante según el ancho y las preferencias de color del visitante.

## Editar la cabecera

1. Instalar Node.js 24 y ejecutar `npm ci`.
2. Editar los textos o colores de `scripts/build-assets.mjs`.
3. Ejecutar `npm run build:assets` y `npm run check`.
4. Subir el script y los SVG generados juntos.

La tipografía Manrope se transforma en trazados SVG. El navegador no necesita descargar fuentes. Su licencia está en `assets/Manrope-OFL.txt`. No hay servicios de estadísticas ni generadores de banners en la ruta crítica del perfil.

## Proyectos y contacto

Editar directamente el Markdown. Mantener las descripciones respaldadas por los repositorios públicos y actualizar el párrafo de experiencia cuando cambie el perfil profesional. Los enlaces deben seguir siendo utilizables sin imágenes.

## Actividad 3D

La sección desplegable usa gráficos ya versionados. `.github/workflows/profile-3d.yml` los actualiza diariamente y permite ejecución manual en `main`, mediante el token automático de GitHub. No necesita un token personal ni secretos adicionales. La versión del generador está fijada por SHA.

El workflow solo incluye `profile-3d-contrib/` en su commit, termina correctamente si no hay cambios y hace rebase antes de subir para convivir con ediciones del README. Las imágenes anteriores siguen disponibles si una ejecución falla.

## Verificación

`Check profile` comprueba los recursos locales, los textos alternativos, la compatibilidad del marcado y que el SVG coincida con el generador. Verificar además el README en GitHub en escritorio y móvil, con preferencias de color claras y oscuras. GitHub controla el estilo del texto y la selección final de imágenes; no admite una hoja CSS propia en el README.
