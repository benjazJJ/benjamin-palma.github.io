# Portafolio Personal - Benjamín Palma

Portafolio web profesional, moderno y minimalista desarrollado con HTML, CSS y JavaScript vanilla.

**Sitio en vivo:** [benjazjj.github.io](https://benjazjj.github.io)

Showcasing expertise in **Automatización & RPA**, **Machine Learning**, **Backend Development** (Java/Spring Boot), **Cloud Computing**, and **Big Data**.

## 🚀 Características

- **Diseño moderno y profesional** con tema oscuro y paleta verde esmeralda
- **Barra de progreso de scroll** que muestra el avance en la página
- **Animaciones suaves** y efectos visuales atractivos (staggered, 3D tilt, parallax)
- **Completamente responsive** - optimizado para móvil, tablet y escritorio
- **Single Page Application** con navegación suave
- **Optimizado para rendimiento** (throttling, Intersection Observer)
- **Badge "Disponible para trabajar"** con efecto pulsante
- **Código limpio y mantenible**

## 📁 Estructura del proyecto

```
portfolio/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y diseño
├── script.js           # Interactividad y animaciones
└── README.md           # Este archivo
```

## 🎨 Tecnologías utilizadas

- HTML5 semántico
- CSS3 (Variables, Flexbox, Grid, Animations)
- JavaScript ES6+ (Vanilla)
- Font Awesome 6.4.0 (Iconos)

## 🌟 Secciones incluidas

1. **Hero** - Presentación con código animado
2. **Sobre mí** - Información personal y estadísticas
3. **Tecnologías** - Stack tecnológico organizado por categorías
4. **Habilidades** - Áreas de especialización
5. **Proyectos** - Proyectos destacados con detalles técnicos
6. **Experiencia** - Timeline de experiencia técnica
7. **GitHub** - Enlace al perfil
8. **Contacto** - Métodos de contacto y CTA
9. **Footer** - Enlaces y redes sociales

## 🎯 Cómo usar

### Opción 1: Abrir directamente en el navegador

Simplemente abre el archivo `index.html` en tu navegador favorito.

### Opción 2: Servidor local (recomendado)

Para evitar problemas con CORS y ver el sitio como se vería en producción:

**Con Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Con Node.js (npx):**
```bash
npx serve
```

**Con VS Code:**
Instala la extensión "Live Server" y haz clic derecho en `index.html` > "Open with Live Server"

Luego visita `http://localhost:8000` en tu navegador.

## ✏️ Personalización

### Cambiar información personal

1. **Edita `index.html`:**
   - Busca y reemplaza "Benjamín Palma" con tu nombre
   - Actualiza la información de contacto (email, LinkedIn, GitHub)
   - Modifica las descripciones de proyectos
   - Ajusta las tecnologías y habilidades

### Cambiar colores

2. **Edita `styles.css` (líneas 1-30):**
   ```css
   :root {
       --accent-primary: #10b981;      /* Verde esmeralda */
       --accent-secondary: #34d399;     /* Verde menta */
       --accent-tertiary: #6ee7b7;      /* Verde claro */
       /* Modifica estos valores para cambiar el tema */
   }
   ```

### Agregar nuevos proyectos

3. **Copia y pega una tarjeta de proyecto en `index.html`:**
   ```html
   <div class="project-card">
       <!-- Contenido del proyecto -->
   </div>
   ```

### Agregar nuevas tecnologías

4. **Agrega nuevos items en la sección de tecnologías:**
   ```html
   <div class="tech-item">
       <i class="fab fa-nombre-icono"></i>
       <span>Nombre Tecnología</span>
   </div>
   ```

## 🔗 Enlaces importantes

- **Font Awesome Icons:** https://fontawesome.com/icons
- **Generador de gradientes:** https://cssgradient.io/
- **Paleta de colores:** https://coolors.co/

## 📱 Responsive

El portafolio es completamente responsive con breakpoints en:
- **Desktop:** > 968px
- **Tablet:** 768px - 968px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

## ⚡ Optimización

- Uso de variables CSS para fácil mantenimiento
- Throttling en eventos de scroll para mejor performance
- Lazy loading de animaciones con Intersection Observer
- Código JavaScript modular y optimizado

## 🎭 Animaciones incluidas

- **Barra de progreso de scroll** en la parte superior
- Fade in/up al hacer scroll con staggered delay
- Typing animation en el hero
- Parallax effect en el fondo
- Counter animation en estadísticas
- Hover effects en tarjetas con overlay
- 3D tilt effect en proyectos y skill cards
- Smooth scroll navigation
- Ripple effect en botones
- Cursor glow effect (desktop)
- Badge pulsante "Disponible para trabajar"

## 📦 Despliegue

### GitHub Pages

**IMPORTANTE:** Para un sitio de usuario personal, el repositorio debe llamarse exactamente `tuusuario.github.io`

**Despliegue inicial:**

```bash
# Inicializa el repositorio
git init
git add .
git commit -m "Initial commit"

# Conecta con GitHub (reemplaza con tu usuario)
git remote add origin https://github.com/tuusuario/tuusuario.github.io.git
git branch -M main
git push -u origin main
```

**Activar GitHub Pages:**

1. Ve a tu repositorio en GitHub
2. **Settings** > **Pages**
3. En **Source**: selecciona **main** branch y carpeta **/ (root)**
4. Click en **Save**
5. Espera 1-2 minutos
6. Tu sitio estará en: `https://tuusuario.github.io`

**Actualizar el sitio:**

```bash
git add .
git commit -m "Descripción de cambios"
git push
```

GitHub Pages se actualizará automáticamente en unos minutos.

### Netlify

1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. Tu sitio se desplegará automáticamente

### Vercel

1. Instala Vercel CLI: `npm i -g vercel`
2. En la carpeta del proyecto: `vercel`
3. Sigue las instrucciones

## 🐛 Solución de problemas

**Error 404 en GitHub Pages:**
- El nombre del repositorio debe ser **exactamente** `tuusuario.github.io`
- Ejemplo: `benjazjj.github.io` (no `benjamin-palma.github.io`)
- Ve a Settings > Renombrar repositorio si es necesario
- Después actualiza el remote: `git remote set-url origin https://github.com/tuusuario/tuusuario.github.io.git`

**Los iconos no se muestran:**
- Verifica tu conexión a Internet (Font Awesome se carga desde CDN)
- Alternativamente, descarga Font Awesome localmente

**Las animaciones no funcionan:**
- Asegúrate de que JavaScript esté habilitado en tu navegador
- Abre la consola (F12) para verificar errores

**El diseño se ve roto en móvil:**
- Asegúrate de tener la etiqueta viewport en el HTML
- Verifica que todos los archivos CSS estén cargando correctamente

**"remote origin already exists" en Git:**
- Verifica el remote actual: `git remote -v`
- Actualiza la URL: `git remote set-url origin https://github.com/tuusuario/tuusuario.github.io.git`

## 🔒 Seguridad del repositorio

**Por defecto, solo tú puedes hacer commits a tu repositorio.** Nadie más puede modificarlo a menos que:
- Les des acceso como colaborador
- Aceptes un pull request

**Para proteger tu rama principal:**

1. Ve a **Settings** > **Branches**
2. Click en **Add branch protection rule**
3. Branch name pattern: `main`
4. Marca: **Require pull request reviews before merging**
5. **Save changes**

Esto previene commits directos, incluso tuyos, requiriendo pull requests para todos los cambios.

## 📄 Licencia

Este proyecto es de uso libre. Puedes modificarlo y usarlo para tu propio portafolio.

## 👨‍💻 Autor

**Benjamín Palma**
- Developer especializado en Automatización & RPA, Machine Learning, Backend (Java/Spring Boot), Cloud y Big Data
- GitHub: [@benjazJJ](https://github.com/benjazJJ)
- Sitio web: [benjazjj.github.io](https://benjazjj.github.io)

---

**¿Encontraste un bug o tienes una sugerencia?** No dudes en abrir un issue o hacer un pull request.

**¡Buena suerte con tu portafolio! 🚀**
