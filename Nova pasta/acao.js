const calcular = document.getElementById('calc');
function f() {

    const nome = document.getElementById('n').value;
    const peso = parseInt(document.getElementById('p').value);
    const distancia = parseFloat(document.getElementById('d').value);
    const tempoh = parseInt(document.getElementById('th').value);
    const tempom = parseInt(document.getElementById('tm').value);
    const tempos = parseInt(document.getElementById('ts').value);


    if (nome !== '' && distancia !== '' && peso !== '' && tempoh !== '' && tempom !== '' && tempos !=='') {

        const tempototal =  (tempoh*60*60) +(tempom*60)+(tempos)  ;
        const metros = distancia*1000;
        const mediakilometro = distancia -(metros/tempototal);
        const pace = mediakilometro/2.65;
        const calorias = peso*mediakilometro*0.0175;
alert("Olá " +  nome +"! " +"Você percorreu " + distancia +"km em "+ tempoh + "h , " + tempom + "min e " + tempos +"s."
+ "Isso quer dizer que a sua velocidade média foi de" + mediakilometro.toFixed(2) + "km/h, o que o corresponde a um pace de "
    + pace.toFixed(2) + "min/km. Com " +peso + "kg, você gastou cerca de " +calorias.toFixed(2) + "cal."

);

    }else {
        alert("campos vazios");
    }

}
calcular.addEventListener('click', f);