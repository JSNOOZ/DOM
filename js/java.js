let identificador;
//getElementByID
identificador = document.getElementById("titulo");
console.log(identificador.innerText);
//getElementbyTagName
seccion = document.getElementsByTagName("section");
console.log(seccion[0].innerText);

etiqueta = document.getElementsByTagName("p");
console.log(etiqueta[0].innerText);

clase = document.getElementsByClassName("parrafo");
console.log(clase[1].innerText);
//getElementbyName
nombre = document.getElementsByName("subtitulo");
console.log(nombre[0].textContent);

//Crear nodo en el DOM
let elemento, contenido;
elemento = document.createElement("p");
contenido = document.createTextNode("Nuevo Parrafo");
elemento.appendChild(contenido); 
etiqueta[2].appendChild(elemento);  

//etiqueta[1].insertBefore(elemento,etiqueta[2]);
//etiqueta[2].insertAdjacentElement("beforebegin",elemento);
//etiqueta[2].insertAdjacentElement("afterend", elemento);

//Remplazar un nodo
elemento = document.createElement("p");
contenido = document.createTextNode("Remplazo Parrafo");
elemento.setAttribute("class", "parrafo");
elemento.appendChild(contenido);
seccion[1].replaceChild(elemento,clase[0]);

//Eliminar NODO
seccion[0].removeChild(nombre[0]);

//crear nodo dentro de nodo
elemento = document.createElement("article");
contenido = document.createTextNode("Articulo de seccion");

elemento.appendChild(contenido);
document.getElementById("nodo").appendChild(elemento);

//seccion[2].appendChild("elemento2");
//Insertar contenido en un nodo
document.getElementById("contenido").innerHTML = 'Información <br/> <p class="nuevo">Otro Parrafo en el Nodo</p>';
document.getElementById("enlace").innerHTML = "Google";
//Cambiar Atributos de un parrafo
etiqueta[0].setAttribute("class","parrafo nuevo");
seccion[2].setAttribute("class","contenido");
seccion[3].setAttribute("class","contenido");

//Estilos 
document.getElementById("titulo").style.background='#F00';
document.getElementById("contenido").style.marginTop='10px'
// Crear la nueva sección 'conoceme'
let seccionConoceme = document.createElement("section");
seccionConoceme.setAttribute("id", "conoceme");

// Crear el título de la sección
let tituloConoceme = document.createElement("h2");
tituloConoceme.innerText = "Conóceme";
// Crear el primer artículo dentro de la sección
let articulo1 = document.createElement("article");
let contenidoArticulo1 = document.createTextNode("Este es un artículo sobre mí.");
articulo1.appendChild(contenidoArticulo1);

// Crear el segundo artículo (al lado) con imagen
let articulo2 = document.createElement("article");
let imagen2 = document.createElement("img");
imagen2.setAttribute("src", "./imagen/m.png"); // URL de imagen de ejemplo
imagen2.setAttribute("alt", "Imagen al lado");
imagen2.style.maxWidth = "100%";
articulo2.appendChild(imagen2);

// Crear una línea adicional de "Conóceme" después de los primeros dos artículos
let lineaConoceme1 = document.createElement("h2");
lineaConoceme1.textContent = "Conóceme";

// Crear el tercer artículo (debajo) con imagen
let articulo4 = document.createElement("article");
let imagen4 = document.createElement("img");
imagen4.setAttribute("src", "./imagen/m.png"); // URL de imagen de ejemplo
imagen4.setAttribute("alt", "Imagen debajo");
imagen4.style.maxWidth = "100%";
articulo4.appendChild(imagen4);

// Crear el cuarto artículo con texto
let articulo3 = document.createElement("article");
let contenidoArticulo3 = document.createTextNode("Este es un artículo debajo.");
articulo3.appendChild(contenidoArticulo3);

// Agregar el título y los artículos a la nueva sección
seccionConoceme.appendChild(tituloConoceme);
seccionConoceme.appendChild(articulo1); // Primer artículo
seccionConoceme.appendChild(articulo2); // Segundo artículo
seccionConoceme.appendChild(lineaConoceme1); // Línea de "Conóceme" después de dos artículos
seccionConoceme.appendChild(articulo3); // Tercer artículo
seccionConoceme.appendChild(articulo4); // Cuarto artículo

// Agregar la nueva sección al documento, por ejemplo, al final del body
document.body.appendChild(seccionConoceme);
