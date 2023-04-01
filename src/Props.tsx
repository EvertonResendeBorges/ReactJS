type Props = {
    nome: string,
    idade: number,
    profissao: string,
    foto: string
}

function Pessoa({ nome, idade, profissao, foto } : Props){
    return(
        <>
            <img src={foto} alt={nome} width="250" height="250"/>
            <h2> Nome: {nome} </h2>
            <p> Idade: {idade} </p>
            <p> Profissão: {profissao} </p>
        </>
    )
}

Pessoa.defaultProps = {
   foto:      'Unknow',
   nome:      'Unknow',
   idade:     'Unknow',
   
}

export default Pessoa