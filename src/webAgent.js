module.exports = {
    webRedirect,
    handle
}
let fs = 	require('fs') 		// file system module, for reading files and such.
const { OutgoingMessage } = require('http')
const path = require('path')
let WEB_SOURCE_PATH = "./src/web/"


function webRedirect(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(fs.readFileSync(WEB_SOURCE_PATH + "redirect.html"))
    res.end()   
}

function handle(req,res = OutgoingMessage, pathname = String){
    const filename = path.basename(pathname)

    if(pathname.startsWith("/web/script/") && pathname.endsWith(".js")) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' }) 
        res.write(fs.readFileSync(WEB_SOURCE_PATH + "script/" + filename))
        res.end()
        console.log('[Web Agent] ' + "Script Requested")
    } else if(pathname.startsWith("/web/") && pathname.endsWith("/")) {
        res.writeHead(200, { 'Content-Type': 'text/html' }) 
        res.write(fs.readFileSync(WEB_SOURCE_PATH + "main.html"))
        res.end()
        console.log('[Web Agent] ' + "Web page Requested")
    }else if(pathname.startsWith("/web/") && pathname.endsWith(".html")) {
        res.writeHead(200, { 'Content-Type': 'text/html' }) 
        res.write(fs.readFileSync(WEB_SOURCE_PATH + filename))
        res.end()
        console.log('[Web Agent] ' + "Web page Requested")
    } else if(pathname.startsWith("/web/css/") && pathname.endsWith(".css")) {
        res.writeHead(200, { 'Content-Type': 'text/css' }) 
        res.write(fs.readFileSync(WEB_SOURCE_PATH + "css/" + filename))
        res.end()
        console.log('[Web Agent] ' + "Style Sheet Requested")
    } else if(pathname.startsWith("/web/img/") && pathname.endsWith(".png")) {
        res.writeHead(200, { 'Content-Type': 'text/png' }) 
        res.write(fs.readFileSync(WEB_SOURCE_PATH + "img/" + filename))
        res.end()
        console.log('[Web Agent] ' + "PNG Requested")
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' }) 
        res.end()
        console.log('[Web Agent] ' + "Invalid Requested")
    }
}