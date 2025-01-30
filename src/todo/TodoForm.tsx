
/* 부모의 상태(state)를 자식으로 넘겨준다. */
import {useState} from "react";

export default function TodoForm({ onSubmit: onParentSubmit}) {
  const [newTodo, setNewTodo] = useState('');

  const onChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onParentSubmit(newTodo);
  }

  return (
      <form onSubmit={onSubmit}>
        <input value={newTodo} onChange={onChangeNewTodo}/>
        <button>추가</button>
      </form>
  )
}