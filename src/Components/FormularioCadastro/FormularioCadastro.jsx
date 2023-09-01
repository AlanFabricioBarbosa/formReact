import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import React, { useState } from 'react'


function FormularioCadastro() {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")

    return(
        <form onSubmit={(event)=> {
                event.preventDefault()
                console.log(nome, sobrenome, cpf)
            }
        }>
            <TextField
                value={nome}
                onChange={(event) => {
                        let tmpNome = event.target.value
                        if(nome.length >= 3){
                            tmpNome = tmpNome.substring(0, 3)
                        }
                    
                        setNome(tmpNome)
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
                control={<Switch name='promocoes' defaultChecked />} 
            />
            <FormControlLabel 
                label='Novidades' 
                control={<Switch name='novidades' defaultChecked />} 
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