# MacBook Pro - Experiencia Web Interactiva 3D

Una landing page interactiva y moderna para el MacBook Pro, construida con React Three Fiber (R3F) y GSAP. Esta aplicación web ofrece una experiencia inmersiva con modelos 3D interactivos, animaciones fluidas basadas en scroll y visualización de productos en tiempo real.

## 🚀 Características Principales

### Modelo 3D Interactivo
- **Visualizador de Producto**: Modelo 3D del MacBook Pro renderizado con React Three Fiber
- **Personalización en Tiempo Real**:
  - Cambio de color (Gris Espacial / Negro Espacial)
  - Selección de tamaño (14" / 16")
- **Rotación Animada**: El modelo rota 360° basado en el scroll del usuario

### Animaciones con GSAP
- **ScrollTrigger**: Animaciones sincronizadas con el desplazamiento de la página
- **SplitText**: Efectos de texto animado
- **Transiciones Fluidas**: Efectos de entrada y salida suaves para todos los elementos
- **Timelines Complejos**: Secuencias de animación coordinadas entre múltiples elementos

### Secciones de la Aplicación

1. **Navbar**
   - Navegación fija con enlaces a secciones

2. **Hero**
   - Video de presentación con reproducción automática
   - Título y call-to-action

3. **Product Viewer**
   - Visualizador 3D interactivo
   - Controles para cambiar color y tamaño del modelo
   - Iluminación de estudio profesional (StudioLights)

4. **Showcase**
   - Sección destacada sobre el chip M4
   - Video con efectos de máscara y animaciones de scroll
   - Información sobre rendimiento y características

5. **Performance**
   - Galería de imágenes de rendimiento
   - Layout dinámico con posicionamiento absoluto

6. **Features** (Sección Principal)
   - Modelo 3D del MacBook con rotación basada en scroll
   - Cambio dinámico de videos en la pantalla del MacBook según el scroll
   - 5 características destacadas con animaciones:
     - Email AI
     - Image AI
     - Summarize AI
     - AirDrop
     - Writing Tool
   - Cada característica se revela con su video correspondiente

7. **Highlights**
   - Layout tipo masonry con características destacadas
   - Animaciones de entrada escalonadas
   - Información sobre batería, pantalla y Apple Intelligence

8. **Footer**
   - Enlaces legales y de navegación

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **Vite 7** - Build tool y dev server
- **React Three Fiber (R3F)** - Renderizado 3D con Three.js
- **@react-three/drei** - Utilidades y helpers para R3F
- **GSAP** - Animaciones avanzadas (ScrollTrigger, SplitText)
- **@gsap/react** - Hooks de React para GSAP
- **Tailwind CSS 4** - Framework de estilos utility-first (con @tailwindcss/vite)
- **Zustand** - Gestión de estado global ligera
- **react-responsive** - Detección de dispositivos responsive
- **clsx** - Composición de clases CSS

## 📦 Instalación

```bash
# Instalar dependencias
npm install
# o
pnpm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build de producción
npm run preview

# Linter
npm run lint
```

## 🎨 Características Técnicas

### Gestión de Estado
- **Zustand Store**: Maneja el estado global del MacBook (color, escala, textura/video actual)
- **Estado Reactivo**: Los cambios en el store actualizan automáticamente el modelo 3D

### Renderizado 3D
- **Modelos GLTF**: Carga y renderiza modelos 3D optimizados (MacBook 14" y 16")
- **ModelSwitcher**: Componente para alternar entre modelos según la selección
- **Texturas de Video**: Reproduce videos directamente en la pantalla del MacBook
- **Iluminación Personalizada**: Sistema de luces de estudio (StudioLights) para mejor visualización

### Responsive Design
- **Diseño Adaptativo**: Optimizado para desktop, tablet y móvil
- **Modelos Escalados**: Ajuste automático del tamaño del modelo según el dispositivo
- **Animaciones Condicionales**: Algunas animaciones se desactivan en dispositivos móviles para mejor rendimiento

### Optimizaciones
- **Precarga de Recursos**: Videos y modelos se precargan para transiciones suaves
- **Lazy Loading**: Componentes 3D cargados con Suspense
- **Scroll Performance**: Animaciones optimizadas con scrub para scroll suave

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── models/           # Modelos 3D del MacBook
│   │   ├── Macbook.jsx   # Wrapper del modelo
│   │   ├── Macbook-14.jsx
│   │   └── Macbook-16.jsx
│   ├── three/            # Componentes auxiliares de Three.js
│   │   └── ModelSwitcher.jsx
│   ├── Features.jsx      # Sección principal con modelo 3D
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Highlights.jsx
│   ├── Navbar.jsx
│   ├── Perfomance.jsx    # Sección de rendimiento
│   ├── ProductViewer.jsx
│   ├── Showcase.jsx
│   └── StudioLights.jsx
├── store/
│   └── index.js          # Store de Zustand
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Uso

1. **Cambiar Color del MacBook**: Usa los controles en la sección "Product Viewer"
2. **Cambiar Tamaño**: Selecciona entre 14" y 16" en los controles
3. **Explorar Características**: Desplázate por la página para ver las animaciones y cambios de video en el modelo 3D
4. **Interactuar con el Modelo**: El modelo rota automáticamente mientras haces scroll en la sección Features

## 📝 Notas

- Los modelos 3D se cargan desde `/public/models/`
- Los videos se encuentran en `/public/videos/`
- Las imágenes y assets están en `/public/`
- El proyecto utiliza ESLint para mantener la calidad del código

## 🔧 Configuración Adicional

### React Compiler
El React Compiler no está habilitado por defecto debido a su impacto en el rendimiento de desarrollo y build. Para agregarlo, consulta la [documentación oficial](https://react.dev/learn/react-compiler/installation).

### TypeScript
Este proyecto utiliza JavaScript. Si deseas migrar a TypeScript, puedes usar el [template de Vite con TypeScript](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) como referencia.
