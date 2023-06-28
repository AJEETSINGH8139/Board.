import Authpage from "./Authpage";
import Home from "./Home";
import Registration from "./components/Registration";
import SignIn from "./components/SignIn";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthorizeUser, ProtectRoute } from './middleware/auth'
import PageNotFound from "./components/PageNotFound";


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/signIn',
    element: <SignIn />
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/home',
    element: <AuthorizeUser><Home /></AuthorizeUser>
  },
  {
    path: '*',
    element: <PageNotFound />
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
