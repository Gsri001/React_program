import Home from "./Home";
import TodoList from"./TodoList";
import { Route, Routes } from "react-router";
function App() {
  return (
    <div > 
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="todolist" element={<TodoList/>}/>
      </Routes>
      
    </div>
  );
}export default App

 
