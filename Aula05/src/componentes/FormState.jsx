import './FirstForm'
import { useState } from 'react'

// Aqui utilizaremos useState para armanezar o valor dos inputs. Os eventos para formulários será o onChange e o onSubmit

export default function FormState(){

    const[name,setName] = useState('')
    const[idade,setIdade] = useState('')
    const[bio,setBio] = useState('')
    const[email,setEmail] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleIdade = (e) => {
        setIdade(e.target.value)
    }
    const handleBio = (e) => {
        setBio(e.target.value)
    }
    // Essa constante chamada handleEmail, aciona a função (e) que ira atualizar o valor do email a partir do setEmail com os valores de e.target.value, nesse caso, o "e.target.value" pega o valor digitado
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, idade, email, bio);

        //dessa forma. para resetar o formulário acionamos os set dos states com valores vazios

        setName("");
        setIdade("");
        setEmail("");
        setBio("");

    }

    return(
        <div>

            <h2>Formulário com useState e onChange</h2>

            {/* Evento onSubmit será disparado quando o formulário for enviado. Aqui, teremos que parar o envio para não
            perder os dados. Utilizaremos o objeto de evento e com o seu atributo prevant.default */}

            {/*<form> */}

             <form onSubmit={handleSubmit}>

                <div>

                    <label>
                        <span>Nome:</span>
                        {/* comentar em sala o atributo value */}
                        <input type="text" name="nome" onChange={handleName} value={name} placeholder='Digite seu nome:' />
                    </label>

                </div>

                <div>

                    <label>
                        <span>Idade:</span>
                        <input type="number" name="idade" onChange={handleIdade} value={idade} placeholder='Digite sua idade:' />
                    </label>
                    <label>
                        <span>Email:</span>
                        <input type="text" name="email" onChange={handleEmail} value={email} placeholder='Digite sua idade:' />
                    </label>

                    <label>

                        <span>Descrição:</span>
                        <textarea onChange={handleBio} value={bio}>Faça sua descrição...</textarea>
                        
                    </label>

                    <input type="submit" value='Enviar' />

                </div>
            </form>

            <p>O seu nome é: {name}</p>
            <p>Sua idade é: {idade}</p>
            <p>Seu Email: {email}</p>
            <p>Sua descrição: {bio}</p>

        </div>

    )
}