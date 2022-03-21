const fetchPokemon = () => {
    const NumInfInput = document.getElementById("NumInf");
    const NumSupInput = document.getElementById("NumSup");
    let NumInf = NumInfInput.value;
    let NumSup = NumSupInput.value;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${NumInf}&offset=${NumSup}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            console.log(NumInf, NumSup);
            for( let Numi = 1; Numi==NumInf; Numi++){

                
                let pokeNom = data.result[0].name;
                pokeNombres(pokeNom);
                console.log(pokeNom);
                let link = data.result[0].url;
                pokelink(PokeImg);
                console.log(pokelink);
    
            }
  
        }
    });
}
// nombre del pokemon
const pokeNombres = (name) => {
    const pokeNombre = document.getElementById("pokeNom");
    document.getElementById("pokeNom").innerHTML = name;
}

// crear elementos span contenedor de labels
function addElemento(){
    var mov = document.getElementById("mov");
    var span = document.createElement("span");
    span.innerHTML;
    span.setAttribute("id", "movixes");
    mov.appendChild(span);
}
// crear elementos labels que muestran los valores
function addElementos(move){
    var movixes = document.getElementById("movixes");
    var p = document.createElement("p");
    p.innerHTML = move;
    p.setAttribute("id", "movixess");
    movixes.appendChild(p);
    
}
//funcion para borrar el span contenedor de todos los p que muestran los atauqes de cada pokemon
function borrar() {
    const element = document.getElementById("movixes");
    element.remove();
}

//no se ocupa es para crear un br pero no desplaza
//function addElementosbr() {
//    var movixesss = document.getElementById("movixesss");
//    var br = document.createElement("br");
//    br.innerHTML;
//    movixesss.appendChild(br);
//}





