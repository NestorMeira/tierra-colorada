# CalMate Argentina

Este es mi primer proyecto hecho con ReactJs, en el curso de CoderHouse,el mismo fue creado con Create React App.Esta tienda permite al cliente mostrar sus productos (remeras para materos y mas...) y realizar las órdenes de compras con sus respectivas cantidades.
Se utiliza una SPA, creada con ReactJS, en cuanto a al backend está realizada en Firebase, donde se encuentra alojada la base de datos de Productos.

## Funcionalidad del proyecto
![](GIF-nav.gif)

Los productos están divididos por categorías, al seleccionar la categoría se mostrarán solamente los productos cargados con dicha categoría.
Al hacer click en el botón ver detalle, se mostrará el producto detallado que permite seleccionar la cantidad que se desea comprar, y contiene un botón para poder adicionarlo al carrito de compras.
Al momento de finalizar la compra, se muestra un detalle de todos los productos seleccionados y el total de la compra.
Para poder realizar el pago de la compra se solicitan los datos del cliente (Nombre, teléfono y correo electronico), para poder generar la orden de compra y mostrarle al cliente el número único de su compra.

## Instalación
Para la instalación del sistema se debe realizar lo siguiente:

Se debe clonar el repositorio:
`git clone https:https://github.com/NestorMeira/ecomers-react-Meira`

Se debe instalar las dependecias:
`npm install`

Se debe iniciar la aplicacion:
`npm start`



## Librerías Utilizadas

### `Material UI`

Se utilizan componentes de MUI v5.9.3 para 

### `React-Router-Dom`

Se utiliza react-router-dom para proveer la navegabilidad del sitio


### `Firebase`

Se utiliza de backend para el alojamiento de Productos, Categorias y Ordenes

