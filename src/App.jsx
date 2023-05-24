import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import TasksList from "./components/TasksList"
import TaskForm from "./components/TaskForm"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<TasksList />} />
        <Route path="/create" exact element={<TaskForm />} />
        <Route path="/edit/:id" exact element={<TaskForm />} />
      </Routes>
    </Router>
  )
}

export default App