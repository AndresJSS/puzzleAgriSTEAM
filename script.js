// Creamos un objeto para mapear los codigos con los cuadros
const codigoACuadro = {
    '1': 'cuadro1', '2': 'cuadro2', '3': 'cuadro3', '4': 'cuadro4', '5': 'cuadro5',
    '6': 'cuadro6', '7': 'cuadro7', '8': 'cuadro8', '9': 'cuadro9', '10': 'cuadro10',
    '11': 'cuadro11', '12': 'cuadro12', '13': 'cuadro13', '14': 'cuadro14', '15': 'cuadro15',
    '16': 'cuadro16', '17': 'cuadro17', '18': 'cuadro18', '19': 'cuadro19', '20': 'cuadro20',
    '21': 'cuadro21', '22': 'cuadro22', '23': 'cuadro23', '24': 'cuadro24', '25': 'cuadro25',
    '26': 'cuadro26', '27': 'cuadro27', '28': 'cuadro28', '29': 'cuadro29', '30': 'cuadro30',
    '31': 'cuadro31', '32': 'cuadro32', '33': 'cuadro33', '34': 'cuadro34', '35': 'cuadro35',
    '36': 'cuadro36', '37': 'cuadro37', '38': 'cuadro38', '39': 'cuadro39', '40': 'cuadro40',
};

const imagenes = [
    'pieza1.jpg', 'pieza2.jpg', 'pieza3.jpg', 'pieza4.jpg', 'pieza5.jpg',
    'pieza6.jpg', 'pieza7.jpg', 'pieza8.jpg', 'pieza9.jpg', 'pieza10.jpg',
    'pieza11.jpg', 'pieza12.jpg', 'pieza13.jpg', 'pieza14.jpg', 'pieza15.jpg',
    'pieza16.jpg', 'pieza17.jpg', 'pieza18.jpg', 'pieza19.jpg', 'pieza20.jpg',
    'pieza21.jpg', 'pieza22.jpg', 'pieza23.jpg', 'pieza24.jpg', 'pieza25.jpg',
    'pieza26.jpg', 'pieza27.jpg', 'pieza28.jpg', 'pieza29.jpg', 'pieza30.jpg',
    'pieza31.jpg', 'pieza32.jpg', 'pieza33.jpg', 'pieza34.jpg', 'pieza35.jpg',
    'pieza36.jpg', 'pieza37.jpg', 'pieza38.jpg', 'pieza39.jpg', 'pieza40.jpg',
];

function crearMatriz() {
    const matriz = document.getElementById('matriz');
    for (let i = 1; i < 41; i++) {
        const cuadro = document.createElement('div');
        cuadro.classList.add('cuadro');
        const imagen = document.createElement('img');

        cuadro.setAttribute('id', 'cuadro' + i) //Agregar un ID único a cada cuadro
        
        imagen.classList.add('imagen');
        imagen.src = imagenes[i - 1];
        imagen.style.display = 'none';
        imagen.onload = function () {
            cuadro.style.width = imagen.width + 'px';
            cuadro.style.height = imagen.height + 'px';
        };
        cuadro.dataset.codigo = i;
        cuadro.appendChild(imagen);
        matriz.appendChild(cuadro);
    }
}

// Función para contar cuántas imágenes están reveladas
function contarImagenesReveladas() {
    imagenesReveladas++;
    if (imagenesReveladas === 40) {
        mostrarCuadroInformativo();
    }
}

// Variable para llevar el conteo de imágenes reveladas
let imagenesReveladas = 0;

// Función para mostrar el cuadro informativo
function mostrarCuadroInformativo() {
    // Crear un elemento div para el cuadro informativo
    const cuadroInformativo = document.createElement('div');
    cuadroInformativo.classList.add('cuadro-informativo');
    // Agregar texto histórico
    cuadroInformativo.innerHTML = `
    <span class="title">Mural en homenaje a la riqueza agrícola y cultural de las Américas</span><br><br>
    Este mural expone el arduo e invaluable esfuerzo de las mujeres y hombres de las Américas que labran la tierra, cosechan sus productos, cuidan de sus animales y protegen las fuentes de agua para llevar alimentos a las mesas de todo el mundo.<br><br>
    El mural fue donado por España al IICA en 1981 y restaurado para el 80 aniversario del organismo. Esta obra de arte mide 2.5 metros de ancho y 18 metros de largo.<br><br>
    Fue diseñado originalmente por el artista valenciano Julián Pérez Muñoz y reproducido por Antonio Tomás. El mural está compuesto por cuadros de cerámica delicadamente pintados a mano con una técnica que utiliza una mayor proporción de agua en la pintura.<br><br>
    <b>¿Te interesaría conocer el mural completo y aprender sobre tecnología y agricultura? Forma un grupo de amigas y amigos y visita el CIMAG, ubicado dentro de las instalaciones del IICA.</b><br><br>
    <span class="title">¡TE ESPERAMOS!</span><br><br>
    Más información: <a href="https://www.cimag.iica.int/" target="_blank">https://www.cimag.iica.int/</a>
    `;
    // Obtener referencia al contenedor de la matriz
    const matrizContainer = document.querySelector('.container');
    // Insertar el cuadro informativo antes de la matriz
    document.body.insertBefore(cuadroInformativo, matrizContainer);
    // Agregar el cuadro informativo al cuerpo del documento
    //document.body.appendChild(cuadroInformativo);
    // Ocultar el cuadro informativo al inicio
    cuadroInformativo.style.display = 'block';
}

function enviarCodigo() {
    const codigo = document.getElementById('codigo').value;
    //const imagenes = document.querySelectorAll('.imagen');
    const cuadroId = codigoACuadro[codigo];
    const cuadroSeleccionado = document.getElementById(cuadroId);
    if (cuadroSeleccionado) {
        cuadroSeleccionado.style.transform = 'rotateY(180deg)';
        // Mostrar imagen dentro del cuadro
        cuadroSeleccionado.querySelector('.imagen').style.display = 'block';
        contarImagenesReveladas(); // Contar las imagenes reveladas   
    } else {
        console.log('El código ingresado no está asociado a ningún cuadro');
    }
    // Reiniciar el campo de entrada
    document.getElementById('codigo').value = "";
}

window.onload = function() {
    crearMatriz();
};