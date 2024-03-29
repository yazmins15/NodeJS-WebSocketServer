const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

    socket.on('enviar-mensaje', (payload) => {
        console.log(payload);
        console.log('Enviar msg desde el server');
    })
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';    
});

socket.on('enviar-mensaje', (payload)=> {
    console.log("Cliente recibiendo msg");
    console.log(payload);
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    console.log(mensaje);
    const payload = {
        mensaje,
        id  : '123ABC',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, ((id) => {
        console.log('Desde el server', id);
    }));
})

//console.log("Hello");
//http://localhost:8080/socket.io/socket.io.js