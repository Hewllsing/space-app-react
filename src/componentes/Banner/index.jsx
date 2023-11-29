import styled from "styled-components";


const BannerEstilizado = styled.div `
    background-image: url('/public/imagens/banner.png');
    max-width: 100%;
    height: 328px;
    flex-shrink: 0;
    border-radius: 20px;
`

const TextoEstilizado = styled.h1 `
    width: 301px;
    color: #FFF;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 50px 0 50px 64px ;
`

const BannerHome = () => {
    return (
        <BannerEstilizado>
            <TextoEstilizado>A galeria mais completa de fotos do espaço!</TextoEstilizado>  
        </BannerEstilizado>
    )
}

export default BannerHome