import { useState } from "react";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>タスク追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク：0</div>
    </>
  );
}
