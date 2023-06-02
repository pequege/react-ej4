import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormTarea from './components/FormTarea';


function App() {
  return (
    <>
      <Container className='my-5 main'>
        <h1 className='display-4 text-center'>Lista de Tareas</h1>
        <hr />
        <FormTarea></FormTarea>
      </Container>
      <footer className='text-center bg-dark text-light py-4'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
