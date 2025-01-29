import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([
    {id:1, title: '아침 챙겨먹기', completed: true},
    {id:2, title: '점심 챙겨먹기', completed: false},
    {id:3, title: '저녁 챙겨먹기', completed: false},
  ]);
  const [newTodo, setNewTodo] = useState('');

  const onChangeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault(); // SPA는 페이지가 새로고침 되는 것을 왠만해서는 막아야한다.
    const nextTodo = [...todo, {id: todo.length + 1, title: newTodo, completed: false}]
    setTodo(nextTodo);
    /* 불변성, 참조가 다를 때만 react 가 값의 변경을 인식한다. */
    /* immer 라이브러리를 사용하면 코드가 깔끔해진다. */

    // console.log('changedTODO', todo); -> 안바뀜, 비동기때문 X (batch)
  }

  useEffect(() => {
    // todo 가 바뀌었는지 감지하는 함수
    console.log('changedTODO', todo);
  }, [todo]);

  return (
    <>  {/* Fragment - 빈 괄호*/}
      <div>TODO</div>
      {todo.length === 0 ? ( // JSX 에서는 if 문을 쓸 수 없으므로 3항연산자를 쓴다.
          <>
            <div>할일을 추가해 보세요.</div>
            <form onSubmit={onSubmit}>
              <input value={newTodo} onChange={onChangeNewTodo}/>
              <button>추가</button>
            </form>
          </>
      ) : (
          <>
            {todo.map((t) => (<div key={t.id}>{t.title}</div>))}
            <form onSubmit={onSubmit}>
              <input value={newTodo} onChange={onChangeNewTodo}/>
              <button>추가</button>
            </form>
          </>
      )}
    </>
  )
}

export default App
