const laiteYksiPixelNA = document.getElementById("laiteYksiPixel4a");
const laiteYksiPixelKuusi = document.getElementById("laiteYksiPixel6");

const laiteKaksiPixelNA = document.getElementById("laiteKaksiPixel4a");
const laiteKaksiPixelKuusi = document.getElementById("laiteKaksiPixel6");

const pNa = { // Pixel 4a
    verkko:"GSM / HSPA / LTE",
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
};
const pKa = { // Pixel 6
    verkko:"GSM / CDMA / HSPA / EVDO / LTE / 5G",
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
}

function valitseLaite() {
    if (laiteYksiPixelNA.checked) {
        document.getElementById("laiteYksiVerkkoTeknologia").innerHTML = "Verkkoteknologia: " + pNa.verkko;
        document.getElementById("laiteYksiPaino").innerHTML = "Paino: " + pNa.paino;
        document.getElementById("laiteYksiRakenne").innerHTML = "Rakenne: " + pNa.rakenne;
        document.getElementById("laiteYksiSim").innerHTML = "SIM: " + pNa.sim;
        document.getElementById("laiteYksiNaytto").innerHTML = "Näyttö: " + pNa.nautonTyyli;
        document.getElementById("laiteYksiKoko").innerHTML = "Koko: " + pNa.koko;
        document.getElementById("laiteYksiResoluutio").innerHTML = "Resoluutio" + pNa.resoluutio;
        document.getElementById("laiteYksiSuojaus").innerHTML = "Suojaus: " + pNa.suojaus;
        document.getElementById("laiteYksiSoc").innerHTML = "SoC: " + pNa.soc;
        document.getElementById("laiteYksiCpu").innerHTML = "CPU: " + pNa.cpu;
        document.getElementById("laiteYksiGpu").innerHTML = "GPU: " + pNa.gpu;
        document.getElementById("laiteYksiMuisti").innerHTML = "Muisti: " + pNa.muisti;
    }
    if (laiteYksiPixelKuusi.checked) {
        document.getElementById("laiteYksiVerkkoTeknologia").innerHTML = "Verkkoteknologia: " + pKa.verkko;
        document.getElementById("laiteYksiPaino").innerHTML = "Paino: " + pKa.paino;
        document.getElementById("laiteYksiRakenne").innerHTML = "Rakenne: " + pKa.rakenne;
        document.getElementById("laiteYksiSim").innerHTML = "SIM: " + pKa.sim;
        document.getElementById("laiteYksiNaytto").innerHTML = "Näyttö: " + pKa.nautonTyyli;
        document.getElementById("laiteYksiKoko").innerHTML = "Koko: " + pKa.koko;
        document.getElementById("laiteYksiResoluutio").innerHTML = "Resoluutio" + pKa.resoluutio;
        document.getElementById("laiteYksiSuojaus").innerHTML = "Suojaus: " + pKa.suojaus;
        document.getElementById("laiteYksiSoc").innerHTML = "SoC: " + pKa.soc;
        document.getElementById("laiteYksiCpu").innerHTML = "CPU: " + pKa.cpu;
        document.getElementById("laiteYksiGpu").innerHTML = "GPU: " + pKa.gpu;
        document.getElementById("laiteYksiMuisti").innerHTML = "Muisti: " + pKa.muisti;
    }
    if (laiteKaksiPixelNA.checked) {
        document.getElementById("laiteKaksiVerkkoTeknologia").innerHTML = "Verkkoteknologia: " + pNa.verkko;
        document.getElementById("laiteKaksiPaino").innerHTML = "Paino: " + pNa.paino;
        document.getElementById("laiteKaksiRakenne").innerHTML = "Rakenne: " + pNa.rakenne;
        document.getElementById("laiteKaksiSim").innerHTML = "SIM: " + pNa.sim;
        document.getElementById("laiteKaksiNaytto").innerHTML = "Näyttö: " + pNa.nautonTyyli;
        document.getElementById("laiteKaksiKoko").innerHTML = "Koko: " + pNa.koko;
        document.getElementById("laiteKaksiResoluutio").innerHTML = "Resoluutio" + pNa.resoluutio;
        document.getElementById("laiteKaksiSuojaus").innerHTML = "Suojaus: " + pNa.suojaus;
        document.getElementById("laiteKaksiSoc").innerHTML = "SoC: " + pNa.soc;
        document.getElementById("laiteKaksiCpu").innerHTML = "CPU: " + pNa.cpu;
        document.getElementById("laiteKaksiGpu").innerHTML = "GPU: " + pNa.gpu;
        document.getElementById("laiteKaksiMuisti").innerHTML = "Muisti: " + pNa.muisti;
    }
    if (laiteKaksiPixelKuusi.checked) {
        document.getElementById("laiteKaksiVerkkoTeknologia").innerHTML = "Verkkoteknologia: " + pKa.verkko;
        document.getElementById("laiteKaksiPaino").innerHTML = "Paino: " + pKa.paino;
        document.getElementById("laiteKaksiRakenne").innerHTML = "Rakenne: " + pKa.rakenne;
        document.getElementById("laiteKaksiSim").innerHTML = "SIM: " + pKa.sim;
        document.getElementById("laiteKaksiNaytto").innerHTML = "Näyttö: " + pKa.nautonTyyli;
        document.getElementById("laiteKaksiKoko").innerHTML = "Koko: " + pKa.koko;
        document.getElementById("laiteKaksiResoluutio").innerHTML = "Resoluutio" + pKa.resoluutio;
        document.getElementById("laiteKaksiSuojaus").innerHTML = "Suojaus: " + pKa.suojaus;
        document.getElementById("laiteKaksiSoc").innerHTML = "SoC: " + pKa.soc;
        document.getElementById("laiteKaksiCpu").innerHTML = "CPU: " + pKa.cpu;
        document.getElementById("laiteKaksiGpu").innerHTML = "GPU: " + pKa.gpu;
        document.getElementById("laiteKaksiMuisti").innerHTML = "Muisti: " + pKa.muisti;
    }
arvioiLaiteValinta()
}

function arvioiLaiteValinta() {
    if (laiteYksiPixelKuusi.checked && laiteYksiPixelNA.checked) {
        document.getElementById("laiteYksiVerkkoTeknologia").innerHTML = "";
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
    }
    if (laiteKaksiPixelKuusi.checked && laiteKaksiPixelNA.checked) {
        document.getElementById("laiteKaksiVerkkoTeknologia").innerHTML = "";
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
    }
    if (!laiteYksiPixelKuusi.checked && !laiteYksiPixelNA.checked) {
        document.getElementById("laiteYksiVerkkoTeknologia").innerHTML = "";
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
    }
    if (!laiteKaksiPixelKuusi.checked && !laiteKaksiPixelNA.checked) {
        document.getElementById("laiteKaksiVerkkoTeknologia").innerHTML = "";
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
    }
}