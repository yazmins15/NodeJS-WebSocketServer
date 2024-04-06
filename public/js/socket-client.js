const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io();  //viene de =>    ./socket.io/socket.io.js

//socket.on es para escuchar
socket.on('connect', () => {
    console.log('Conectado'); //Mostrar mensaje en el cliente 
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

    /*socket.on('enviar-mensaje', (payload) => {
        console.log(payload);
        console.log('Enviar msg desde el server');
    })*/
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';    
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
    console.log('Enviar msg desde el server');
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    console.log(mensaje);
    const payload = {
        mensaje,
        id  : 'SALA_YVSC',
        fecha: new Date().getTime()
    }

    //El tercer argumento es el callback 
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id);
    });
})

//console.log("Hello");
//http://localhost:8080/socket.io/socket.io.js