type Props = {
    image : string
}

function PropsImage({image}:Props) {
    return(
        <>
            <img src={image} alt="imagem" />
        </>
    )
}

export default PropsImage