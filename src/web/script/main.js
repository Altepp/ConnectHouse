window.onload = function () {
    getAccount()
}

function getAccount() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/account/get');
    
    

    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
      } else {
        console.error('Erreur lors de la requête : ' + xhr.status);
      }
    };
    xhr.onerror = function() {
      console.error('Erreur réseau lors de la requête');
    };
    xhr.send(JSON.stringify({ key: 'value' }));
    
    

    document.getElementById("connect").onclick = function() {
      window.open("/web/addAccount.html")
    
    }
}