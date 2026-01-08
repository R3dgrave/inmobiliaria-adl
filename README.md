# 🏠 Inmobiliaria ADL

Proyecto de práctica desarrollado para el módulo de **Programación Dinámica con JavaScript**.  
Consiste en un sitio web de bienes raíces que renderiza propiedades de forma dinámica, permitiendo filtrar por **disponibilidad de mascotas**, **tipo de operación (venta o alquiler)** y **búsqueda por nombre**.

---

## 🚀 Características

- **Renderizado Dinámico**  
  Las propiedades no están escritas directamente en el HTML; se generan dinámicamente mediante JavaScript a partir de un archivo de datos.

- **Sistema de Filtros**  
  Filtros funcionales por búsqueda de texto y políticas de mascotas.

- **Diseño Responsivo**  
  Implementado con **Bootstrap 5**, optimizado para dispositivos móviles y escritorio.

- **Accesibilidad (A11y)**  
  Uso de etiquetas semánticas y atributos ARIA para compatibilidad con lectores de pantalla.

- **Página de Detalles**  
  Vista dedicada para mostrar la información completa de cada propiedad.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** (Semántico)
- **CSS3** (Estilos personalizados + Google Fonts)
- **Bootstrap 5** (Framework de diseño)
- **JavaScript (ES6+)**
  - Módulos
  - Arrays
  - Métodos de filtrado
  - Manipulación del DOM
- **FontAwesome** (Iconografía)

---

## 📁 Estructura del Proyecto

```plaintext
/
├── index.html                   # Página de inicio con propiedades destacadas
├── propiedades_venta.html       # Catálogo de propiedades en venta
├── propiedades_alquiler.html    # Catálogo de propiedades en alquiler
├── contacto.html                # Formulario de contacto
├── detalle_propiedad.html       # Plantilla dinámica de detalles
├── assets/
│   ├── css/                     # Estilos personalizados
│   ├── js/                      # Lógica de renderizado y filtros
│   │   ├── datos_propiedades.js # Fuente de datos (Arrays de objetos)
│   │   └── script.js            # Lógica principal
│   └── img/                     # Imágenes de las propiedades
└── sitemap.xml                  # Mapa del sitio (SEO)
```
