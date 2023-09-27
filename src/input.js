let dadosPlayer = [["Chibanca"], [6800]]
let patentePlayer = ""

if (dadosPlayer[1] <= 0) {
    console.log("O jogador " + dadosPlayer[0] + " ainda não tem patente pois seu nível de experiência é igual a: 0EXP")
} else if ((dadosPlayer[1] > 0) && (dadosPlayer[1] <= 1000)) {
    patentePlayer = "FERRO"
    console.log("O Herói de nome " + dadosPlayer[0] + " está na patente: " + patentePlayer + "." + " Pois sua experiência atual é de: " + dadosPlayer[1] + "EXP.")
} else if ((dadosPlayer[1] > 1000) && (dadosPlayer[1] <= 2000)) {
    patentePlayer = "BRONZE"
    console.log("O Herói de nome " + dadosPlayer[0] + " está na patente: " + patentePlayer + "." + " Pois sua experiência atual é de: " + dadosPlayer[1] + "EXP.")
} else if ((dadosPlayer[1] > 2000) && (dadosPlayer[1] <= 5000)) {
    patentePlayer = "PRATA"
    console.log("O Herói de nome " + dadosPlayer[0] + " está na patente: " + patentePlayer + "." + " Pois sua experiência atual é de: " + dadosPlayer[1] + "EXP.")
} else if ((dadosPlayer[1] > 5000) && (dadosPlayer[1] <= 7000)) {
    patentePlayer = "OURO"
    console.log("O Herói de nome " + dadosPlayer[0] + " está na patente: " + patentePlayer + "." + " Pois sua experiência atual é de: " + dadosPlayer[1] + "EXP.")
} else if ((dadosPlayer[1] > 7000) && (dadosPlayer[1] <= 8000)) {
    patentePlayer = "PLATINA"
    console.log("O Herói de nome " + dadosPlayer[0] + " está na patente: " + patentePlayer + "." + " Pois sua experiência atual é de: " + dadosPlayer[1] + "EXP.")
} else if ((dadosPlayer[1] > 8000) && (dadosPlayer[1] <= 9000)) {
    patentePlayer = "ASCENDENTE"
    console.log("O Herói de nome " + dadosPlayer[0] + " está na patente: " + patentePlayer + "." + " Pois sua experiência atual é de: " + dadosPlayer[1] + "EXP.")
} else if ((dadosPlayer[1] > 9000) && (dadosPlayer[1] <= 10000)) {
    patentePlayer = "IMORTAL"
    console.log("O Herói de nome " + dadosPlayer[0] + " está na patente: " + patentePlayer + "." + " Pois sua experiência atual é de: " + experienciaPlayer + "EXP.")
} else if (dadosPlayer[1] >= 10001) {
    patentePlayer = "RADIANTE"
    console.log("O Herói de nome " + dadosPlayer[0] + " está na patente: " + patentePlayer + "." + " Pois sua experiência atual é de: " + dadosPlayer[1] + "EXP.")
}