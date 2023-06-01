/**
 * @author Anthony Scheidler
 * Declare all the routes in this component
 * And link a route to a page component (pages folder)
 */

import { Route, Routes } from "react-router-dom"
import Home from "./pages/index"
import Admin from "./pages/admin"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App;
