function adivinarNumero() {
    const numeroElegido = parseInt(document.getElementById('numeroElegido').value);
    const loadingText = document.getElementById('loadingText');
    const loadingBar = document.getElementById('loadingBar');
    const resultado = document.getElementById('resultado');
    const loader = document.getElementById('loader');

    // Validar la entrada
    if (isNaN(numeroElegido) || numeroElegido < 1 || numeroElegido > 10) {
        resultado.textContent = 'Por favor, elige un número válido del 1 al 10.';
        return;
    }

    // Mostrar la barra de carga
    loader.style.display = 'block';

    // Array de mensajes
    const mensajes = [
        'Analizando pensamientos...',
        'Registrando recuerdos...',
        'Interpretando algoritmos de redes sociales...',
        'Categorizando al usuario...',
    ];

    let mensajeIndex = 0;

    // Función para cambiar los mensajes y actualizar la barra de carga
    function cambiarMensaje() {
        if (mensajeIndex < mensajes.length) {
            loadingText.textContent = mensajes[mensajeIndex];
            mensajeIndex++;

            // Actualizar la barra de carga (incrementar en 25%)
            loadingBar.style.width = (mensajeIndex * 25) + '%';
        } else {
            // Simular un proceso de adivinanza
            setTimeout(function () {
                loadingText.textContent = '¡Número adivinado!';
                resultado.textContent = `Pensaste en el número ${numeroElegido}.`;
            }, 3000);

            // Detener la simulación y mantener la barra en 100%
            clearInterval(mensajeInterval);
            loadingBar.style.width = '100%';
        }
    }

    // Cambiar mensajes y actualizar la barra cada 2 segundos
    const mensajeInterval = setInterval(cambiarMensaje, 2000);
}

