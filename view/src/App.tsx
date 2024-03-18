import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom"
import Login from "./pages/login"

const routes = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/login" element={<Login/>} />
  </Route>
))

function App() {

  return (
      <RouterProvider router={routes} />
  );
}

export default App
