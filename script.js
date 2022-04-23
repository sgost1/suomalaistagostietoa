const laiteYksiPixelNA = document.getElementById("laiteYksiPixel4a");
const laiteYksiPixelKuusi = document.getElementById("laiteYksiPixel6");

const laiteKaksiPixelNA = document.getElementById("laiteKaksiPixel4a");
const laiteKaksiPixelKuusi = document.getElementById("laiteKaksiPixel6");

var dateFirst = new Date("11/25/2017");
var dateSecond = new Date("11/28/2017");

// time difference
var timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());

// days difference
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

// difference
alert(diffDays);

const pNa = { // Pixel 4a
    paino:"143 g",
    rakenne:"Edestä Gorilla Glass 3, takaata muovia, runko muovia",
    sim:"Nano-SIM ja/tai eSIM",
    nautonTyyli:"OLED, HDR",
    koko:"15cm",
    resoluutio:"1080 x 2340 pixeliä",
    suojaus:"Corning Gorilla Glass 3",
    soc:"Qualcomm SDM730 Snapdragon 730G (8nm)",
    cpu:"Octa-core (2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver)",
    gpu:"Adreno 618",
    muisti:"128GB 6GB RAM",
    turvallisuusSiru:"Titan M"
};
const pKa = { // Pixel 6
    paino:"207 g",
    rakenne:"Edestä Gorilla Glass Victus, takaata Gorilla Glass 6, runko alumiinia",
    sim:"Nano-SIM ja/tai eSIM",
    nautonTyyli:"AMOLED, 90Hz, HDR10+",
    koko:"16cm",
    resoluutio:"1080 x 2400 pixeliä",
    suojaus:"Corning Gorilla Glass Victus",
    soc:"Google Tensor(5nm)",
    cpu:"Octa-core (2x2.80 GHz Cortex-X1 & 2x2.25 GHz Cortex-A76 & 4x1.80 GHz Cortex-A55)",
    gpu:"Mali-G78 MP20",
    muisti:"128GB 8GB RAM",
    turvallisuusSiru:"Titan M2"
}

function valitseLaite() {
    if (laiteYksiPixelNA.checked) {
        document.getElementById("laiteYksiPaino").innerHTML = "Paino: " + pNa.paino;
        document.getElementById("laiteYksiRakenne").innerHTML = "Rakenne: " + pNa.rakenne;
        document.getElementById("laiteYksiSim").innerHTML = "SIM: " + pNa.sim;
        document.getElementById("laiteYksiNaytto").innerHTML = "Näyttö: " + pNa.nautonTyyli;
        document.getElementById("laiteYksiKoko").innerHTML = "Koko: " + pNa.koko;
        document.getElementById("laiteYksiResoluutio").innerHTML = "Resoluutio: " + pNa.resoluutio;
        document.getElementById("laiteYksiSuojaus").innerHTML = "Suojaus: " + pNa.suojaus;
        document.getElementById("laiteYksiSoc").innerHTML = "SoC: " + pNa.soc;
        document.getElementById("laiteYksiCpu").innerHTML = "CPU: " + pNa.cpu;
        document.getElementById("laiteYksiGpu").innerHTML = "GPU: " + pNa.gpu;
        document.getElementById("laiteYksiMuisti").innerHTML = "Muisti: " + pNa.muisti;
        document.getElementById("laiteYksiTurvallisuusSiru").innerHTML = "Turvallisuus siru: " + pNa.turvallisuusSiru;

        document.getElementById("onkoLaiteYksiValittu").innerHTML = "Pixel 4a";
        document.getElementById("laiteYksiVirhe").innerHTML = "";

    }
    if (laiteYksiPixelKuusi.checked) {
        document.getElementById("laiteYksiPaino").innerHTML = "Paino: " + pKa.paino;
        document.getElementById("laiteYksiRakenne").innerHTML = "Rakenne: " + pKa.rakenne;
        document.getElementById("laiteYksiSim").innerHTML = "SIM: " + pKa.sim;
        document.getElementById("laiteYksiNaytto").innerHTML = "Näyttö: " + pKa.nautonTyyli;
        document.getElementById("laiteYksiKoko").innerHTML = "Koko: " + pKa.koko;
        document.getElementById("laiteYksiResoluutio").innerHTML = "Resoluutio: " + pKa.resoluutio;
        document.getElementById("laiteYksiSuojaus").innerHTML = "Suojaus: " + pKa.suojaus;
        document.getElementById("laiteYksiSoc").innerHTML = "SoC: " + pKa.soc;
        document.getElementById("laiteYksiCpu").innerHTML = "CPU: " + pKa.cpu;
        document.getElementById("laiteYksiGpu").innerHTML = "GPU: " + pKa.gpu;
        document.getElementById("laiteYksiMuisti").innerHTML = "Muisti: " + pKa.muisti;
        document.getElementById("laiteYksiTurvallisuusSiru").innerHTML = "Turvallisuus siru: " + pKa.turvallisuusSiru;

        document.getElementById("onkoLaiteYksiValittu").innerHTML = "Pixel 6"
        document.getElementById("laiteYksiVirhe").innerHTML = "";
    }
    if (laiteKaksiPixelNA.checked) {
        document.getElementById("laiteKaksiPaino").innerHTML = "Paino: " + pNa.paino;
        document.getElementById("laiteKaksiRakenne").innerHTML = "Rakenne: " + pNa.rakenne;
        document.getElementById("laiteKaksiSim").innerHTML = "SIM: " + pNa.sim;
        document.getElementById("laiteKaksiNaytto").innerHTML = "Näyttö: " + pNa.nautonTyyli;
        document.getElementById("laiteKaksiKoko").innerHTML = "Koko: " + pNa.koko;
        document.getElementById("laiteKaksiResoluutio").innerHTML = "Resoluutio: " + pNa.resoluutio;
        document.getElementById("laiteKaksiSuojaus").innerHTML = "Suojaus: " + pNa.suojaus;
        document.getElementById("laiteKaksiSoc").innerHTML = "SoC: " + pNa.soc;
        document.getElementById("laiteKaksiCpu").innerHTML = "CPU: " + pNa.cpu;
        document.getElementById("laiteKaksiGpu").innerHTML = "GPU: " + pNa.gpu;
        document.getElementById("laiteKaksiMuisti").innerHTML = "Muisti: " + pNa.muisti;
        document.getElementById("laiteKaksiTurvallisuusSiru").innerHTML = "Turvallisuus siru: " + pNa.turvallisuusSiru;

        document.getElementById("onkoLaiteKaksiValittu").innerHTML = "Pixel 4a";
        document.getElementById("laiteKaksiVirhe").innerHTML = "";
    }
    if (laiteKaksiPixelKuusi.checked) {
        document.getElementById("laiteKaksiPaino").innerHTML = "Paino: " + pKa.paino;
        document.getElementById("laiteKaksiRakenne").innerHTML = "Rakenne: " + pKa.rakenne;
        document.getElementById("laiteKaksiSim").innerHTML = "SIM: " + pKa.sim;
        document.getElementById("laiteKaksiNaytto").innerHTML = "Näyttö: " + pKa.nautonTyyli;
        document.getElementById("laiteKaksiKoko").innerHTML = "Koko: " + pKa.koko;
        document.getElementById("laiteKaksiResoluutio").innerHTML = "Resoluutio: " + pKa.resoluutio;
        document.getElementById("laiteKaksiSuojaus").innerHTML = "Suojaus: " + pKa.suojaus;
        document.getElementById("laiteKaksiSoc").innerHTML = "SoC: " + pKa.soc;
        document.getElementById("laiteKaksiCpu").innerHTML = "CPU: " + pKa.cpu;
        document.getElementById("laiteKaksiGpu").innerHTML = "GPU: " + pKa.gpu;
        document.getElementById("laiteKaksiMuisti").innerHTML = "Muisti: " + pKa.muisti;
        document.getElementById("laiteKaksiTurvallisuusSiru").innerHTML = "Turvallisuus siru: " + pKa.turvallisuusSiru;

        document.getElementById("onkoLaiteKaksiValittu").innerHTML = "Pixel 6";
        document.getElementById("laiteKaksiVirhe").innerHTML = "";
    }
arvioiLaiteValinta()
}

function arvioiLaiteValinta() {
    if (laiteYksiPixelKuusi.checked && laiteYksiPixelNA.checked) {
        document.getElementById("laiteYksiVirhe").innerHTML = "VIRHE: Valitse vain yksi laite";
        alustaLaiteYksiTiedot()
    }
    if (laiteKaksiPixelKuusi.checked && laiteKaksiPixelNA.checked) {
        document.getElementById("laiteKaksiVirhe").innerHTML = "VIRHE: Valitse vain yksi laite";
        alustaLaiteKaksiTiedot()
    }
    if (!laiteYksiPixelKuusi.checked && !laiteYksiPixelNA.checked) {
        alustaLaiteYksiTiedot()
    }
    if (!laiteKaksiPixelKuusi.checked && !laiteKaksiPixelNA.checked) {
        alustaLaiteKaksiTiedot()
    }
}

function alustaLaiteYksiTiedot() {
    document.getElementById("laiteYksiPaino").innerHTML = "";
    document.getElementById("laiteYksiRakenne").innerHTML = "";
    document.getElementById("laiteYksiSim").innerHTML = "";
    document.getElementById("laiteYksiNaytto").innerHTML = "";
    document.getElementById("laiteYksiKoko").innerHTML = "";
    document.getElementById("laiteYksiResoluutio").innerHTML = "";
    document.getElementById("laiteYksiSuojaus").innerHTML = "";
    document.getElementById("laiteYksiSoc").innerHTML = "";
    document.getElementById("laiteYksiCpu").innerHTML = "";
    document.getElementById("laiteYksiGpu").innerHTML = "";
    document.getElementById("laiteYksiMuisti").innerHTML = "";
    document.getElementById("laiteYksiTurvallisuusSiru").innerHTML = "";
    document.getElementById("onkoLaiteYksiValittu").innerHTML = "";
}
function alustaLaiteKaksiTiedot() {
    document.getElementById("laiteKaksiPaino").innerHTML = "";
    document.getElementById("laiteKaksiRakenne").innerHTML = "";
    document.getElementById("laiteKaksiSim").innerHTML = "";
    document.getElementById("laiteKaksiNaytto").innerHTML = "";
    document.getElementById("laiteKaksiKoko").innerHTML = "";
    document.getElementById("laiteKaksiResoluutio").innerHTML = "";
    document.getElementById("laiteKaksiSuojaus").innerHTML = "";
    document.getElementById("laiteKaksiSoc").innerHTML = "";
    document.getElementById("laiteKaksiCpu").innerHTML = "";
    document.getElementById("laiteKaksiGpu").innerHTML = "";
    document.getElementById("laiteKaksiMuisti").innerHTML = "";
    document.getElementById("laiteKaksiTurvallisuusSiru").innerHTML = "";
    document.getElementById("onkoLaiteKaksiValittu").innerHTML = "";
}