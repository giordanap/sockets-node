

export const socketController = ( socket ) => {


    console.log('client connected', socket.id);

    socket.on('disconnect', () => {

        console.log('Client disconect', socket.id);

    });

    socket.on('send-message', ( payload, callback ) => { 
        
        const id = 123456;
        callback( id );

        socket.broadcast.emit( 'send-message', payload );

    });
}