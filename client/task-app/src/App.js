import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navbar"
import  TaskForm  from "./components/TaskForm";
import TaskList  from "./components/TaskList";



import "bootswatch/dist/lux/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Routes>
          <Route exact path="/" element={ <TaskList/>} />
          <Route exact path="/new-task" element={<TaskForm/>} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
