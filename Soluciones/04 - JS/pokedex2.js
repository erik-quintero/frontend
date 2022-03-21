const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
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

            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            
            let pokeNom = data.name;
            pokeNombres(pokeNom);
            console.log(pokeNom);
            console.log(data.types.length);
            let n =data.types.length;
            if (n==1) {
                let pokeTipo = data.types[0].type.name;
                pokeType(pokeTipo);
                console.log(pokeTipo);
            }else if(n==2){
                let pokeTipo = data.types[0].type.name;
                pokeType(pokeTipo);
                console.log(pokeTipo);
                let pokeTipo1 = data.types[1].type.name;
                pokeType1(pokeTipo1);
                console.log(pokeTipo1);
        
            }
            
            let pokeAltura = data.height;
            pokeAltu(pokeAltura);
            console.log(pokeAltura);
            
            let pokePe = data.weight;
            pokePeso(pokePe);
            console.log(pokePe);


            let m = data.stats.length;
            console.log(m);
            for(m;m>0;m--){
                //console.log(m);
                //console.log(data.stats[m-1].stat.name);
                //console.log(data.stats[m-1].base_stat);
                let pokeStadistics = data.stats[m-1].stat.name;
                let pokeStadisticNum = data.stats[m-1].base_stat;
                pokeStat(pokeStadistics, m, pokeStadisticNum);
                console.log(pokeStadistics, m, pokeStadisticNum);
                
            }

            //borrar span anterior
            borrar();
            //crear un nuevo span
            //addElementospan();

            //crear elemento
            let mo = data.moves.length;
            console.log(mo);
            addElemento();
            for(mo; mo>0; mo--){
                //addElementosbr();
                console.log(data.moves[mo-1].move.name);
                //move = data.move[mo-1].move.name;
                addElementos(data.moves[mo-1].move.name);
                //addElementosbr();
            }
            //console.log(data.moves)
            //addElemento()
            

        }
    });
}
// imagen del pokemon
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
// nombre del pokemon
const pokeNombres = (name) => {
    const pokeNombre = document.getElementById("pokeNom");
    document.getElementById("pokeNom").innerHTML = name;
}
//tipo(s) del pokemon dividido en dos metodos, para su practicidad al llamado
const pokeType = (name) => {
    const pokeType = document.getElementById(`pokeTipo`);
    document.getElementById(`pokeTipo`).innerHTML = name;
}
const pokeType1 = (name) => {
    const pokeType1 = document.getElementById(`pokeTipo1`);
    document.getElementById(`pokeTipo1`).innerHTML = name;
}
// altura del pokemon
const pokeAltu = (height) => {
    const pokeAlt = document.getElementById("pokeAltura");
    document.getElementById(`pokeAltura`).innerHTML = `${(height*10)} cm`;
}
// peso del pokemon
const pokePeso = (weight) => {
    const pokePes = document.getElementById("pokePe");
    document.getElementById(`pokePe`).innerHTML = `${weight/10} kg`;
}
// nombre de estadisticas del pokemon y cantidad de estadisticas del pokemon
const pokeStat = (stats, m, graf) => {
    //console.log(m , numstat);
    const pokeStats = document.getElementById(`pokeStadistics${m-1}`);
    document.getElementById(`pokeStadistics${m-1}`).innerHTML = stats;
    
    const pokeStatnum = document.getElementById(`pokeStadisticNum${m-1}`);
    document.getElementById(`pokeStadisticNum${m-1}`).innerHTML = graf;
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





