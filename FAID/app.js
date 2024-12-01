// Selección de los elementos clave
const incomingCall = document.getElementById('incoming-call');
const callButton = document.querySelector('.call-button');
const hangUpButton = document.querySelector('.hang-up-button');
const header = document.querySelector('.header');
const staticCircle = document.querySelector('.static-circle');
const movingCircle = document.querySelector('.moving-circle');
const awaitText = document.querySelector('.await-text');
const audio1 = document.getElementById('audio1');

awaitText.style.display = 'none'; // Oculta el texto de espera

// Evento para aceptar la llamada
callButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evita la acción predeterminada del enlace

    // Oculta los elementos relacionados con la llamada entrante
    audio1.play().catch(error => console.error('Error playing audio:', error));
    callButton.style.display = 'none';
    staticCircle.style.display = 'none';
    header.querySelector('.incoming-call').textContent = 'Call Active...'; // Cambia el texto
    toggleVisibility(callButton, false);
    toggleVisibility(hangUpButton, true);

    // Muestra los elementos de la llamada activa
    movingCircle.style.display = 'flex';
    hangUpButton.style.margin = '0px';
    movingCircle.querySelector('p').textContent = 'Analyzing outgoing voice...'; // Cambia el texto del círculo estático

    event.preventDefault();

    // Transition to active call state
    header.querySelector('.incoming-call').textContent = 'Call Active...';

    
    setTimeout(function() { 
        audio1.pause();
        movingCircle.classList.add('red');
        movingCircle.querySelector('p').textContent = "None";
        movingCircle.querySelector('p').textContent = 'AI Fraud detected'; // Cambia el texto del círculo estático
        document.body.style.transition = 'box-shadow 0.5s ease, border 0.5s ease'; // Smooth box-shadow and border transition
        document.body.style.boxShadow = '0 0 20px 20px red'; // Set the box shadow directly on the body
        document.body.style.border = '8px solid red'; // Set the border directly on the body
        document.body.style.height = '100vh'; // Set the height of the body to 100vh
    }, 5000);

});

// Evento para colgar la llamada
hangUpButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evita la acción predeterminada del enlace

    // Restaura el estado de llamada entrante
    callButton.style.display = 'block';
    header.querySelector('.incoming-call').textContent = 'Incoming call...'; // Cambia el texto

    // Oculta los elementos relacionados con la llamada activa
    hangUpButton.style.display = 'none';
    staticCircle.querySelector('p').textContent = 'AIFD Activated'; // Cambia el texto del círculo estático
});

// Helper function to toggle visibility with smooth transition
function toggleVisibility(element, show) {
    if (show) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

// Hang up button functionality
hangUpButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Transition back to incoming call state
    
    callButton.style.opacity = 0;
    hangUpButton.style.opacity = 0;
    movingCircle.style.opacity = 0;
    staticCircle.style.opacity = 0;

    // Change visiblity so it doesn't interact with the user
    callButton.style.visibility = 'hidden';
    hangUpButton.style.visibility = 'hidden';
    movingCircle.style.visibility = 'hidden';
    staticCircle.style.visibility = 'hidden';

    awaitText.style.display = 'flex';

    // Change the background color to black
    document.body.style.transition = 'background-color 0.5s ease'; // Smooth background transition
    document.body.style.backgroundColor = 'black'
    setTimeout(function() {
        event.preventDefault();
        awaitText.style.display = 'none';
        
        callButton.style.visibility = 'visible';
        hangUpButton.style.visibility = 'visible';
        staticCircle.style.visibility = 'visible';

        callButton.style.opacity = 1;
        hangUpButton.style.opacity = 1;
        staticCircle.style.opacity = 1;

        hangUpButton.style.display = 'flex';
        callButton.style.display = 'flex';

        document.body.style.transition = 'background-color 0.5s ease'; // Smooth background transition
        document.body.style.backgroundColor = "#F1F1F1";
    }, 3000);
});

