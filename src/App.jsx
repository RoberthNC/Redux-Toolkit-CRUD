import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import TasksList from "./components/TasksList"
import TaskForm from "./components/TaskForm"

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <Router>
          <Routes>
            <Route path="/" exact element={<TasksList />} />
            <Route path="/create" exact element={<TaskForm />} />
            <Route path="/edit/:id" exact element={<TaskForm />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App