const TicketControl = require("../models/ticket-cotrol");

const ticketControl = new TicketControl();

const socketController = (socket) => {
    
    socket.on('siguiente-ticket', ( payload, callback ) => {
        
        const siguiente = ticketControl.siguiente();
        callback( siguiente );
    })

}



module.exports = {
    socketController
}

