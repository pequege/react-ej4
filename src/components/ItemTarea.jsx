import { ListGroup, Button } from 'react-bootstrap';

const ItemTarea = () => {
    return (
        <ListGroup.Item as="li" className='d-flex justify-content-between'>
            {itemTarea} <Button variant='danger'></Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;