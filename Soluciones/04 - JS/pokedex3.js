const fetchPokemon = () => {
    const NumInfInput = document.getElementById("NumInf");
    const NumSupInput = document.getElementById("NumSup");
    let NumInf = NumInfInput.value;
    let NumSup = NumSupInput.value;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${NumInf}&offset=${NumSup-1}`;
    let urls;
    let q=0;
    let PM = "Posibles movimientos: "
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            //pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            //console.log(data);
            //console.log(NumInf, NumSup);
            let numi=NumInf-1;
            let numis=0;
            
            //console.log(numi);
            do {

                urls = data.results[numi].url;;
                fetch(urls).then((res) => {
                        return res.json();
                }).then((newdata) => {
                    if (newdata) {
                        console.log(newdata);
                        //////////////////////////////////
                        //crear elemento general pantalla
                        addElementosP(q);
                        //crear elemento contenedors con id scroller para ser scrolleable
                        addElementosS(q);
                        // crear y cambiar imagen de pokemon
                        let pokeImgs = newdata.sprites.front_default;
                        addElementosI(q, pokeImgs);            
                        //crear strongs
                        let mo = newdata.stats.length;
                        for(mo; mo>0; mo--){
                            console.log(newdata.stats[(mo-1)].stat.name);
                            let stadix = newdata.stats[(mo-1)].stat.name;
                            let stadig = newdata.stats[(mo-1)].base_stat;
                            console.log(newdata.stats[(mo-1)].base_stat);
                            addElementoSt(q, stadix, stadig);

                        
                        }
                        // muesta unicamente la frase "Posibles movimientos"
                        addElementoStr(q, PM);
                        //mostrar los movimientos
                        mo = newdata.moves.length;
                        newdata.moves.forEach(element => {
                            //console.log("holixc");
                            console.log(newdata.moves[mo-1].move.name);
                            addElementosMov(newdata.moves[mo-1].move.name, q);
                            mo--;
                        });
                        
                        
                        //let pokeImg = newdata.sprites.front_default;
                        //pokeImage(pokeImg);
                        //console.log(pokeImg);
                        //

                        q++;
                        //////////////////////////////////
                      
                    }
                });
                




                //let pokeNom = data.results[numi].name;
                //pokeNombres(pokeNom);
                //console.log(pokeNom);
                //let pokelinki = data.results[numi].url;
                //console.log(pokelinki);
                //let pokeImg = linki.sprites.front_default;
                //pokeImage(pokeImg);
                //console.log(pokeImg);
    

                //console.log("hola");
                //console.log(numi, numis);
                numis=numis+1;
                numi=numi-1;

            } while (numis != NumInf);
  
        }
    });
}
// imagen del pokemon
//const pokeImage = (url) => {
//    const pokePhoto = document.getElementById("pokeImg");
//    pokePhoto.src = url;
//}
// crear elementos pantalla para que se muestren todos los valores
function addElementosP(q){
    var pantallas = document.getElementById("pantallas");
    var div = document.createElement("div");
    div.innerHTML;
    div.setAttribute("id", `pantalla${q} ponte`);
    pantallas.appendChild(div);
    
}
// crear elementos pantalla para que se muestren todos los valores
function addElementosS(q){
    var scroller = document.getElementById(`pantalla${q} ponte`);
    var div = document.createElement("div");
    div.innerHTML;
    div.setAttribute("id", `scroller${q}`);
    div.setAttribute("class", "contenedors");
    scroller.appendChild(div);
    
}
// crear elementos imagen para imagen pokemon
function addElementosI(q, pokeImgs){
    var pokeImg = document.getElementById(`scroller${q}`);
    var img = document.createElement("img");
    img.innerHTML;
    img.setAttribute("id", `pokeImg${q}`);
    img.setAttribute("class", "arriba");
    img.setAttribute("src", `${pokeImgs}`);
    pokeImg.appendChild(img);
    var br = document.createElement("br");
    img.innerHTML;
    pokeImg.appendChild(br);
    
}
// crear elementos strong para nombre stadisticas y span para datos de las mismas de los pokemon con un br
function addElementoSt(q, stadix, stadig){
    var stadis = document.getElementById(`scroller${q}`);
    var strong = document.createElement("strong");
    strong.innerHTML = stadix;
    strong.setAttribute("id", `nom-estadis${q}`);
    strong.setAttribute("class", "contnt")
    stadis.appendChild(strong);
    console.log(q);
    var span = document.createElement("span");
    span.innerHTML = ": " + stadig;
    span.setAttribute("id", `hola${q}`);
    stadis.appendChild(span);
    //
    var br = document.createElement("br");
    span.innerHTML;
    stadis.appendChild(br);
}
// crear elemento strong solo para mostrar "stadisticas"
function addElementoStr(q, PM){
    var stadis = document.getElementById(`scroller${q}`);
    var strong = document.createElement("strong");
    strong.innerHTML = PM;
    strong.setAttribute("id", `nom-estadisw${q}`);
    stadis.appendChild(strong);
}
// crear y mostrar elementos para movimientos 
function addElementosMov(move, q){
    var movixes = document.getElementById(`nom-estadisw${q}`);
    var p = document.createElement("label");
    p.innerHTML = move;
    p.setAttribute("id", "movixess");
    movixes.appendChild(p);
    var br = document.createElement("br");
    br.innerHTML;
    movixes.appendChild(br);
}
