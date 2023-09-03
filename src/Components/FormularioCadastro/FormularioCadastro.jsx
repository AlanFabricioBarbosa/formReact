
import React from 'react'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntregas'


function FormularioCadastro({aoEnviar, validarCPF}) {   
    return(
        <>
            <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
            <DadosUsuario/>
            <DadosEntrega/>
        </>
    )
}

export default  FormularioCadastro