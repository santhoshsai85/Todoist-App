import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import { fetchAll } from './api/TaskService';

const homeLoader = () => {
  return fetchAll();
}

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    loader: homeLoader,
  },
]);


const App = () => {
  return <RouterProvider router={browserRouter} />;
}

export default App;
