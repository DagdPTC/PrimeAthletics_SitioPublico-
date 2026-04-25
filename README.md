# PrimeAthletics - Sitio Público

## Descripción del Proyecto

PrimeAthletics es una aplicación web de comercio electrónico enfocada en la venta de productos deportivos como ropa, calzado y accesorios para hombres, mujeres y niños.

El presente proyecto corresponde al desarrollo del frontend (sitio público), el cual actualmente implementa la maquetación completa de la interfaz, navegación entre vistas y visualización de información utilizando datos simulados (datos quemados), sin integración con un backend.

---

## Integrantes

- Darío Andrés García Domínguez
- Jonathan Alexander Santos Morales
- Iván Alejandro Barrera Escalante
- Kenneth Enrique Orellana Tobar

---

## Tecnologías Utilizadas

### Frontend

- React 19
- React Router DOM
- Vite
- Tailwind CSS

### Librerías adicionales

- lucide-react

### Herramientas de desarrollo

- ESLint
- @vitejs/plugin-react

---

## Dependencias Principales

```json
"dependencies": {
  "@tailwindcss/vite": "^4.2.2",
  "lucide-react": "^1.8.0",
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "react-router-dom": "^7.14.1",
  "tailwindcss": "^4.2.2"
}
```

---

## Instalación y Ejecución

1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd PrimeAthletics_SitioPublico
```

2. Instalar dependencias

```bash
npm install
```

3. Ejecutar en entorno de desarrollo

```bash
npm run dev
```

4. Generar build de producción

## Estructura del Proyecto

```
src/
│
├── components/        Componentes reutilizables
│   ├── auth/
│   ├── cards/
│   ├── cart/
│   ├── Checkout/
│   ├── Home/
│   ├── Products/
│   └── ...
│
├── context/           Manejo de estado global (carrito)
│
├── data/              Datos simulados (productos, categorías, reseñas, filtros)
│
├── screens/           Pantallas principales de la aplicación
│
├── utils/             Funciones auxiliares
│
├── App.jsx            Configuración de rutas
├── main.jsx           Punto de entrada
```

---

## Funcionalidades Implementadas

- Maquetación completa del sitio web
- Navegación entre pantallas mediante React Router
- Visualización de productos por categorías
- Vista de detalle de producto
- Sistema de filtrado y ordenamiento de productos
- Carrito de compras (interfaz y lógica en frontend)
- Flujo de checkout (interfaz)
- Sistema de reseñas basado en datos simulados
- Interfaces de autenticación (login, registro, recuperación de contraseña)

---

## Configuraciones Adicionales

- Uso de Context API para la gestión del carrito de compras
- Organización modular basada en componentes reutilizables
- Manejo de datos simulados desde la carpeta `/src/data` para facilitar futura integración con backend
- Estilización mediante Tailwind CSS

---

## Estado del Proyecto

El proyecto se encuentra en fase de desarrollo frontend.

Actualmente:

- Se ha completado la maquetación
- Se ha implementado la navegabilidad entre vistas
- Se utilizan datos estáticos (quemados)

Pendiente:

- Integración con backend
- Persistencia de datos
- Implementación de lógica real de autenticación y pagos

---

## Notas

- Este proyecto corresponde únicamente al frontend del sistema
- Las imágenes están almacenadas en la carpeta `/public/img`
- La estructura de datos ha sido diseñada para facilitar su conexión futura con servicios API

---

## Licencia

Uso académico
