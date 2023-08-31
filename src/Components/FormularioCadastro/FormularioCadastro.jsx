import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import React from 'react'


function FormularioCadastro() {
    return(
        <form>
            <TextField id='nome' label='Nome:' variant='outlined' fullWidth  margin='normal'/>
            <TextField id='sobrenome' label='Sobrenome:' variant='outlined' fullWidth  margin='normal'/>
            <TextField id='cpf' label='CPF:' variant='outlined' fullWidth  margin='normal'/>
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