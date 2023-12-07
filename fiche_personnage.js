var sexe = prompt("De quel sexe est votre personnage ?\n homme ou femme ?");
switch (sexe) {
  case "homme":
    sexe = "homme";
    break;
  case "femme":
    sexe = "femme";
    break;
  default:
    alert("Réponse Invalide !");
}

var race = prompt(
  "De quel race est votre personnage ?\n elfe\n nain\n humain\n barbare\n orc\n semi-homme"
);

switch (race) {
  case "elfe":
    race = "elfe";
    break;
  case "nain":
    race = "nain";
    break;
  case "humain":
    race = "humain";
    break;
  case "barbare":
    race = "barbare";
    break;
  case "orc":
    race = "orc";
    break;
  case "semi-homme":
    race = "semihomme";
    break;
  default:
    alert("Réponse Invalide !");
}

var classe = prompt(
  "Quel classe voulez-vous jouer ?\n mage\n archer\n paladin\n berserker\n voleur"
);

switch (classe) {
  case "mage":
    classe = "mage";
    break;
  case "archer":
    classe = "archer";
    break;
  case "paladin":
    classe = "paladin";
    break;
  case "berserker":
    classe = "berserker";
    break;
  case "voleur":
    classe = "voleur";
    break;
  default:
    alert("Réponse Invalide !");
}

var nom = prompt("Quel est le nom de votre personnage ?");

var compétence1;

switch (race) {
  case "elfe":
    compétence1 = "Faune & Flore +2 / Vue Perçante & Ouïe fine +2";
    break;
  case "nain":
    compétence1 = "Marchandage +2 / Forge +2";
    break;
  case "humain":
    compétence1 = "Séduction +2 / Cuisine +2";
    break;
  case "barbare":
    compétence1 = "Faire du Feu +2 / Construire un Campement +2";
    break;
  case "orc":
    compétence1 = "Chasse (gros gibier) +2 / Dépeçage +2";
    break;
  case "semihomme":
    compétence1 = "Chasse & Pêche +2";
    break;
  default:
    break;
}

var compétence2;

switch (classe) {
  case "mage":
    compétence2 = "Lumière (éclaire dist-20m)";
    break;
  case "archer":
    compétence2 = "Discrétion +2";
    break;
  case "paladin":
    compétence2 = "Heal";
    break;
  case "berserker":
    compétence2 = "Ini +3 / Rage";
    break;
  case "voleur":
    compétence2 = "Détection & Désamorçage des Pièges +2";
    break;
  default:
    break;
}

function icones() {
  let tableau = document.createElement("table");
  tableau.setAttribute("id", "icones");
  tableau.setAttribute("border", "1");
  tableau.setAttribute("style", "text-align:center;");
  tableau.setAttribute("align", "center");
  document.body.appendChild(tableau);

  let trIcones = document.createElement("tr");
  trIcones.setAttribute("id", "ligne");
  document.querySelector("#icones").appendChild(trIcones);

  switch (sexe) {
    case "homme":
      let tdSexeH = document.createElement("td");
      let imgSexeH = document.createElement("img");
      imgSexeH.src = "../icones/mars.png";
      imgSexeH.setAttribute("style", "height:100px;width:100px;");
      tdSexeH.appendChild(imgSexeH);
      document.querySelector("#ligne").appendChild(tdSexeH);
      break;
    case "femme":
      let tdSexeF = document.createElement("td");
      let imgSexeF = document.createElement("img");
      imgSexeF.src = "../icones/venus.png";
      imgSexeF.setAttribute("style", "height:100px;width:100px;");
      tdSexeF.appendChild(imgSexeF);
      document.querySelector("#ligne").appendChild(tdSexeF);
      break;
  }

  switch (race) {
    case "elfe":
      let tdRaceE = document.createElement("td");
      let imgRaceE = document.createElement("img");
      imgRaceE.src = "../icones/elf.png";
      imgRaceE.setAttribute("style", "height:100px;width:100px;");
      tdRaceE.appendChild(imgRaceE);
      document.querySelector("#ligne").appendChild(tdRaceE);
      break;
    case "nain":
      let tdRaceN = document.createElement("td");
      let imgRaceN = document.createElement("img");
      imgRaceN.src = "../icones/nain.png";
      imgRaceN.setAttribute("style", "height:100px;width:100px;");
      tdRaceN.appendChild(imgRaceN);
      document.querySelector("#ligne").appendChild(tdRaceN);
      break;
    case "humain":
      let tdRaceH = document.createElement("td");
      let imgRaceH = document.createElement("img");
      imgRaceH.src = "../icones/humain.png";
      imgRaceH.setAttribute("style", "height:100px;width:100px;");
      tdRaceH.appendChild(imgRaceH);
      document.querySelector("#ligne").appendChild(tdRaceH);
      break;
    case "barbare":
      let tdRaceB = document.createElement("td");
      let imgRaceB = document.createElement("img");
      imgRaceB.src = "../icones/barbare.png";
      imgRaceB.setAttribute("style", "height:100px;width:100px;");
      tdRaceB.appendChild(imgRaceB);
      document.querySelector("#ligne").appendChild(tdRaceB);
      break;
    case "orc":
      let tdRaceO = document.createElement("td");
      let imgRaceO = document.createElement("img");
      imgRaceO.src = "../icones/orc.png";
      imgRaceO.setAttribute("style", "height:100px;width:100px;");
      tdRaceO.appendChild(imgRaceO);
      document.querySelector("#ligne").appendChild(tdRaceO);
      break;
    case "semihomme":
      let tdRaceSH = document.createElement("td");
      let imgRaceSH = document.createElement("img");
      imgRaceSH.src = "../icones/hobbit.jpg";
      imgRaceSH.setAttribute("style", "height:100px;width:100px;");
      tdRaceSH.appendChild(imgRaceSH);
      document.querySelector("#ligne").appendChild(tdRaceSH);
      break;
  }

  switch (classe) {
    case "mage":
      let tdClasseM = document.createElement("td");
      let imgClasseM = document.createElement("img");
      imgClasseM.src = "../icones/mage.png";
      imgClasseM.setAttribute("style", "height:100px;width:100px;");
      tdClasseM.appendChild(imgClasseM);
      document.querySelector("#ligne").appendChild(tdClasseM);
      break;
    case "archer":
      let tdClasseA = document.createElement("td");
      let imgClasseA = document.createElement("img");
      imgClasseA.src = "../icones/archer.png";
      imgClasseA.setAttribute("style", "height:100px;width:100px;");
      tdClasseA.appendChild(imgClasseA);
      document.querySelector("#ligne").appendChild(tdClasseA);
      break;
    case "paladin":
      let tdClasseP = document.createElement("td");
      let imgClasseP = document.createElement("img");
      imgClasseP.src = "../icones/paladin.png";
      imgClasseP.setAttribute("style", "height:100px;width:100px;");
      tdClasseP.appendChild(imgClasseP);
      document.querySelector("#ligne").appendChild(tdClasseP);
      break;
    case "berserker":
      let tdClasseB = document.createElement("td");
      let imgClasseB = document.createElement("img");
      imgClasseB.src = "../icones/hache.png";
      imgClasseB.setAttribute("style", "height:100px;width:100px;");
      tdClasseB.appendChild(imgClasseB);
      document.querySelector("#ligne").appendChild(tdClasseB);
      break;
    case "voleur":
      let tdClasseV = document.createElement("td");
      let imgClasseV = document.createElement("img");
      imgClasseV.src = "../icones/voleur.png";
      imgClasseV.setAttribute("style", "height:100px;width:100px;");
      tdClasseV.appendChild(imgClasseV);
      document.querySelector("#ligne").appendChild(tdClasseV);
      break;
  }
}

function infoPersonnage() {
  //CREATION DU TABLEAU
  let tableau = document.createElement("table");
  tableau.setAttribute("id", "personnage");
  tableau.setAttribute("border", "1");
  tableau.setAttribute("style", "text-align:center;");
  tableau.setAttribute("align", "center");
  document.body.appendChild(tableau);

  let tr = document.createElement("tr");
  tr.setAttribute("id", "Entête");
  document.querySelector("#personnage").appendChild(tr);

  let th = document.createElement("th");
  let thText = document.createTextNode(nom);
  th.appendChild(thText);
  th.setAttribute("colspan", "2");
  document.querySelector("#Entête").appendChild(th);

  //LIGNE 1
  let tr1 = document.createElement("tr");
  tr1.setAttribute("id", "ligne1");
  document.querySelector("#personnage").appendChild(tr1);

  //CELLULE 1 (C1)
  let td1 = document.createElement("td");
  let td1Texte = document.createTextNode("SEXE");
  td1.appendChild(td1Texte);
  document.querySelector("#ligne1").appendChild(td1);
  //CELLULE 2 (C2)
  let td2 = document.createElement("td");
  let td2Texte = document.createTextNode(sexe);
  td2.appendChild(td2Texte);
  document.querySelector("#ligne1").appendChild(td2);

  //LIGNE 2
  let tr2 = document.createElement("tr");
  tr2.setAttribute("id", "ligne2");
  document.querySelector("#personnage").appendChild(tr2);
  //C1
  let td3 = document.createElement("td");
  let td3Texte = document.createTextNode("RACE");
  td3.appendChild(td3Texte);
  document.querySelector("#ligne2").appendChild(td3);
  //C2
  let td4 = document.createElement("td");
  let td4Texte = document.createTextNode(race);
  td4.appendChild(td4Texte);
  document.querySelector("#ligne2").appendChild(td4);

  //LIGNE 3
  let tr3 = document.createElement("tr");
  tr3.setAttribute("id", "ligne3");
  document.querySelector("#personnage").appendChild(tr3);
  //C1
  let td5 = document.createElement("td");
  let td5Texte = document.createTextNode("CLASSE");
  td5.appendChild(td5Texte);
  document.querySelector("#ligne3").appendChild(td5);
  //C2
  let td6 = document.createElement("td");
  let td6Texte = document.createTextNode(classe);
  td6.appendChild(td6Texte);
  document.querySelector("#ligne3").appendChild(td6);

  //LIGNE 4
  let tr4 = document.createElement("tr");
  tr4.setAttribute("id", "ligne4");
  document.querySelector("#personnage").appendChild(tr4);
  //C1
  let td7 = document.createElement("td");
  let td7Texte = document.createTextNode("Compétence 1");
  td7.appendChild(td7Texte);
  document.querySelector("#ligne4").appendChild(td7);
  //C2
  let td8 = document.createElement("td");
  let td8Texte = document.createTextNode(compétence1);
  td8.appendChild(td8Texte);
  document.querySelector("#ligne4").appendChild(td8);

  //LIGNE 5
  let tr5 = document.createElement("tr");
  tr5.setAttribute("id", "ligne5");
  document.querySelector("#personnage").appendChild(tr5);
  //C1
  let td9 = document.createElement("td");
  let td9Texte = document.createTextNode("Compétence 2");
  td9.appendChild(td9Texte);
  document.querySelector("#ligne5").appendChild(td9);
  //C2
  let td10 = document.createElement("td");
  let td10Texte = document.createTextNode(compétence2);
  td10.appendChild(td10Texte);
  document.querySelector("#ligne5").appendChild(td10);
}

var force;
var agilité;
var intelligence;
var apparence;
var endurance;
var mentalité;

switch (true) {
  //ELFE
  case sexe == "homme" && race == "elfe" && classe == "mage":
    force = 32;
    agilité = 32;
    intelligence = 82;
    apparence = 79;
    endurance = 50;
    mentalité = 60;
    break;
  case sexe == "femme" && race == "elfe" && classe == "mage":
    force = 28;
    agilité = 32;
    intelligence = 82;
    apparence = 83;
    endurance = 50;
    mentalité = 60;
    break;
  case sexe == "homme" && race == "elfe" && classe == "archer":
    force = 42;
    agilité = 84;
    intelligence = 30;
    apparence = 79;
    endurance = 65;
    mentalité = 35;
    break;
  case sexe == "femme" && race == "elfe" && classe == "archer":
    force = 38;
    agilité = 84;
    intelligence = 30;
    apparence = 83;
    endurance = 65;
    mentalité = 35;
    break;
  case sexe == "homme" && race == "elfe" && classe == "paladin":
    force = 83;
    agilité = 32;
    intelligence = 40;
    apparence = 79;
    endurance = 60;
    mentalité = 41;
    break;
  case sexe == "femme" && race == "elfe" && classe == "paladin":
    force = 79;
    agilité = 32;
    intelligence = 40;
    apparence = 83;
    endurance = 60;
    mentalité = 41;
    break;
  case sexe == "homme" && race == "elfe" && classe == "berserker":
    force = 84;
    agilité = 32;
    intelligence = 30;
    apparence = 79;
    endurance = 65;
    mentalité = 45;
    break;
  case sexe == "femme" && race == "elfe" && classe == "berserker":
    force = 80;
    agilité = 32;
    intelligence = 30;
    apparence = 83;
    endurance = 65;
    mentalité = 45;
    break;
  case sexe == "homme" && race == "elfe" && classe == "voleur":
    force = 32;
    agilité = 83;
    intelligence = 30;
    apparence = 79;
    endurance = 65;
    mentalité = 45;
    break;
  case sexe == "femme" && race == "elfe" && classe == "voleur":
    force = 28;
    agilité = 83;
    intelligence = 30;
    apparence = 83;
    endurance = 65;
    mentalité = 45;
    break;
  //NAIN
  case sexe == "homme" && race == "nain" && classe == "mage":
    force = 48;
    agilité = 30;
    intelligence = 82;
    apparence = 27;
    endurance = 81;
    mentalité = 65;
    break;
  case sexe == "femme" && race == "nain" && classe == "mage":
    force = 44;
    agilité = 30;
    intelligence = 82;
    apparence = 31;
    endurance = 81;
    mentalité = 65;
    break;
  case sexe == "homme" && race == "nain" && classe == "archer":
    force = 48;
    agilité = 82;
    intelligence = 40;
    apparence = 27;
    endurance = 81;
    mentalité = 55;
    break;
  case sexe == "femme" && race == "nain" && classe == "archer":
    force = 44;
    agilité = 82;
    intelligence = 40;
    apparence = 31;
    endurance = 81;
    mentalité = 55;
    break;
  case sexe == "homme" && race == "nain" && classe == "paladin":
    force = 84;
    agilité = 30;
    intelligence = 60;
    apparence = 27;
    endurance = 76;
    mentalité = 56;
    break;
  case sexe == "femme" && race == "nain" && classe == "paladin":
    force = 80;
    agilité = 30;
    intelligence = 60;
    apparence = 31;
    endurance = 76;
    mentalité = 56;
    break;
  case sexe == "homme" && race == "nain" && classe == "berserker":
    force = 85;
    agilité = 30;
    intelligence = 30;
    apparence = 27;
    endurance = 81;
    mentalité = 80;
    break;
  case sexe == "femme" && race == "nain" && classe == "berserker":
    force = 81;
    agilité = 30;
    intelligence = 30;
    apparence = 31;
    endurance = 81;
    mentalité = 80;
    break;
  case sexe == "homme" && race == "nain" && classe == "voleur":
    force = 48;
    agilité = 81;
    intelligence = 45;
    apparence = 27;
    endurance = 76;
    mentalité = 55;
    break;
  case sexe == "femme" && race == "nain" && classe == "voleur":
    force = 44;
    agilité = 81;
    intelligence = 45;
    apparence = 31;
    endurance = 76;
    mentalité = 55;
    break;
  //HUMAIN
  case sexe == "homme" && race == "humain" && classe == "mage":
    force = 32;
    agilité = 30;
    intelligence = 83;
    apparence = 79;
    endurance = 50;
    mentalité = 59;
    break;
  case sexe == "femme" && race == "humain" && classe == "mage":
    force = 28;
    agilité = 30;
    intelligence = 83;
    apparence = 83;
    endurance = 50;
    mentalité = 59;
    break;
  case sexe == "homme" && race == "humain" && classe == "archer":
    force = 42;
    agilité = 82;
    intelligence = 31;
    apparence = 79;
    endurance = 65;
    mentalité = 34;
    break;
  case sexe == "femme" && race == "humain" && classe == "archer":
    force = 38;
    agilité = 82;
    intelligence = 31;
    apparence = 83;
    endurance = 65;
    mentalité = 34;
    break;
  case sexe == "homme" && race == "humain" && classe == "paladin":
    force = 83;
    agilité = 30;
    intelligence = 41;
    apparence = 79;
    endurance = 60;
    mentalité = 40;
    break;
  case sexe == "femme" && race == "humain" && classe == "paladin":
    force = 79;
    agilité = 30;
    intelligence = 41;
    apparence = 83;
    endurance = 60;
    mentalité = 40;
    break;
  case sexe == "homme" && race == "humain" && classe == "berserker":
    force = 84;
    agilité = 30;
    intelligence = 31;
    apparence = 79;
    endurance = 65;
    mentalité = 44;
    break;
  case sexe == "femme" && race == "humain" && classe == "berserker":
    force = 80;
    agilité = 30;
    intelligence = 31;
    apparence = 83;
    endurance = 65;
    mentalité = 44;
    break;
  case sexe == "homme" && race == "humain" && classe == "voleur":
    force = 32;
    agilité = 81;
    intelligence = 31;
    apparence = 79;
    endurance = 65;
    mentalité = 44;
    break;
  case sexe == "femme" && race == "humain" && classe == "voleur":
    force = 28;
    agilité = 81;
    intelligence = 31;
    apparence = 83;
    endurance = 65;
    mentalité = 44;
    break;
  //BARBARE
  case sexe == "homme" && race == "barbare" && classe == "mage":
    force = 43;
    agilité = 30;
    intelligence = 81;
    apparence = 28;
    endurance = 81;
    mentalité = 40;
    break;
  case sexe == "femme" && race == "barbare" && classe == "mage":
    force = 39;
    agilité = 30;
    intelligence = 81;
    apparence = 32;
    endurance = 81;
    mentalité = 40;
    break;
  case sexe == "homme" && race == "barbare" && classe == "archer":
    force = 43;
    agilité = 82;
    intelligence = 29;
    apparence = 28;
    endurance = 81;
    mentalité = 70;
    break;
  case sexe == "femme" && race == "barbare" && classe == "archer":
    force = 39;
    agilité = 82;
    intelligence = 29;
    apparence = 32;
    endurance = 81;
    mentalité = 70;
    break;
  case sexe == "homme" && race == "barbare" && classe == "paladin":
    force = 84;
    agilité = 30;
    intelligence = 49;
    apparence = 28;
    endurance = 81;
    mentalité = 61;
    break;
  case sexe == "femme" && race == "barbare" && classe == "paladin":
    force = 80;
    agilité = 30;
    intelligence = 49;
    apparence = 32;
    endurance = 81;
    mentalité = 61;
    break;
  case sexe == "homme" && race == "barbare" && classe == "berserker":
    force = 85;
    agilité = 30;
    intelligence = 29;
    apparence = 28;
    endurance = 81;
    mentalité = 80;
    break;
  case sexe == "femme" && race == "barbare" && classe == "berserker":
    force = 81;
    agilité = 30;
    intelligence = 29;
    apparence = 32;
    endurance = 81;
    mentalité = 80;
    break;
  case sexe == "homme" && race == "barbare" && classe == "voleur":
    force = 43;
    agilité = 81;
    intelligence = 39;
    apparence = 28;
    endurance = 81;
    mentalité = 60;
    break;
  case sexe == "femme" && race == "barbare" && classe == "voleur":
    force = 39;
    agilité = 81;
    intelligence = 39;
    apparence = 32;
    endurance = 81;
    mentalité = 60;
    break;
  //ORC
  case sexe == "homme" && race == "orc" && classe == "mage":
    force = 45;
    agilité = 30;
    intelligence = 82;
    apparence = 28;
    endurance = 70;
    mentalité = 80;
    break;
  case sexe == "femme" && race == "orc" && classe == "mage":
    force = 41;
    agilité = 30;
    intelligence = 82;
    apparence = 32;
    endurance = 70;
    mentalité = 80;
    break;
  case sexe == "homme" && race == "orc" && classe == "archer":
    force = 45;
    agilité = 82;
    intelligence = 30;
    apparence = 28;
    endurance = 70;
    mentalité = 80;
    break;
  case sexe == "femme" && race == "orc" && classe == "archer":
    force = 41;
    agilité = 82;
    intelligence = 30;
    apparence = 32;
    endurance = 70;
    mentalité = 80;
    break;
  case sexe == "homme" && race == "orc" && classe == "paladin":
    force = 86;
    agilité = 30;
    intelligence = 45;
    apparence = 28;
    endurance = 65;
    mentalité = 81;
    break;
  case sexe == "femme" && race == "orc" && classe == "paladin":
    force = 82;
    agilité = 30;
    intelligence = 45;
    apparence = 32;
    endurance = 65;
    mentalité = 81;
    break;
  case sexe == "homme" && race == "orc" && classe == "berserker":
    force = 87;
    agilité = 30;
    intelligence = 30;
    apparence = 28;
    endurance = 80;
    mentalité = 80;
    break;
  case sexe == "femme" && race == "orc" && classe == "berserker":
    force = 83;
    agilité = 30;
    intelligence = 30;
    apparence = 32;
    endurance = 80;
    mentalité = 80;
    break;
  case sexe == "homme" && race == "orc" && classe == "voleur":
    force = 45;
    agilité = 81;
    intelligence = 30;
    apparence = 28;
    endurance = 70;
    mentalité = 80;
    break;
  case sexe == "femme" && race == "orc" && classe == "voleur":
    force = 41;
    agilité = 81;
    intelligence = 30;
    apparence = 32;
    endurance = 70;
    mentalité = 80;
    break;
  //SEMI-HOMME
  case sexe == "homme" && race == "semihomme" && classe == "mage":
    force = 32;
    agilité = 61;
    intelligence = 82;
    apparence = 28;
    endurance = 82;
    mentalité = 50;
    break;
  case sexe == "femme" && race == "semihomme" && classe == "mage":
    force = 28;
    agilité = 61;
    intelligence = 82;
    apparence = 32;
    endurance = 82;
    mentalité = 50;
    break;
  case sexe == "homme" && race == "semihomme" && classe == "archer":
    force = 32;
    agilité = 83;
    intelligence = 50;
    apparence = 28;
    endurance = 82;
    mentalité = 60;
    break;
  case sexe == "femme" && race == "semihomme" && classe == "archer":
    force = 28;
    agilité = 83;
    intelligence = 50;
    apparence = 32;
    endurance = 82;
    mentalité = 60;
    break;
  case sexe == "homme" && race == "semihomme" && classe == "paladin":
    force = 83;
    agilité = 31;
    intelligence = 50;
    apparence = 28;
    endurance = 82;
    mentalité = 61;
    break;
  case sexe == "femme" && race == "semihomme" && classe == "paladin":
    force = 79;
    agilité = 31;
    intelligence = 50;
    apparence = 32;
    endurance = 82;
    mentalité = 61;
    break;
  case sexe == "homme" && race == "semihomme" && classe == "berserker":
    force = 84;
    agilité = 31;
    intelligence = 30;
    apparence = 28;
    endurance = 82;
    mentalité = 80;
    break;
  case sexe == "femme" && race == "semihomme" && classe == "berserker":
    force = 80;
    agilité = 31;
    intelligence = 30;
    apparence = 32;
    endurance = 82;
    mentalité = 80;
    break;
  case sexe == "homme" && race == "semihomme" && classe == "voleur":
    force = 32;
    agilité = 82;
    intelligence = 50;
    apparence = 28;
    endurance = 82;
    mentalité = 60;
    break;
  case sexe == "femme" && race == "semihomme" && classe == "voleur":
    force = 28;
    agilité = 82;
    intelligence = 50;
    apparence = 32;
    endurance = 82;
    mentalité = 60;
    break;
}

function statsPersonnage() {
  //CREATION DU TABLEAU
  let tableau = document.createElement("table");
  tableau.setAttribute("id", "stats");
  tableau.setAttribute("border", "1");
  tableau.setAttribute("style", "text-align:center;");
  tableau.setAttribute("align", "center");
  document.body.appendChild(tableau);

  let tr = document.createElement("tr");
  tr.setAttribute("id", "Entête2");
  document.querySelector("#stats").appendChild(tr);

  let th = document.createElement("th");
  let thText = document.createTextNode("STATS");
  th.appendChild(thText);
  th.setAttribute("colspan", "2");
  document.querySelector("#Entête2").appendChild(th);

  //LIGNE 1
  let tr1 = document.createElement("tr");
  tr1.setAttribute("id", "T2ligne1");
  document.querySelector("#stats").appendChild(tr1);
  //CELLULE 1 (C1)
  let td1 = document.createElement("td");
  let td1Texte = document.createTextNode("FORCE");
  td1.appendChild(td1Texte);
  document.querySelector("#T2ligne1").appendChild(td1);
  //CELLULE 2 (C2)
  let td2 = document.createElement("td");
  let td2Texte = document.createTextNode(force);
  td2.appendChild(td2Texte);
  document.querySelector("#T2ligne1").appendChild(td2);

  //LIGNE 2
  let tr2 = document.createElement("tr");
  tr2.setAttribute("id", "T2ligne2");
  document.querySelector("#stats").appendChild(tr2);
  //C1
  let td3 = document.createElement("td");
  let td3Texte = document.createTextNode("AGILITE");
  td3.appendChild(td3Texte);
  document.querySelector("#T2ligne2").appendChild(td3);
  //C2
  let td4 = document.createElement("td");
  let td4Texte = document.createTextNode(agilité);
  td4.appendChild(td4Texte);
  document.querySelector("#T2ligne2").appendChild(td4);

  //LIGNE 3
  let tr3 = document.createElement("tr");
  tr3.setAttribute("id", "T2ligne3");
  document.querySelector("#stats").appendChild(tr3);
  //C1
  let td5 = document.createElement("td");
  let td5Texte = document.createTextNode("INTELLIGENCE");
  td5.appendChild(td5Texte);
  document.querySelector("#T2ligne3").appendChild(td5);
  //C2
  let td6 = document.createElement("td");
  let td6Texte = document.createTextNode(intelligence);
  td6.appendChild(td6Texte);
  document.querySelector("#T2ligne3").appendChild(td6);

  //LIGNE 4
  let tr4 = document.createElement("tr");
  tr4.setAttribute("id", "T2ligne4");
  document.querySelector("#stats").appendChild(tr4);
  //C1
  let td7 = document.createElement("td");
  let td7Texte = document.createTextNode("APPARENCE");
  td7.appendChild(td7Texte);
  document.querySelector("#T2ligne4").appendChild(td7);
  //C2
  let td8 = document.createElement("td");
  let td8Texte = document.createTextNode(apparence);
  td8.appendChild(td8Texte);
  document.querySelector("#T2ligne4").appendChild(td8);

  //LIGNE 5
  let tr5 = document.createElement("tr");
  tr5.setAttribute("id", "T2ligne5");
  document.querySelector("#stats").appendChild(tr5);
  //C1
  let td9 = document.createElement("td");
  let td9Texte = document.createTextNode("ENDURANCE");
  td9.appendChild(td9Texte);
  document.querySelector("#T2ligne5").appendChild(td9);
  //C2
  let td10 = document.createElement("td");
  let td10Texte = document.createTextNode(endurance);
  td10.appendChild(td10Texte);
  document.querySelector("#T2ligne5").appendChild(td10);

  //LIGNE 6
  let tr6 = document.createElement("tr");
  tr6.setAttribute("id", "T2ligne6");
  document.querySelector("#stats").appendChild(tr6);
  //C1
  let td11 = document.createElement("td");
  let td11Texte = document.createTextNode("MENTALITE");
  td11.appendChild(td11Texte);
  document.querySelector("#T2ligne6").appendChild(td11);
  //C2
  let td12 = document.createElement("td");
  let td12Texte = document.createTextNode(mentalité);
  td12.appendChild(td12Texte);
  document.querySelector("#T2ligne6").appendChild(td12);
}
