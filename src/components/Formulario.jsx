import { useState,useEffect } from "react";
import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/data";
import PropTypes from 'prop-types'

const InputSubmit = styled.input`
  border: 2px solid #0742daea;
  border-radius: 5px;
  font-size: 20px;
  font-family: sans-serif;
  width: 100%;
  padding: 5px;
  text-transform: uppercase;
  font-weight: 700;
  background-color: #0742daea;
  color: #fff;
  transition: all .5s;
  &:hover{
    border-color: #fff;
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 0 2px 5px 0 #0742daea;
    background-color: #052a87ea;
  }
`;

const Formulario = ({setMonedas}) => {
  const [crypto, setCrypto] = useState([])
  const {SelectMonedas,state:moneda} = useSelectMonedas("Elige tu moneda",monedas)
  const {SelectMonedas: SelectCryptomonedas,state:cryptomoneda}= useSelectMonedas("Elige tu criptomoneda",crypto)
  useEffect(() => {
    const obtenerMonedas = async () =>{
        let url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json()
        const arrayCriptos = resultado.Data.map( element =>{
            const objeto = {
                id: element.CoinInfo.Name,
                nombre: element.CoinInfo.FullName
            }
            return objeto
        })

        setCrypto(arrayCriptos)
    }
    obtenerMonedas()
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault()
    if ([moneda,cryptomoneda].includes('')) {
        alert("Todos los campos son Obligatorios")
        return
    }
    setMonedas({
      moneda: moneda,
      criptomoneda: cryptomoneda
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <SelectMonedas/>
        <SelectCryptomonedas/>
        <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

Formulario.propTypes = {
  setMonedas: PropTypes.func
}

export default Formulario