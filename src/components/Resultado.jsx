import styled from "@emotion/styled"
import PropTypes from 'prop-types'

const CardResult = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0 1px 10px 0 #3e0999;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    column-gap: 5px;
    margin-top: 20px;
    .card_i{
        width: 50%;
        height: 200px;
    }
    .card_i img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        row-gap: 5px;
        .card_i{
            width: 100%;
            height: 300px;
        }
        .card_i img {
            object-fit: contain;
        }
    }
`;

const Parrafo = styled.p`
    margin: 0;
    font-size: 20px;
    font-family: sans-serif;
    font-weight: normal;
    color: #25045e;
    span{
        font-weight: normal;
        color: #000;
    }
`;

const Resultado = ({result}) => {
  const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = result
  return (
    <CardResult>
        <div className="card_i">
            <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
        </div>
        <div className="card_p">
            <Parrafo>El precio es: <span>{PRICE}</span></Parrafo>
            <Parrafo>Precio mas alto del dia: <span>{HIGHDAY}</span></Parrafo>
            <Parrafo>Precio mas bajo del dia: <span>{LOWDAY}</span></Parrafo>
            <Parrafo>Variacion de ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Parrafo>
            <Parrafo>Ultima actualizacion: <span>{LASTUPDATE}</span></Parrafo>
        </div>
    </CardResult>
  )
}

Resultado.propTypes = {
    result: PropTypes.object
}
export default Resultado