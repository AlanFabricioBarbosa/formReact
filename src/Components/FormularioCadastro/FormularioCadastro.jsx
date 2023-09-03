import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import React, { useState } from 'react'


function FormularioCadastro({aoEnviar}) {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState("true")
    const [novidades, setNovidades] = useState("true")

    return(
        <form onSubmit={(event)=> {
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                        setNome(event.target.value)
                    }
                }
                id='nome' 
                label='Nome:' 
                variant='outlined' 
                fullWidth  
                margin='normal'/>
            <TextField 
                value={sobrenome}
                onChange={(event) => {
                        setSobrenome(event.target.value)
                    }
                }
                id='sobrenome' 
                label='Sobrenome:' 
                variant='outlined' 
                fullWidth  
                margin='normal'/>
            <TextField
                value={cpf}
                onChange={(event) => {
                        setCpf(event.target.value)
                    }
                }
                id='cpf' 
                label='CPF:' 
                variant='outlined' 
                fullWidth  
                margin='normal'/>
            <FormControlLabel 
                label='Promoções' 
                control={<Switch checked={promocoes} onChange={(event) =>{
                    setPromocoes(event.target.checked)
                }} name='promocoes' defaultChecked={promocoes} />} 
            />
            <FormControlLabel 
                label='Novidades' 
                control={<Switch checked={novidades} onChange={(event) =>{
                    setNovidades(event.target.checked)
                }} name='novidades' defaultChecked={novidades} />} 
            />
            <Button 
                type="submit" 
                variant='contained' 
                color='primary'>
                    Cadastrar
            </Button>
        </form>
    )
}

export default  FormularioCadastro