const products = [
    { name: "Camisa Sada Cruzeiro", url: "http://127.0.0.1:5502/comprar/Cruzeiro.html" },
    { name: "Camisa sesi-bauru", url: "http://127.0.0.1:5502/comprar/sesi.html" },
    { name: "Camisa blumenau", url: "http://127.0.0.1:5502/comprar/Blumenau.html" },
    { name: "Camisa Guarulhos", url: "http://127.0.0.1:5502/comprar/guarulhos.html" },
    { name: "Camisa Itambé Minas", url: "http://127.0.0.1:5502/comprar/minas.html" },
    { name: "Camisa Renata", url: "http://127.0.0.1:5502/comprar/renata.html"},
    { name: "Camisa São José", url: "http://127.0.0.1:5502/comprar/saojose.html"},
    { name: "Camisa Seleção Brasileira", url: "http://127.0.0.1:5502/comprar/Sele%C3%A7%C3%A3obrasileira.html"},
    { name: "Camisa Seleção Argentina", url: "http://127.0.0.1:5502/comprar/argentina.html"},
    { name: "Camisa Seleção Polonia", url: "http://127.0.0.1:5502/comprar/polonia.html"},
    { name: "Camisa Seleção Italia", url: "http://127.0.0.1:5502/comprar/italia.html"},
    { name: "Camisa Seleção Japão", url: "http://127.0.0.1:5502/comprar/japao.html"}
   
];


function searchProduct() {
    const input = document.getElementById("search-bar").value.toLowerCase();
    const resultDiv = document.getElementById("search-result");

   
    if (input === "") {
        resultDiv.textContent = "Digite o nome de um produto.";
        return;
    }

    
    const foundProduct = products.find(product => product.name.toLowerCase().includes(input));

    if (foundProduct) {
        
       
        
       
        setTimeout(() => {
            window.location.href = foundProduct.url;
        }, 1000); 
    } else {
        
        resultDiv.textContent = "Produto não encontrado.";
    }
}


document.getElementById("search-btn").addEventListener("click", searchProduct);