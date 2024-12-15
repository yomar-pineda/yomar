let quantity = 1;
let pricePerUnit = 10;

// Cambiar el color de la gorra
function changeColor(color) {
    const capImage = document.getElementById("cap-image");
    capImage.src = `https://via.placeholder.com/400/${color}/${color === 'black' ? 'FFFFFF' : '000000'}?text=Gorra`;
}

// Añadir texto
function addText() {
    const overlay = document.getElementById("design-overlay");
    const newText = document.createElement("div");
    newText.textContent = prompt("Ingresa el texto:");
    newText.style.position = "absolute";
    newText.style.top = "50%";
    newText.style.left = "50%";
    newText.style.color = "white";
    newText.style.transform = "translate(-50%, -50%)";
    newText.style.fontSize = "20px";
    newText.style.cursor = "move";
    overlay.appendChild(newText);
}

// Añadir imagen
function addImage() {
    const overlay = document.getElementById("design-overlay");
    const imageUrl = prompt("Pega la URL de la imagen:");
    const newImage = document.createElement("img");
    newImage.src = imageUrl;
    newImage.style.position = "absolute";
    newImage.style.top = "50%";
    newImage.style.left = "50%";
    newImage.style.width = "100px";
    newImage.style.cursor = "move";
    newImage.style.transform = "translate(-50%, -50%)";
    overlay.appendChild(newImage);
}

// Actualizar precio
function updatePrice() {
    quantity = parseFloat(document.getElementById("quantity").value) || 1;
    const totalPrice = (quantity * pricePerUnit).toFixed(2); // Calcula el precio con dos decimales
    document.getElementById("price").textContent = `B/. ${totalPrice}`;
}

// Añadir al carrito
function addToCart() {
    alert(`Se han añadido ${quantity} gorras al carrito.`);
}

// Limpiar diseño
function clearDesign() {
    document.getElementById("design-overlay").innerHTML = "";
}

// Zoom
function zoom(action) {
    const cap = document.getElementById("cap-image");
    const currentWidth = cap.clientWidth;
    cap.style.width = action === "in" ? currentWidth + 20 + "px" : currentWidth - 20 + "px";
}

// Función para cambiar la vista de la gorra
function changeCapView() {
    // Obtener el valor seleccionado del menú desplegable
    const view = document.getElementById("layers").value;
    const capImage = document.getElementById("cap-image");

    // Condicional para cambiar la imagen según la vista seleccionada
    if (view === "front") {
        capImage.src = "images/color_blanco_delante.png"
    } else if (view === "left") {
        capImage.src = "images/color_blanco_detras.png"; // Imagen lateral izquierda
    } else if (view === "right") {
        capImage.src = "images/right.png"; // Imagen lateral derecha
    } else if (view === "back") {
        capImage.src = "images/back.png"; // Imagen trasera
    }
}



// Función para mostrar el modal
function saveDesign() {
    const modal = document.getElementById("save-modal");
    modal.style.display = "block"; // Muestra el modal
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("save-modal");
    modal.style.display = "none"; // Oculta el modal
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function (event) {
    const modal = document.getElementById("save-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Función para abrir el explorador de archivos
function addImage() {
    document.getElementById("file-input").click(); // Dispara el evento de selección de archivo
}

// Función para mostrar una vista previa de la imagen seleccionada
function previewImage(event) {
    const file = event.target.files[0]; // Obtiene el archivo seleccionado
    const reader = new FileReader(); // Crea un lector de archivos
    
    // Verifica que el archivo seleccionado sea una imagen válida
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        // Cuando el archivo se carga, se muestra la imagen
        reader.onload = function(e) {
            const preview = document.getElementById("image-preview");
            preview.src = e.target.result; // Establece la fuente de la imagen a la seleccionada
            preview.style.display = "block"; // Muestra la imagen
        };
        reader.readAsDataURL(file); // Lee el archivo como una URL de datos
    } else {
        alert("Por favor selecciona una imagen en formato JPG o PNG.");
    }
}

// Función para mostrar u ocultar las opciones de texto
function toggleTextOptions() {
    // Ocultar las opciones de carrito y colores
    document.getElementById("cart-color-options").style.display = "none";
    
    // Mostrar las opciones de personalización de texto
    document.getElementById("text-options").style.display = "block";
}

// Función para cambiar la alineación del texto
function changeAlignment(alignment) {
    const textElement = document.getElementById("text-preview");
    
    if (textElement) {
        textElement.style.textAlign = alignment; // Cambia la alineación del texto
    }
}

// Función para duplicar el texto (agrega una copia del texto en pantalla)
function duplicateText() {
    const textElement = document.getElementById("text-preview");
    if (textElement) {
        const newTextElement = textElement.cloneNode(true); // Clona el nodo del texto
        document.body.appendChild(newTextElement); // Añade la copia al cuerpo del documento
    }
}

// Función para eliminar el texto (elimina el texto actual)
function removeText() {
    const textElement = document.getElementById("text-preview");
    if (textElement) {
        textElement.remove(); // Elimina el texto
    }
}


        // Función para mostrar/ocultar el contenedor
        function toggleDesigns() {
            const container = document.getElementById("designContainer");
            container.style.display = (container.style.display === "block") ? "none" : "block";
        }

        // Función al seleccionar un diseño
        function selectDesign(designName) {
            alert("Has seleccionado: " + designName);
            toggleDesigns();
        }
// Función para mostrar la ventana emergente
function showEmbroideryDesigns() {
    document.getElementById("designModal").style.display = "block";
}

// Función para cerrar la ventana emergente
function closeEmbroideryDesigns() {
    document.getElementById("designModal").style.display = "none";
}

// Cerrar la ventana al hacer clic fuera de ella
window.onclick = function(event) {
    const modal = document.getElementById("designModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Función para mostrar la ventana emergente
function showEmbroideryDesigns() {
    document.getElementById("designModal").style.display = "block";
}

// Función para cerrar la ventana emergente
function closeEmbroideryDesigns() {
    document.getElementById("designModal").style.display = "none";
}

// Función para seleccionar un diseño
function selectDesign(designName, imageSrc) {
    const selectedImage = document.getElementById("selected-image");
    selectedImage.src = imageSrc;
    selectedImage.style.display = "block";

    // Mostrar mensaje de confirmación
    alert(`Has seleccionado el diseño "${designName}" del manual.`);
}


function changeImageColor() {
    const image = document.getElementById('image');
    // Cambia el filtro a un color sepia o puedes probar con hue-rotate
    image.style.filter = 'sepia(1)'; // Cambiar a un color sepia
    // O usa un filtro de matiz para cambiar el color
    // image.style.filter = 'hue-rotate(90deg)'; // Cambiar el color de la imagen
}


function showTextOptions() {
    const textOptions = document.getElementById('text-options');
    textOptions.classList.toggle('hidden');
}

function addTextToCap() {
    const text = document.getElementById('text-input').value;
    const font = document.getElementById('font-select').value;
    const fontSize = document.getElementById('font-size').value;
    const fontColor = document.getElementById('font-color').value;

    if (text.trim() === '') {
        alert('Por favor, ingresa un texto.');
        return;
    }

    const designOverlay = document.getElementById('design-overlay');
    const textElement = document.createElement('div');
    textElement.textContent = text;
    textElement.style.position = 'absolute';
    textElement.style.fontFamily = font;
    textElement.style.fontSize = `${fontSize}px`;
    textElement.style.color = fontColor;
    textElement.style.cursor = 'move';

    // Permitir que el texto sea arrastrable dentro del área de diseño
    textElement.draggable = true;
    textElement.ondragstart = function(event) {
        event.dataTransfer.setData('text/plain', null);
        const rect = designOverlay.getBoundingClientRect();
        event.dataTransfer.setData('offsetX', event.clientX - rect.left - textElement.offsetLeft);
        event.dataTransfer.setData('offsetY', event.clientY - rect.top - textElement.offsetTop);
    };

    designOverlay.ondragover = function(event) {
        event.preventDefault();
    };

    designOverlay.ondrop = function(event) {
        event.preventDefault();
        const offsetX = event.dataTransfer.getData('offsetX');
        const offsetY = event.dataTransfer.getData('offsetY');
        textElement.style.left = `${event.clientX - designOverlay.getBoundingClientRect().left - offsetX}px`;
        textElement.style.top = `${event.clientY - designOverlay.getBoundingClientRect().top - offsetY}px`;
    };

    designOverlay.appendChild(textElement);

    // Ocultar las opciones de texto después de añadirlo al diseño
    showTextOptions();
}

        // Función para mostrar el popup
        function showPopupCart() {
            document.getElementById('popup-cart-overlay').style.display = 'block';
        }

        // Función para cerrar el popup
        function closePopupCart() {
            document.getElementById('popup-cart-overlay').style.display = 'none';
        }
        if (document.getElementById("faq")) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "faq-styles.css";
            document.head.appendChild(link);
        }

        function responsiveMenu() {
    const nav = document.getElementById("links"); // Obtiene el menú
    nav.classList.toggle("active"); // Alterna la clase "active"
}
