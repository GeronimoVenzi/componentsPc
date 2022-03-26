const url = "https://60c280a6917002001739d1bb.mockapi.io/api/pc";

async function obtenerData() {
    let promesa = await fetch(url);
    let res = await promesa.json();
    console.log(res);
    mostrarData(res);
}

let container = document.querySelector("#pc-container");

function mostrarData(data) {
    data.forEach(pc => {

        container.innerHTML +=
            `
            <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
                    <h4 class="my-0 font-weight-bold">${pc.Marca}</h4>
                </div>
                <div class="card-body">
                    <img src="img/hp1.jpg" class="card-img-top">
                    <h1 class="card-title pricing-card-title precio">S/. <span class="">${pc.Precio}</span></h1>
        
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>${pc.Memoria}</li>
                        <li>${pc.Color}</li>
                        <li>${pc.Disco}</li>
                    </ul>
                    <a href="" class="btn btn-block btn-primary agregar-carrito" data-id="1">Comprar</a>
                </div>
            </div>
        </div>
        `

    });
}

obtenerData();










