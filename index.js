//const { cloudLogin, listDevicesByType, loginDevice, getDeviceInfo } = require("tp-link-tapo-connect")
const tp = require("tp-link-tapo-connect")
const http = require("http")
const url = require("url")
const fs = require("fs")
const path = require('path')
const { error } = require("console")

const SERVER_PORT = 80

const WEB_SOURCE_PATH = "./src/web/"

let AGENT = {
  web: require("./src/webAgent"),
  action: require("./src/blockAgent"),
  api: require("./src/apiAgent")
}

http.createServer(function (req, res) {
  try {
    const pathname = url.parse(req.url).pathname
    pathname.end


    if 	(pathname == "/") { AGENT.web.webRedirect(req, res) } else
    if (pathname.startsWith("/web/")) { AGENT.web.handle(req, res, pathname) } else 
    if (pathname.startsWith("/api/")) { AGENT.api.handle(req, res, pathname ) } else {
      res.writeHead(404, 	{ "Content-Type": "text/html" })
      res.end(`<h1>404 Not Found</h1>`)
    }

    //if (pathname.startsWith('/web/')) {
    //  res.writeHead(200, { 'Content-Type': 'text/html' })
    //  res.write(fs.readFileSync(WEB_SOURCE_PATH + "index.html"))
    //  res.end()
    //} else if (pathname.startsWith('/api/')) {
    //  res.writeHead(200, { 'Content-Type': 'text/html' })
    //  res.write(fs.readFileSync(WEB_SOURCE_PATH + "index.html"))
    //  res.end()
    //} else if (pathname.startsWith('/Action/')) {
    //  res.writeHead(200, { 'Content-Type': 'text/html' })
    //  res.write(fs.readFileSync(WEB_SOURCE_PATH + "index.html"))
    //  res.end()
    //} else if (pathname === '/') {  
    //  res.writeHead(200, { 'Content-Type': 'text/html' })
    //  res.write(fs.readFileSync(WEB_SOURCE_PATH + "redirect.html"))
    //  res.end()
    //}
  } catch(e) {
    res.writeHead(200, { 'Content-Type': 'text/html' })  // 500 internal server error 	  // 500 internal server error
    res.write(JSON.stringify({"status": 500, "message": "An internal Error Occured Please Report it on Github", "error": e.stack}))
    res.end() // stack trace is internal to the server and can't be exported to the client 	  // stack trace is

  }
  }).listen(SERVER_PORT)

  console.log('Server listening on port: ' + SERVER_PORT)


//
//let email = 'antoningirardet@orange.fr'
//let password = 'Comtoise18!'
//
//
//async function getDevices(){
//    const cloudToken = await cloudLogin(email, password);
//    
//    const allDevices = await tp.listDevices(cloudToken);
//    console.log(allDevices)
//
//    const devices = await listDevicesByType(cloudToken, 'SMART.TAPOBULB');
//    console.log(devices);
//
//    const deviceToken = await loginDevice(email, password, devices[0]); // Performs a mac lookup to determine local IP address
//
//    const getDeviceInfoResponse = await getDeviceInfo(deviceToken);
//
//    tp.setBrightness(deviceToken, 100)
//    tp.setColour(deviceToken, "pur")
//    tp.setBrightness(deviceToken, 100)
//
//    console.log(getDeviceInfoResponse);
//}
//
//getDevices();
//
//