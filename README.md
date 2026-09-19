# andreyagui.github.io

Portafolio personal de Andrey Aguirre Obregón — https://andreyagui.github.io/

Sitio estático (HTML, CSS y JavaScript sin frameworks), bilingüe ES/EN, publicado con GitHub Pages desde `main`.

## Desarrollo

```bash
npm install
npm run serve        # http://127.0.0.1:4173
npm test             # Playwright: desktop + mobile
```

## Editar contenido

- Textos: `data/content.es.js` y `data/content.en.js` (deben tener exactamente las mismas claves; el test lo verifica).
- Datos compartidos (contacto, proyectos, rutas de imágenes): `data/shared.js`.
- Después de cambiar contenido: `npm run cv:pdf` para regenerar los PDFs del CV, luego `npm test`.

## Regenerar imágenes

- `npm run assets` — foto (desde `~/Downloads/CV Andrey ES ConFoto.pdf`), logos (desde `~/dev/*`) y capturas de rentifycr.com / nexoragents.com.
- `npm run og:image` — imagen para compartir en redes.

## Publicar

`git push origin main`. GitHub Pages publica solo en 1–2 minutos.
