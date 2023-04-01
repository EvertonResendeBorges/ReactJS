type Props = {
  nome: string
}

function SaysName({nome} : Props){
    return(
       <>
         <p> Oi, {nome}! </p>
       </>
    )
}

export default SaysName