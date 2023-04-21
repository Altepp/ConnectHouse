let http = require("http")
module.exports = {handle}

const Services = {
    tapo: require("./service/tapo")
} // namespace for the functions/objects.  It is a singleton.  It is a namespace.  It is not a class.  It is

function handle(req = http.IncomingMessage, res = http.OutgoingMessage) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    console.log(req)
    
    

    if(req.headers.agentmethod = 'get-devices') {
    
    } else if(req.headers.agentmethod = 'add-account') {

        console.log('')

        brand = req.headers.brand
         pass = req.headers.password 
         mail = req.headers.mail
        
        require("./service/"+brand)(mail, pass)
        

    }

    
}
