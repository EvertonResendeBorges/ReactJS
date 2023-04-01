import { SetStateAction, useState } from "react"


function tUseState() {
    const [name, setName] = useState('')
    return(
        <>
             onChange = {(e: { target: { value: SetStateAction<string> } }) => setName(e.target.value)} 
        </>
    )
}

export default tUseState