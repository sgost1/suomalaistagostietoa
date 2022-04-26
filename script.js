const laiteYksiPixelNA = document.getElementById("laiteYksiPixel4a");
const laiteYksiPixelKuusi = document.getElementById("laiteYksiPixel6");

const laiteKaksiPixelNA = document.getElementById("laiteKaksiPixel4a");
const laiteKaksiPixelKuusi = document.getElementById("laiteKaksiPixel6");

let nykyAika = new Date();

let p4aEol = '2023' - nykyAika.getFullYear();
let p6Eol = '2026' - nykyAika.getFullYear();




const pNa = { // Pixel 4a
    paino:"143 g",
    rakenne:"Corning Gorilla Glass 3 cover glass",
    sim:"Nano-SIM ja/tai eSIM",
    nautonTyyli:"OLED, HDR",
    koko:"148mm",
    resoluutio:"1080 x 2340 pixeliä",
    soc:"Qualcomm <br> SDM730 Snapdragon 730G (8nm)",
    cpu:"Octa-core <br> 2x2.2 GHz Kryo 470 Gold <br> 6x1.8 GHz Kryo 470 Silver",
    gpu:"Adreno 618",
    muisti:"6 GB LPDDR4x RAM",
    turvallisuusSiru:"Titan M",
    eol:p4aEol
};
const pKa = { // Pixel 6
    paino:"207 g",
    rakenne:"Corning Gorilla Glass Victus cover glass",
    sim:"Nano-SIM ja/tai eSIM",
    nautonTyyli:"AMOLED, 90Hz, HDR10+",
    koko:"163mm",
    resoluutio:"1080 x 2400 pixeliä",
    soc:"Google <br> Tensor(5nm)",
    cpu:"Octa-core <br> 2x2.80 GHz Cortex-X1 <br> 2x2.25 GHz Cortex-A76 <br> 4x1.80 GHz Cortex-A55",
    gpu:"Mali-G78 MP20",
    muisti:"8 GB LPDDR5 RAM",
    turvallisuusSiru:"Titan M2, Security core",
    eol:p6Eol
};

function valitseLaite() {
    if (laiteYksiPixelNA.checked) {
        document.getElementById("laiteYksiPaino").innerHTML = "Paino: " + pNa.paino;
        document.getElementById("laiteYksiRakenne").innerHTML = "Rakenne: " + pNa.rakenne;
        document.getElementById("laiteYksiSim").innerHTML = "SIM: " + pNa.sim;
        document.getElementById("laiteYksiNaytto").innerHTML = "Näyttö: " + pNa.nautonTyyli;
        document.getElementById("laiteYksiKoko").innerHTML = "Näytön koko: " + pNa.koko;
        document.getElementById("laiteYksiResoluutio").innerHTML = "Resoluutio: " + pNa.resoluutio;
        document.getElementById("laiteYksiSoc").innerHTML = "SoC: " + pNa.soc;
        document.getElementById("laiteYksiCpu").innerHTML = "CPU: " + pNa.cpu;
        document.getElementById("laiteYksiGpu").innerHTML = "GPU: " + pNa.gpu;
        document.getElementById("laiteYksiMuisti").innerHTML = "Muisti: " + pNa.muisti;
        document.getElementById("laiteYksiTurvallisuusSiru").innerHTML = "Turvallisuus siru: " + pNa.turvallisuusSiru;
        document.getElementById("laiteYksiEol").innerHTML = "Vuosia tukea jäljellä: " + pNa.eol + " vuotta";

        document.getElementById("onkoLaiteYksiValittu").innerHTML = "Pixel 4a";

    }
    if (laiteYksiPixelKuusi.checked) {
        document.getElementById("laiteYksiPaino").innerHTML = "Paino: " + pKa.paino;
        document.getElementById("laiteYksiRakenne").innerHTML = "Rakenne: " + pKa.rakenne;
        document.getElementById("laiteYksiSim").innerHTML = "SIM: " + pKa.sim;
        document.getElementById("laiteYksiNaytto").innerHTML = "Näytön Koko: " + pKa.nautonTyyli;
        document.getElementById("laiteYksiKoko").innerHTML = "Näytön koko: " + pKa.koko;
        document.getElementById("laiteYksiResoluutio").innerHTML = "Resoluutio: " + pKa.resoluutio;
        document.getElementById("laiteYksiSoc").innerHTML = "SoC: " + pKa.soc;
        document.getElementById("laiteYksiCpu").innerHTML = "CPU: " + pKa.cpu;
        document.getElementById("laiteYksiGpu").innerHTML = "GPU: " + pKa.gpu;
        document.getElementById("laiteYksiMuisti").innerHTML = "Muisti: " + pKa.muisti;
        document.getElementById("laiteYksiTurvallisuusSiru").innerHTML = "Turvallisuus siru: " + pKa.turvallisuusSiru;
        document.getElementById("laiteYksiEol").innerHTML = "Vuosia tukea jäljellä: " + pKa.eol + " vuotta";

        document.getElementById("onkoLaiteYksiValittu").innerHTML = "Pixel 6"

    }
    if (laiteKaksiPixelNA.checked) {
        document.getElementById("laiteKaksiPaino").innerHTML = "Paino: " + pNa.paino;
        document.getElementById("laiteKaksiRakenne").innerHTML = "Rakenne: " + pNa.rakenne;
        document.getElementById("laiteKaksiSim").innerHTML = "SIM: " + pNa.sim;
        document.getElementById("laiteKaksiNaytto").innerHTML = "Näyttö: " + pNa.nautonTyyli;
        document.getElementById("laiteKaksiKoko").innerHTML = "Koko: " + pNa.koko;
        document.getElementById("laiteKaksiResoluutio").innerHTML = "Resoluutio: " + pNa.resoluutio;
        document.getElementById("laiteKaksiSoc").innerHTML = "SoC: " + pNa.soc;
        document.getElementById("laiteKaksiCpu").innerHTML = "CPU: " + pNa.cpu;
        document.getElementById("laiteKaksiGpu").innerHTML = "GPU: " + pNa.gpu;
        document.getElementById("laiteKaksiMuisti").innerHTML = "Muisti: " + pNa.muisti;
        document.getElementById("laiteKaksiTurvallisuusSiru").innerHTML = "Turvallisuus siru: " + pNa.turvallisuusSiru;
        document.getElementById("laiteKaksiEol").innerHTML = "Vuosia tukea jäljellä: " + pNa.eol + " vuotta";

        document.getElementById("onkoLaiteKaksiValittu").innerHTML = "Pixel 4a";

    }
    if (laiteKaksiPixelKuusi.checked) {
        document.getElementById("laiteKaksiPaino").innerHTML = "Paino: " + pKa.paino;
        document.getElementById("laiteKaksiRakenne").innerHTML = "Rakenne: " + pKa.rakenne;
        document.getElementById("laiteKaksiSim").innerHTML = "SIM: " + pKa.sim;
        document.getElementById("laiteKaksiNaytto").innerHTML = "Näyttö: " + pKa.nautonTyyli;
        document.getElementById("laiteKaksiKoko").innerHTML = "Koko: " + pKa.koko;
        document.getElementById("laiteKaksiResoluutio").innerHTML = "Resoluutio: " + pKa.resoluutio;
        document.getElementById("laiteKaksiSoc").innerHTML = "SoC: " + pKa.soc;
        document.getElementById("laiteKaksiCpu").innerHTML = "CPU: " + pKa.cpu;
        document.getElementById("laiteKaksiGpu").innerHTML = "GPU: " + pKa.gpu;
        document.getElementById("laiteKaksiMuisti").innerHTML = "Muisti: " + pKa.muisti;
        document.getElementById("laiteKaksiTurvallisuusSiru").innerHTML = "Turvallisuus siru: " + pKa.turvallisuusSiru;
        document.getElementById("laiteKaksiEol").innerHTML = "Vuosia tukea jäljellä: " + pKa.eol + " vuotta";

        document.getElementById("onkoLaiteKaksiValittu").innerHTML = "Pixel 6";

    }
}