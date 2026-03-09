# Prueba Maquetador Web DECSKILL AVORIS

Según los objetivos de la prueba, se ha desarrollado una página web responsive y funcional usando HTML, CSS y JavaScript, que se visualiza correctamente desde escritorio, tablet y móvil, siguiendo el diseño base proporcionado en el archivo de Figma. 


## Visualización del sitio web

Netlify: https://decskill-avoris.netlify.app/

Para visualizar el proyecto en local es necesario descomprimir el archivo, instalar `node_modules` con `npm install` y abrir el servidor local con `npm run dev`.


## HTML: Semántica

- Elementos semánticos de estructura: header, main, h1-h2-h3-h4, nav, section, aside, details-summary, footer
- Elementos semánticos de contenido: dl-dt-dd, img, p, ul-li
- Elementos semánticos de formulario e interacción: fieldset, legend, label, button
- Elementos semánticos de metadatos: html, head, meta, title, body
- Atributos semánticos: lang, id, class, href, alt, type="button", aria-label, hidden, aria-expanded
- Atributos semánticos de formularios: for, name, value, placeholder, type


## HTML: Estructura

Se ha instalado Parcel como empaquetador para poder integrar PostHTML, lo que permite trabajar con partials de HTML y loops, lo que permite crear un código más modular y menos repetitivo, manteniendo la consistencia de la estructura de la página.

La organización de los archivos HTML se encuentra en la carpeta `src/views` donde encontramos los siguientes parciales: 

- carpetas de componentes específicos: `cards`, `filters` y `slider`.
- carpeta icons contiene los iconos que se utilizan en el proyecto en formato `SVG`, formato que permite manipular mediante CSS los atributos `fill` o `stroke` para cambiar los colores en respuesta a interacciones, como hover.
- archivos `header.html` y `footer.html`.


## CSS

Se ha empleado la metodología de nomenclatura BEM (bloque, elemento, modificador). Para ajustarnos a esta sintaxis, se ha configurado una regla en stylelint que indica un error al compilar en caso de que alguna clase no se ajuste al patrón: `"selector-class-pattern": "^.[a-z]([a-z0-9-]+)?(__([a-z0-
9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$"`.

Se ha instalado la dependencia stylelint porque además de la regla comentada, se ha agregado una configuración estándar para detectar fallos de estilo en scss.

Se hace uso del preprocesador Sass aunque la mayoría de las reglas se han trabajado sin anidamiento ya que se ha tenido en cuenta la dirección en la que los navegadores interpretan los selectores CSS compuestos es de derecha a izquierda.

Para mantener los estilos organizados y facilitar la localización de las reglas y su mantenimiento se ha estructurado la carpeta `src/scss` de la siguiente manera:

- `settings`: contiene variables, colores, tipografías y configuraciones globales.
- `components`: incluye los estilos específicos de los componentes trabajados: navigation, heading, slider, accordion, filters, checkbox, cards y dropdown.
- `base`: estilos base del proyecto como resets, normalizaciones y elementos con estilos preconfigurados.
- `layout`: reglas relacionadas con la estructura de la página como header, footer, container.
- `tools`: contiene el mixin que se reutiliza en todo el proyecto.

Todos estos parciales se importan en `style.scss`, que actúa como archivo principal de Sass y se compila en el CSS final.


## JS

Se ha añadido funcionalidad básica utilizando JavaScript Vanilla en el panel de filtros, en el dropdown del desglose de precios, en el panel de navegación en tablets y móviles y para mostrar los checkbox ocultos en el formulario del panel de filtros.


## Validadores de HTML, CSS y accesibilidad

- HTML: https://validator.w3.org/. El validador reconoce errores en los atributos de los scripts de postHTML.
- CSS: https://jigsaw.w3.org/css-validator/validator. El validador aprueba la hoja de estilos.
- Color: https://accessibleweb.com/color-contrast-checker/. El subtítulo de la página utiliza un color sin suficiente contraste.
- PageSpeedInsights. Accesibilidad:
    * Subtítulo: Los colores de fondo y de primer plano no tienen una relación de contraste adecuada. 
    * Dots slider: Las áreas táctiles no tienen un tamaño o un espaciado suficientes. 
    * H1-H3: Los elementos de encabezado no aparecen en orden secuencial descendente.

Para mejorar la accesibilidad sería conveniente utilizar un color con más contraste en el subtítulo, separar los indicadores de diapositiva del slider, especialmente en dispositivos de menor tamaño, y replantear la estructura jerárquica de los títulos de la página para que sigan un orden descendente lógico.