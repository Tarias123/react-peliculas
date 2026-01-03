# 🎬 React Movies - Frontend Lab

Este repositorio es un registro del desarrollo de una plataforma de gestión de películas. El proyecto está diseñado siguiendo una arquitectura de **Diseño Orientado a Funcionalidades (Feature-Driven Design)**, separando la lógica por módulos escalables (Películas, Actores, Géneros, Cines).

> 🚧 **Estado del Proyecto:** En desarrollo. Actualmente trabajando en la interfaz de usuario y navegación dinámica.

## 🏗️ Arquitectura del Proyecto

El proyecto se organiza bajo la carpeta `src/Features`, donde cada módulo es independiente y autosuficiente:

* **Models**: Definición de interfaces de TypeScript (Contratos de datos).
* **Components**: Componentes específicos de la funcionalidad (Cards, Listas, Formularios).
* **Services**: (Próximamente) Integración con API de C# mediante Fetch/Axios.

## 🚀 Tecnologías y Herramientas

* **React 18 + TypeScript**: Tipado estricto para mayor seguridad en el desarrollo.
* **React Router 7**: Gestión de navegación SPA (Single Page Application).
* **Bootstrap 5**: Estilos base y componentes de interfaz.
* **Vite**: Entorno de desarrollo rápido y eficiente.

## 🧠 Conceptos Implementados hasta el momento

1.  **Enrutamiento Dinámico**: Implementación de `Routes` y `NavLink` para una navegación sin recarga de página.
2.  **Componentes Genéricos**: Creación de componentes reutilizables como `ListadoGenerico.tsx` para manejar estados de carga y listas vacías.
3.  **Hooks de React**:
    * `useState` y `useEffect` para el manejo de ciclos de vida y estados complejos.
    * `useMemo` para la optimización de cálculos en el renderizado.
4.  **CSS Modules**: Estilos encapsulados por componente para evitar colisiones de clases.

## 📁 Estructura de Carpetas

```text
src/
├── components/          # Componentes globales reutilizables
├── Features/            # Módulos principales del negocio
│   ├── Actores/
│   ├── Cines/
│   ├── Generos/
│   └── Peliculas/       # Gestión de catálogo y visualización
├── AppRoute.tsx         # Configuración central de rutas
└── main.tsx             # Punto de entrada de la aplicación
