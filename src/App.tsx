import {useEffect, useState} from 'react'
import './App.css'
import TodoForm from "./todo/TodoForm.tsx";
import TodoItem from "./todo/TodoItem.tsx";

function App() {
  const [todo, setTodo] = useState([
    {id:1, title: '아침 챙겨먹기', completed: true},
    {id:2, title: '점심 챙겨먹기', completed: false},
    {id:3, title: '저녁 챙겨먹기', completed: false},
  ]);

  const onSubmit = (newTodo) => {
    const nextTodo = [...todo, {id: todo.length + 1, title: newTodo, completed: false}]
    setTodo(nextTodo);
    /* 불변성, 참조가 다를 때만 react 가 값의 변경을 인식한다. */
    /* immer 라이브러리를 사용하면 코드가 깔끔해진다. */
    // console.log('changedTODO', todo); -> 안바뀜, 비동기때문 X (batch)
  }

  useEffect(() => {

  }, []); // 이 컴포넌트가 마운트 될 때 (처음 보이기 시작할 때) 실행됨

  useEffect(() => {

  }); // 리렌더링 될 때 마다 실행됨

  useEffect(() => {
    console.log('changedTODO', todo);
    // todo 가 바뀔 때 마다 실행됨
    // {} !== {}
  }, [todo]);

  return (
    <>  {/* Fragment - 빈 괄호*/}
      <div>TODO</div>
      {todo.length === 0 ? ( // JSX 에서는 if 문을 쓸 수 없으므로 3항연산자를 쓴다.
          <>
            <div>할일을 추가해 보세요.</div>
            <TodoForm onSubmit={onSubmit} />
            {/* 함수 호출이 아닌, 함수를 넘겨줘야함 */ }
          </>
      ) : (
          <>
            {todo.map((t, i) => (<TodoItem key={t.id} todoItem={t} setTodo={setTodo} index={i}/>))}
            <TodoForm onSubmit={onSubmit} />
          </>
      )}
    </>
  )
}

export default App
