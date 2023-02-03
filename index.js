let dynamicList = [];

let wordSecretCategory;
let wordSecretDrawn;
let attempts = 6;

const words = [
  (palavra001 = {
    name: "BRASIL",
    category: "LUGARES",
  }),
  (palavra002 = {
    name: "SYDNEY",
    category: "LUGARES",
  }),
  (palavra003 = {
    name: "IRLANDA",
    category: "LUGARES",
  }),
  (palavra004 = {
    name: "GRECIA",
    category: "LUGARES",
  }),
  (palavra005 = {
    name: "TEXAS",
    category: "LUGARES",
  }),
  (palavra006 = {
    name: "PIAUÍ",
    category: "LUGARES",
  }),
  (palavra007 = {
    name: "BRASILIA",
    category: "LUGARES",
  }),
  (palavra008 = {
    name: "FRANÇA",
    category: "LUGARES",
  }),
  (palavra009 = {
    name: "MACHU PICCHU",
    category: "LUGARES",
  }),
  (palavra010 = {
    name: "LAS VEGAS",
    category: "LUGARES",
  }),
  (palavra011 = {
    name: "STROGONOFF",
    category: "COMIDA",
  }),
  (palavra012 = {
    name: "CAVIAR",
    category: "COMIDA",
  }),
  (palavra013 = {
    name: "PICANHA",
    category: "COMIDA",
  }),
  (palavra014 = {
    name: "PEIXE",
    category: "COMIDA",
  }),
  (palavra015 = {
    name: "CAMARAO",
    category: "COMIDA",
  }),
  (palavra016 = {
    name: "FILE MIGNON",
    category: "COMIDA",
  }),
  (palavra017 = {
    name: "ARROZ",
    category: "COMIDA",
  }),
  (palavra018 = {
    name: "PANQUECA",
    category: "COMIDA",
  }),
  (palavra019 = {
    name: "PAO",
    category: "COMIDA",
  }),
  (palavra020 = {
    name: "TAPIOCA",
    category: "COMIDA",
  }),
  (palavra021 = {
    name: "FEIJOADA",
    category: "COMIDA",
  }),
  (palavra022 = {
    name: "GALINHADA",
    category: "COMIDA",
  }),
  (palavra023 = {
    name: "PAMONHA",
    category: "COMIDA",
  }),
  (palavra024 = {
    name: "FRICASSE",
    category: "COMIDA",
  }),
  (palavra025 = {
    name: "LASANHA",
    category: "COMIDA",
  }),
  (palavra026 = {
    name: "BRIGADEIRO",
    category: "DOCE",
  }),
  (palavra027 = {
    name: "BANOFFE",
    category: "DOCE",
  }),
  (palavra028 = {
    name: "PUDIM",
    category: "DOCE",
  }),
  (palavra029 = {
    name: "MOUSSE",
    category: "DOCE",
  }),
  (palavra030 = {
    name: "PAVE",
    category: "DOCE",
  }),
  (palavra031 = {
    name: "BROWNIE",
    category: "DOCE",
  }),
  (palavra032 = {
    name: "BOMBOM",
    category: "DOCE",
  }),
  (palavra033 = {
    name: "GELEIA",
    category: "DOCE",
  }),
  (palavra034 = {
    name: "CADERNO",
    category: "ESCOLA",
  }),
  (palavra035 = {
    name: "LAPIS",
    category: "ESCOLA",
  }),
  (palavra036 = {
    name: "ESTOJO",
    category: "ESCOLA",
  }),
  (palavra037 = {
    name: "APONTADOR",
    category: "ESCOLA",
  }),
  (palavra038 = {
    name: "CANETA",
    category: "ESCOLA",
  }),
  (palavra039 = {
    name: "PAPEL",
    category: "ESCOLA",
  }),
  (palavra040 = {
    name: "BORRACHA",
    category: "ESCOLA",
  }),
  (palavra041 = {
    name: "VENTOINHA",
    category: "PEÇAS DE COMPUTADOR",
  }),
  (palavra042 = {
    name: "SSD",
    category: "PEÇAS DE COMPUTADOR",
  }),
  (palavra043 = {
    name: "MEMORIA RAM",
    category: "PEÇAS DE COMPUTADOR",
  }),
  (palavra044 = {
    name: "PLACA MAE",
    category: "PEÇAS DE COMPUTADOR",
  }),
  (palavra045 = {
    name: "GABINETE",
    category: "PEÇAS DE COMPUTADOR",
  }),
  (palavra046 = {
    name: "FONTE",
    category: "PEÇAS DE COMPUTADOR",
  }),
  (palavra047 = {
    name: "JAIR BOLSONARO",
    category: "PRESIDENTE",
  }),
  (palavra048 = {
    name: "LUIZ INACIO",
    category: "PRESIDENTE",
  }),
  (palavra049 = {
    name: "BARACK OBAMA",
    category: "PRESIDENTE",
  }),
  (palavra050 = {
    name: "GETULIO VARGAS",
    category: "PRESIDENTE",
  }),
  (palavra050 = {
    name: "DEODORO DA FONSECA",
    category: "PRESIDENTE",
  }),
  (palavra051 = {
    name: "EPITACIO  PESSOA",
    category: "PRESIDENTE",
  }),
  (palavra052 = {
    name: "JOHN ADAMS",
    category: "PRESIDENTE",
  }),
  (palavra053 = {
    name: "ABRAHAM LINCOLN",
    category: "PRESIDENTE",
  }),
  (palavra054 = {
    name: "DONALD TRUMP",
    category: "PRESIDENTE",
  }),
  (palavra055 = {
    name: "NESTOR KIRCHNER",
    category: "PRESIDENTE",
  }),
  (palavra056 = {
    name: "CACHORRO",
    category: "ANIMAIS",
  }),
];

createWordSecret();
function createWordSecret() {
  const indexWord = Math.floor(Math.random() * words.length);
  console.log(indexWord);

  wordSecretDrawn = words[indexWord].name;
  wordSecretCategory = words[indexWord].category;
}

putWordOnScreen();
function putWordOnScreen() {
  const category = document.getElementById("category");
  category.innerHTML = wordSecretCategory;

  const wordOnScreen = document.getElementById("secretWord");
  wordOnScreen.innerHTML = "";

  for (i = 0; i < wordSecretDrawn.length; i++) {
    //esse if faz o espaços entre as letras
    if (dynamicList[i] === undefined) {
      dynamicList[i] = "&nbsp;";
      console.log(dynamicList[i]);
      wordOnScreen.innerHTML =
        wordOnScreen.innerHTML +
        "<div class='letters' id='letters'> " +
        dynamicList[i] +
        "</div>";
    } else {
      wordOnScreen.innerHTML =
        wordOnScreen.innerHTML +
        "<div class='letters' id='letters'> " +
        dynamicList[i] +
        "</div>";
    }
  }
}

// Verificar a letra clicada
function checkChosenLetter(letters) {
  if (attempts > 0) {
    changeFontStyle("key-" + letters);
    compareLists(letters);
    putWordOnScreen();
  }
}
function changeFontStyle(key) {
  document.getElementById(key).style.background = "#C71585";
  document.getElementById(key).style.color = "#ffffff";
}

//compara as listas
function compareLists(letters) {
  const position = wordSecretDrawn.indexOf(letters);
  if (position < 0) {
    attempts--;
    loadGallowsImage();
    //verificar se ainda tem tentativas // mensagem
  } else {
    for (i = 0; i < wordSecretDrawn.length; i++) {
      if (wordSecretDrawn[i] == letters) {
        dynamicList[i] = letters;
      }
    }
  }

  let victory = true;
  for (i = 0; i < wordSecretDrawn.length; i++) {
    if (wordSecretDrawn[i] != dynamicList[i]) {
      victory = false;
    }
  }

  if (victory === true) {
    //mensagem na tela
    attempts = 0;
  }
}

// carregar imagem do boneco da forca
const loadGallowsImage = () => {
  switch (attempts) {
    case 5:
      document.getElementById("image").style.background =
        "url(../assets/forca01.png)";
      break;
    case 4:
      document.getElementById("image").style.background =
        "url(../assets/forca02.png)";
      break;
    case 3:
      document.getElementById("image").style.background =
        "url(../assets/forca03.png)";
      break;
    case 2:
      document.getElementById("image").style.background =
        "url(../assets/forca04.png)";
      break;
    case 1:
      document.getElementById("image").style.background =
        "url(../assets/forca05.png)";
      break;
    case 0:
      document.getElementById("image").style.background =
        "url(../assets/forca06.png)";
      break;
    default:
      document.getElementById("image").style.background =
        "url(../assets/forca.png)";
      break;
  }
};
