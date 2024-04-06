
const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);
    
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {   
        const id = 123456;
        callback(id);
        //callback({ id, fecha: new Date().getTime() });

        //enviar mensaje a todos los clientes conectados 
        //this.io.emit('enviar-mensaje', payload);
        //socket.emit('enviar-mensaje', payload);
        socket.broadcast.emit('enviar-mensaje', payload); //=> Envia el mensaje a todos los clientes conectados omitiendo al cliente que hizo el envio    
    })
}

module.exports = {
    socketController
}