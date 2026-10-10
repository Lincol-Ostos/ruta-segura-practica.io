# Ruta Segura · Práctica del curso Fatiga y somnolencia

Práctica interactiva con diapositivas, actividades, medidas preventivas y un examen de 10 preguntas (nota mínima 80%, 2 intentos, orden aleatorio en cada intento).
Material de estudio no oficial. HTML + CSS + JavaScript puro, sin dependencias ni instalación.

Created by **Lincol Ostos**

## Estructura
```
index.html        página principal (incluye la ventana de inicio)
css/styles.css    estilos, con modo claro y oscuro mediante variables CSS
js/app.js         diapositivas, actividades, medidas preventivas y examen
.nojekyll         evita el procesamiento de Jekyll en GitHub Pages
```

## Abrirlo en local
Doble clic en `index.html`, o desde la carpeta: `python3 -m http.server 8000` y entra a http://localhost:8000

## Publicarlo en GitHub Pages
1. Crea un repositorio nuevo en github.com (por ejemplo `ruta-segura-practica`), sin README.
2. En Terminal, dentro de esta carpeta:
   ```
   git init
   git add .
   git commit -m "Primera versión"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/ruta-segura-practica.git
   git push -u origin main
   ```
3. En el repositorio: Settings → Pages → Source: *Deploy from a branch* → Branch: `main` / carpeta `/ (root)` → Save.
4. En uno o dos minutos queda en `https://TU_USUARIO.github.io/ruta-segura-practica/`.

## Dónde editar
- Textos de la ventana de inicio: bloque `#splash` en `index.html`.
- Diapositivas: arreglo `SL` en `js/app.js`.
- Actividades y respuestas correctas: objeto `ACT` (`ok` = índice de la alternativa correcta).
- Preguntas del examen: arreglo `Q` (`a` = índice de la correcta). El mezclado está en `buildDeck`.
- Colores: variables en `:root` de `css/styles.css`.
