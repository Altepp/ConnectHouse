let API_BRAND_FOLDER = "./api/service/";

let API_BRAND = {
    tapo: require(API_BRAND_FOLDER + "tapo")
}



module.exports = {
    handle
}



function handle(req, res, pathname){

    let args = pathname.slice(5).split("/")

    let action = args[1];
    let category = args[0];
    
    console.log(req)

    let brand = req.headers.brand
    let email = req.headers.email;
    let password = req.headers.password;

    


}