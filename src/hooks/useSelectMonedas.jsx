import styled from "@emotion/styled"
import { useState } from "react";

const useSelectMonedas = (label,monedas) => {

    const Label= styled.label`
        color:#fff;
        display: block;
        font-size: 30px;
        font-family:Tahoma,sans-serif;
        margin-bottom: 10px;
    `;

    const Select = styled.select`
        display:block;
        width: 100%;
        border: none;
        font-size: 25px;
        padding: 5px;
        font-family:Tahoma,sans-serif;
        border-radius: 5px;
        margin-bottom: 10px;
    `;

    const [state, setState] = useState("")

    const SelectMonedas = () => {

        return (
            <>
                <Label htmlFor="moneda">{label}</Label>
                <Select
                        value={state}
                        onChange={ e => setState(e.target.value)}
                        id="moneda">
                    <option value="">Seleccione</option>
                    {
                        monedas.map(moneda => (
                            <option key={moneda.id} value={moneda.id}>{moneda.nombre}</option>
                        ))
                    }
                </Select>
            </>
        )
    }

    return {
        SelectMonedas,
        state
    }
}

export default useSelectMonedas