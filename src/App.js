import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/400.css'

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' align='center' component='h1'>Formulário de cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm}/>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App
