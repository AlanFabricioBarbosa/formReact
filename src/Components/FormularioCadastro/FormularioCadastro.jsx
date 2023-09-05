import React, { useEffect, useState } from 'react'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntregas'
import { Step, StepLabel, Stepper, Typography } from '@mui/material'

function FormularioCadastro({aoEnviar}) {   
    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadaosColetados, setDados] = useState({})
    useEffect(()=>{
        if(etapaAtual === formularios.length -1){
            aoEnviar(dadaosColetados)
        }
    })

    const formularios =[
    <DadosUsuario aoEnviar={proximo} />, 
    <DadosPessoais aoEnviar={proximo} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant='h4'>Obrigado pelo Cadastro</Typography>
]

function coletarDados(dados) {
    setDados({...dadaosColetados, ...dados})
    proximo()
}

    function proximo() {
        setEtapaAtual(etapaAtual + 1)
    }

    return(
        <>
            <Stepper activeStep={etapaAtual}>
                <Step>
                    <StepLabel>
                        Login
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Dados Pessoal
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Entrega
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Finalização
                    </StepLabel>
                </Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    )
}

export default  FormularioCadastro