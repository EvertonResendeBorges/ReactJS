import Pessoa from "../../Props"
import SaysName from "../../SaysName"

function Teste() {
    let nome = 'Everton'
    let x = 5
    let y = 10

    const url = 'https://www.henrimar.com.br/wp-content/uploads/2019/01/%C3%A1rea-externa-1-1000x400.jpg'

    return(
        <>
            <h1> {25*5} </h1>
            <h1> Olá, {nome} </h1>
            <h1>Nome maísculo[{nome.toUpperCase()}]</h1>
            <h2> {x},{y} </h2>

            <img src={url} alt="Área Bonita" width={320} height = {180} />

            <SaysName nome = "Everton"/>
            <Pessoa 
                nome="Seya"
                idade={13}
                profissao="Cavaleiro"
                foto="https://upload.wikimedia.org/wikipedia/pt/7/7f/Pegasus_Seiya_v2_01.jpg"
            />

            <Pessoa 
                    nome="Shiryu"
                    idade={13}
                    profissao="Cavaleiro"
                    foto="https://hypemundo.files.wordpress.com/2013/10/shiryu.jpg"
                />

            <SaysName nome = "Ikki"/> 

            <Pessoa
            profissao="Cavaleiro"/>
        </>
    )
}

export default Teste