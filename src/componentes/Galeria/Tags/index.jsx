import styled from 'styled-components'
import tags from './tags.json'

const TagsEstilizadas = styled.p`
    width: auto;
    color: #D9D9D9;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
`

const ButtonTags = styled.button`
    max-width: 120px;
    padding: 10px 8px;
    gap: 10px;
    border-radius: 10px;
    border: 2px solid var(--Degrad-com-rosa, #C98CF1);
    background: rgba(217, 217, 217, 0.30);
    color: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Tags = () => {
    return <>
        <TagsEstilizadas >
            Busque por tags:
            {tags.map(tag => <ButtonTags key={tag.id}>{tag.titulo}</ButtonTags>)}
        </TagsEstilizadas>
    </>

}

export default Tags