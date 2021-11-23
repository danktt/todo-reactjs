import { FaCheck, FaTrashAlt } from 'react-icons/fa';
import { GrEdit } from 'react-icons/gr'
import {
  Div,
  Li,
  Input,
  ButtonComplete,
  ButtonEdit,
  ButtonDelete,
} from "./styles";

function TodoList({ todos, setTodos, setEditTodo }) {

  const handleComplete = (todo) => { // Vai marcar como completado a task
    setTodos(
      todos.map((item) => {
        if(item.id === todo.id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
    );
  }


  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  return (
    <Div>
      {todos.map((todo) => ( //Esse é o map no qual para cada vez que eu clicar em add vai aparecer um novo input
          <Li key={todo.id}>
            <Input
              type="text"
              value={todo.title}
              onChange={(event) => event.preventDefault()}
              disabled="disabled"
            />

            <ButtonComplete onClick={() => handleComplete(todo)}> <FaCheck /> </ButtonComplete>

            <ButtonEdit onClick={() => handleEdit(todo)}><GrEdit /> </ButtonEdit>
            
            <ButtonDelete onClick={() => handleDelete(todo)} > <FaTrashAlt /> </ButtonDelete>
          </Li>
        )
      )}
   
    </Div>
  );
}

export default TodoList;
