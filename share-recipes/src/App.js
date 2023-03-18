
import './App.css';
import { Menu } from '@headlessui/react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import UserLayout from './layout/UserLayout';
import NotFound from './pages/error/NotFound';
import SignUp from './pages/auth/SignUp';
import Start from './pages/Start';
import Categories from './pages/Categories';
import ChefDetail from './pages/ChefDetail';
import Trending from './pages/Trending';
import ProtectedLayout from './layout/Protected/ProtectedLayout';
import MyRecipes from './pages/protected/MyRecipes';


const router = createBrowserRouter([
  {
    path:'/',
    element:(<Start/>)
  },
  
  {
    path:'home',
    element:(<UserLayout/>),
    children:[
      {
        path:"",
        element:(<Home/>)
       
      },
      {
        path:"categories",
        element:(<Categories/>)
      },
      {
        path:"trending",
        element:(<Trending/>)
      },
      {
        path:"chef/:id",
        element:(<ChefDetail/>)
      }
    ]
  },
 
  {
    path:'dashboard',
    element:(<ProtectedLayout/>),
    children:[
      {
        path:'myrecipes',
        element:(<MyRecipes/>)
      }
    ]
  },
  
  {
    path:'/login',
    element:(<Login/>)
  },
  {
    path:'/signup',
    element:(<SignUp/>)
  },
  {
    path:'*',
    element:(<NotFound/>)
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
