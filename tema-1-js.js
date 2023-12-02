//EXERCITIU 1

/*1. Returnează un boolean dacă un număr este divizibil cu 10
Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.
Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.
În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.
Exemplu 1:
Input: 100
Output: true
Exemplu 2:
Input: 23
Output: false*/

const divizibility = (Number) => {
    if (Number % 10 === 0) {
      return "TRUE";
    } else {
      return "FALSE";
    }
  }
  
  const result = divizibility(100);
  console.log(result);
  
  //EXERCITIU 2
  
  /*2. Scrieți o funcție numită tellFortune care:
  primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
  afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
  În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).
  Exemplu 1:
  Input: numarCopii: 3, numePartener: “Emanuel”, locatieGeografica: “Italia”, locMunca: “Programator”
  Output: “Vei fi un **Programator** în **Italia**, căsătorit cu **Emanuel** și vei avea **3** copii.”
  
  const tellFortune = (n, z, y, x) => {
    tellFortune(NumarCopii, NumePartener, LocatiaGeografica, LocDeMunca));*/
  
  const LocDeMunca = "angajat retelistica"; 
  const LocatiaGeografica = "Cluj";
  const NumePartener = "Teodora";
  let NumarCopii = 0;
  
  const tellFortune = (n, z, y, x, m) => {
    //let n = NumarCopii;
    //let z = NumePartener;
    //let y = LocatiaGeografica;
    //let x = LocDeMunca;
    return " Vei fi un " + x + " in " + y + " casatorit cu " + z + " si vei avea " + n + " copii "
  }
  console.log (tellFortune (NumarCopii, NumePartener, LocatiaGeografica, LocDeMunca ));
  
  
  //Exercitiu 3
  
  /*3. Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii
  Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.
  Exemplu 1:
  Input: 1
  Output: “Luni”
  Exemplu 2:
  Input: 5
  Output: “Vineri”*/
  
  let Data = "4";
  let ziua;
  
  switch (Data) {
    case "1":
      ziua = "Luni";
      break;
    case "2":
      ziua = "Marti";
      break;
    case "3":
      ziua = "Miercuri";
      break;
    case "4":
      ziua = "Joi";
      break;
    case "5":
      ziua = "Vineri";
      break;
    case "6":
      ziua = "Sambata";
      break;
    case "7":
      ziua = "Duminica";
      break;
  }
  console.log(ziua);