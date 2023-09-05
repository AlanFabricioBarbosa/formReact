import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import React, { useState } from 'react'


function DadosPessoais({aoEnviar, validacoes}) {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState("true")
    const [novidades, setNovidades] = useState("true")
    const[erros, setErros] = useState({cpf:{valido:true, texto:""}})

    function validarCampos(event) {
        const {name, value} = event.target
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value)
        setErros(novoEstado)
    }

    function possoEnviar(){
        for(let campo in erros){
            if(!erros[campo].valido)
            {
                return false
            }
        }
        return true
    }

    return(
        <form onSubmit={(event)=> {
                event.preventDefault();
                if(possoEnviar()){
                    aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
                }
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                        setNome(event.target.value)
                    }
                }
                id='nome'
                name="nome"
                label='Nome:'
                required
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
                name="sobrenome"
                label='Sobrenome:'
                required 
                variant='outlined' 
                fullWidth  
                margin='normal'/>
            <TextField
                value={cpf}
                onChange={(event) => {
                        setCpf(event.target.value)
                    }
                }
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id='cpf'
                name="cpf"
                label='CPF:' 
                required
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
                    Próximo
            </Button>
        </form>
    )
}

export default  DadosPessoais