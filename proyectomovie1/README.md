# Mi proyecto React Salud Total

**Este proyecto fue diseñado para implementar mi conocimiento adquirido en los cursos en Reac; es una aplicacion web sobre salud para prevenir y ayudar a curar enfermedades  por medio de los remedios naturales, es una aplicacion con diferentes funcionalidades donde se aplicaron los codigos y medios aprendido en los cursos realizados; a continuacion voy a hablar de los componentes que utilice y sus funcionalidades.**

## componente principal (App.js)
La función App retorna un encabezado con dos secciones: la primera sección contiene un enrutador utilizando la etiqueta Routes. Las rutas corresponden a las distintas páginas de la aplicación. Cada una de ellas es manejada por un componente: Inicio, Consejos, Herramientas, Conocenos, Contacto, Recetario, PreyCura, que se renderiza cuando se accede al link  correspondiente. y la barra de navegación (Navbar), mientras que la segunda sección contiene el pie de página (Footer).
### Cabecera tipo Navbar: 
Es un componente Navbar que muestra una barra de navegación en la parte superior de la página web. El componente está escrito en React y utiliza algunos elementos de estilo CSS para dar formato a la apariencia de la barra de navegación.  utiliza un componente Link de react-router-dom para crear enlaces a otras páginas web.
El componente tiene un estado llamado "clicked" que se inicializa en falso y se actualiza cuando se hace clic en el botón de menú. El método handleClick cambia el estado de "clicked" a su valor opuesto cada vez que se llama.
Ademas, se puede mencionar que el menu navbar tiene un menu tipo hamburguesa la cual cuando cambia las dimenciones de la pagina, por ejemplo: a las dimenciones de un movil, aparece el menu tipo hamburguesa que se despliega cuando se preciona. El navbar contiene cada uno de los menu por medio de libnk que al ser precionado los redirecciona a una pagina particular de correspondiente a cada uno de los componentes del menu. 

## A continuacion se hablara de cada uno de las paginas: 

------------
### Pagina "Consejos" (Usando Modales)
Este código es una aplicación React que muestra algunos remedios naturales. El archivo Consejos.css importa algunos estilos CSS para la página. Luego, hay varios componentes Modal, que se importan desde los archivos correspondientes. Además, se importan algunas imágenes.

La función Consejos define varios estados que se utilizan para controlar si se muestran o no los diferentes componentes Modal. También define varios botones que, cuando se hacen clic, muestran el componente correspondiente Modal.

Cada componente Modal muestra un título y un párrafo con información sobre el remedio natural. También muestra una imagen relacionada con el remedio.

Para mostrar los componentes Modal, se utiliza el hook personalizado useModal que se importa desde el archivo UseModalMenu.js. Este hook controla el estado de cada componente Modal para que se muestre o no cuando se hace clic en el botón correspondiente.

En general, la aplicación es muy simple y tiene sus respectivos estilos en componentes .css y consiste principalmente en mostrar información sobre diferentes remedios naturales.
### Componente "Herramienta" (se aplica API, Formularios en react, bootstrap)
Este componente (Herramientas.js) es un componente funcional que se encarga de mostrar información sobre las herramientas disponibles para mejorar la salud y el estilo de vida. Contiene un importado un componente  y dos botones que redirigen a otras páginas (Recetario.js y PreyCura.js).
- IMcorp
Este componente (IMcorp.js) es un formulario para calcular el índice de masa corporal (IMC). Contiene un estado para cada uno de los campos del formulario y una serie de funciones para manejar los cambios en los campos y el envío del formulario.
- PreyCura
Este código es un archivo de JavaScript escrito en el lenguaje de programación React. La función PreyCura se exporta como el componente principal del archivo y es una función que devuelve un fragmento de JSX que contiene un enlace a otra página y un componente FlushExample.

El componente FlushExample es un componente funcional que utiliza el paquete react-bootstrap y su componente Accordion para mostrar una lista de remedios naturales para diversos tipos de dolencias.
Cada tipo de dolencia tiene su propia sección dentro del componente Accordion y se puede expandir o contraer haciendo clic en su encabezado. Los remedios naturales para cada dolencia se muestran en el cuerpo de la sección correspondiente.
- Recetario: 
muestra recetas de comidas obtenidas a través de una API externa.
Primero, importamos React, useState, useEffect y Link de "react" y "./react-router-dom". Luego, importamos algunos componentes personalizados: BarraBusque y TarjetaRece.
Después, definimos una constante llamada apiUrl que almacena elv link de la API que vamos a utilizar para buscar las recetas de comidas.
La función principal Recetario utiliza el hook useState para almacenar y actualizar el estado de tres variables: isCarga, query y recetas.
La variable isCarga se utiliza para indicar si la página está cargando o no. query es una variable que almacena el término de búsqueda ingresado por el usuario. recetas es un array que almacena las recetas de comidas obtenidas de la API.
La función searcRecetas utiliza async/await y el método fetch para realizar una solicitud GET a la API, utilizando la URL apiUrl y el término de búsqueda almacenado en la variable query. Luego, el método json() se utiliza para analizar la respuesta y almacenar los datos de las comidas en la variable recetas.
En el useEffect hook, llamamos a la función searcRecetas para obtener las recetas de comidas. La función se ejecuta solo una vez al cargar la página.
La función handleSubmit se ejecuta cuando el usuario envía el formulario de búsqueda. Se llama a la función searcRecetas para actualizar la lista de recetas con los resultados de la búsqueda.
### Componente "Carousel" (Bootstrap)
El componente "Carrusel" probablemente muestra varias imágenes que se pueden desplazar horizontalmente. Finalmente, se exporta el componente "Conocenos" como el valor predeterminado para poder ser utilizado en otros componentes o archivos.
### Componente Contacto (formularios y otros)
Este código muestra una página de contacto con un formulario que incluye campos para nombre, correo electrónico, asunto y mensaje. El formulario utiliza la librería de Bootstrap para dar estilo a los componentes de formulario.
Se muestra un contenedor Bootstrap container que contiene una fila row. La fila tiene una columna col-md-6 que contiene un formulario Form de Bootstrap.
El formulario incluye cuatro grupos de campos de formulario Form.Group, uno para el nombre, otro para el correo electrónico, otro para el asunto y otro para el mensaje. Cada grupo de campos incluye un Form.Label y un Form.Control que define el tipo de entrada y el placeholder del campo de texto.

### **En forma de conclusion podemos decir que es una aplicacion basica en react que utiliza componentes y funcionamaientos para una aplicacion web, si se logra desarrollar completamente seria una aplicacion bastante util para las personas.**

# Link para ir a la pagina web de la aplicacion: 

------------

http://Chris-tAt.github.io/SaludTotal/