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


            let m = data.stats.length
            console.log(m);
            for(m;m>0;m--){
                //console.log(m);

            }

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeNombres = (name) => {
    const pokeNombre = document.getElementById("pokeNom");
    document.getElementById("pokeNom").innerHTML = name;
}

const pokeType = (name) => {
    const pokeType = document.getElementById(`pokeTipo`);
    document.getElementById(`pokeTipo`).innerHTML = name;
}
const pokeType1 = (name) => {
    const pokeType1 = document.getElementById(`pokeTipo1`);
    document.getElementById(`pokeTipo1`).innerHTML = name;
}
const pokeAltu = (height) => {
    const pokeAlt = document.getElementById("pokeAltura");
    document.getElementById(`pokeAltura`).innerHTML = `${(height*10)} cm`;
}
const pokePeso = (weight) => {
    const pokePes = document.getElementById("pokePe");
    document.getElementById(`pokePe`).innerHTML = `${weight/10} kg`;
}

