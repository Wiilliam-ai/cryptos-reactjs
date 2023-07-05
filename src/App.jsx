import { useState,useEffect } from "react"
import styled from "@emotion/styled"
import ImagenCrypto from './img/imagen-criptos.png'
import Formulario from "./components/Formulario"
import Resultado from "./components/Resultado"
import Spinner from "./components/Spinner"

const Contenedor = styled.div`
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 800px;
  width: 80%;
  display: block;
  margin: 100px auto 0 auto;
`

const Heading = styled.h1`
  font-family: sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after{
    content: "";
    width: 120px;
    height: 5px;
    border-radius: 5px;
    background-color: #2c27c7;
    display: block;
    margin: 10px auto;
  }
`;

const App = () => {
  const [monedas,setMonedas] = useState({})
  const [result,setResult] = useState({})
  const [barra,setBarra] = useState(false)
  const [cargando,setCargando] = useState(false)
  useEffect(() => {
    if (Object.keys(monedas).length>0) {
      const cotizarCripto = async ()=>{
        setCargando(true)
        setResult({})
        const {moneda,criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResult(resultado.DISPLAY[criptomoneda][moneda])
        setCargando(false)
        setBarra(true)
      }
      cotizarCripto()
    }
  }, [monedas])
  
  return (
    <Contenedor>
      <Imagen src={ImagenCrypto} alt="Imagen Criptomonedas" />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {
          !barra?'': cargando ? <Spinner/> : <Resultado result={result} />
        }
      </div>
    </Contenedor>
  )
}

export default App