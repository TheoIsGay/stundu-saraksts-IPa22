import Diena from "./Diena";

function App() {
  const tresdienasStundas= [
    "Datorsistēmas un Datortīkli",
    "Datorsistēmas un Datortīkli",
    "Sistēmu programmēšana",
    "Sistēmu programmēšana"
];
const ceturtdienasStundas= [
    "Sistēmu programmēšana",
    "Matemātika",
    "Latviešu valoda un literatūra",
    "Valodas, kultūras izpratne un izpausmes A"
];
const piektdienasStundas= [
    "Angļu valoda",
    "Sociālās zinības un vēsture"
    
];


  return ( 
    <>
  <h1>
    Stundu saraksts
    </h1>

    <Diena nosaukums="pirmdiena" stundas={tresdienasStundas}/>
    <Diena nosaukums="otrdiena" stundas={tresdienasStundas}/>
    <Diena nosaukums="tresdiena" stundas={tresdienasStundas}/>
    <Diena nosaukums="ceturtdiena" stundas={tresdienasStundas}/>
    <Diena nosaukums="piektdiena" stundas={tresdienasStundas}/>
    
    </>
    );
}

export default App;

//Katra faila drikst but tikai 1 funkcija