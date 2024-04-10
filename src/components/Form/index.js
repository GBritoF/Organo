import { useState } from "react"
import Button from "../Button"
import Dropdown from "../Dropdown"
import TextField from "../TextField/TextField"
import "./Form.css"

const Form = (props) => {

    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const toSaving = (e) => {
        e.preventDefault()
        props.registeredCollaborators({
            name,
            office,
            image,
            team
        })
        setName('')
        setOffice('')
        setImage('')
        setTeam('')
    }

    return(
        <section className="form">
            <form onSubmit={toSaving}>
                <h1>Preencha os dados para criar o card do colaborador.</h1>
                <TextField
                label = "Nome"
                placeholder = "Digite seu nome"
                id= 'name'
                mandatory={true}
                changed={(value) => setName(value)}
                value={name}
                />
                <TextField
                label = "Cargo"
                placeholder = "Digite seu Cargo"
                id= "cargo"
                mandatory={true}
                value={office}
                changed={value => setOffice(value)}
                />
                <TextField
                label= "Imagem"
                placeholder= "Informe o endereço da sua imagem"
                id= "image"
                mandatory={true}
                value={image}
                changed={value => setImage(value)}
                />
                <Dropdown 
                items={props.teams} 
                label={"Time"}
                changed={value => setTeam(value)}
                value={team}
                mandatory={true}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form