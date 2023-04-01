import imagem from '../../assets/images/imagem.jpg'

function ImageGrid(){

    const foto = 'https://thumbs.dreamstime.com/b/paisagem-bonita-da-noite-60800366.jpg'
    return(
        <>
            <img src="https://thumbs.dreamstime.com/b/paisagem-bonita-da-noite-60800366.jpg" alt="imagem com link" />
            <img src={foto} alt="imagem com variavel" />
            <img src={imagem} alt="local" />
        </>
    )
}

export default ImageGrid