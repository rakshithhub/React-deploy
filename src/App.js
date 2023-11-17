import React from 'react'; 
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Form } from './Components/Form';
import { Card } from './Components/Card';

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Form/>}/>
      <Route path='card' element={<Card/>}/>
    </Route>
  )
)

function App(){
  return (
    <>
      <RouterProvider router={router}/>
    </> 
)};

export default App;
