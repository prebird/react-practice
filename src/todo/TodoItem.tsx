export default function TodoItem({todoItem, index, setTodo}) {

  const onChange = (e) => {
    setTodo((prevTodo) => {
      const nextTodo = [...prevTodo];
      nextTodo[index] = {...nextTodo[index]};
      nextTodo[index].completed = e.target.check;
      return nextTodo;
    }) /* setTodo 를 넘겨주기 */
    /*
      1. 이전 상태를 콜백으로 받을 수 있다.
      2. 불변성 유지를 위해 새 배열을 만들어서 넘겨주어야한다. (객체도 새걸로 바꿔서) -> immer 로 간걸하게 가능
     */
  }

  return (
      <div><input type="checkbox" checked={todoItem.onChanged} onChange={onChange} /> {todoItem.title}</div>
  )
}