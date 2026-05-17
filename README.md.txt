Proyecto de Rutas Óptimas 🚚🗺️

Una aplicación web de código abierto diseñada para calcular, optimizar y visualizar rutas de entrega utilizando tecnología OpenStreetMap y OSRM. Ideal para repartidores que necesitan organizar sus paradas de manera eficiente.

Características Principales

Buscador Integrado: Encuentra direcciones fácilmente usando Nominatim.

Orden Manual (Drag & Drop): Arrastra y suelta las direcciones en tu lista para personalizar el orden de tus entregas.

Optimización Automática (TSP): Resuelve el problema del viajante y reordena automáticamente tus paradas para minimizar la distancia de manejo.

Cálculo de Tiempos: Estima el tiempo total de tu ruta sumando el tiempo de conducción y agregando un promedio de 5 minutos por paquete entregado.

Exportación a Google Maps: Envía la ruta calculada directamente a la aplicación móvil de Google Maps para iniciar la navegación curva por curva.

Tecnologías Utilizadas

HTML5, JavaScript y Tailwind CSS (Frontend responsivo sin frameworks pesados).

Leaflet.js: Renderizado interactivo de mapas.

OpenStreetMap (Nominatim): Geocodificación (búsqueda de direcciones).

Project-OSRM: Máquina de enrutamiento y algoritmo de optimización.

SortableJS: Lógica para arrastrar y soltar (Drag and Drop) adaptada para pantallas táctiles.

Uso en Local

Al ser una aplicación basada puramente en el cliente (Client-Side), no requiere instalación de servidores ni bases de datos.

Descarga o clona el archivo index.html.

Ábrelo haciendo doble clic directamente en cualquier navegador moderno (Chrome, Safari, Edge, Firefox).

Despliegue (Hosting Gratuito)

Este proyecto está preparado para ser alojado de manera 100% gratuita a través de GitHub Pages. Sigue las instrucciones del repositorio para activar la URL pública.