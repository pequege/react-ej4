import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = () => {
  return (
    <ListGroup>
      {
        listaTareas.map((itemTarea, indiceTarea)=> 
          <ItemTarea itemTarea={itemTarea} key={indiceTarea} borrarTarea={borrarTarea}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTarea;
