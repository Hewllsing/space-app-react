import { useState } from "react";
import styled from "styled-components";


const InputSearch = styled.input `
    width: 45%;
    height: 56px;
    box-sizing: border-box;
    display: inline-flex;
    padding: 12px 16px;
    outline: none;
    align-items: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: #D9D9D9;
    border-radius: 10px;
    border: 2px solid var(--Degrad-com-rosa, #C98CF1);
    background: transparent url('public/icons/search.png') no-repeat 97% center;&::placeholder {
        color: #D9D9D9;
    }
`
const CampoTexto = () => {
    const [textoEstadoPadrao, setTextoEstadoPadrao] = useState('O que você procura?')
    const alterarPlaceholder = () => {
        if(textoEstadoPadrao !== '') {
            setTextoEstadoPadrao('')
        } else {
            setTextoEstadoPadrao('O que você procura?')
        }
    }

    return (<InputSearch placeholder={textoEstadoPadrao} onFocus={alterarPlaceholder} onBlur={alterarPlaceholder} />)
}


export default CampoTexto