import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useState } from "react";

const FormTarea = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTareas([...tareas, tarea]);
        //limpiar formulario
        setTarea('');
    }

    return (
        <>
            <Form>
                <Form.Group className='mb-3 d-flex' controlId='tarea'>
                    <Form.Control type='text' placeholder='Ingrese una tarea' />
                    <Button variant='primary'>Agregar</Button>
                </Form.Group>
            </Form>
            <ListaTarea></ListaTarea>
        </>
    );
};

export default FormTarea;