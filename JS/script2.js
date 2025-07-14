// array di oggetti squadre di calcio con solo nome, punti e falli a 0
const squadreCalcio =[
  { nome: "Milan", punti: 0, falliSubiti: 0 },
  { nome: "Inter", punti: 0, falliSubiti: 0 },
  { nome: "Napoli", punti: 0, falliSubiti: 0 },
  { nome: "Roma", punti: 0, falliSubiti: 0 },
  { nome: "Juventus", punti: 0, falliSubiti: 0 },
];

// Funzione per generare un numero random 
for (let i = 0; i< squadreCalcio.length; i++){
  squadreCalcio[i].punti = getRandomNumber(20, 80);
  squadreCalcio[i].falliSubiti = getRandomNumber(50, 250);
}

// array con solo nome e falli subiti
const nomiEFalli = squadreCalcio.map(squadra => {
  return {
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti
  };
});