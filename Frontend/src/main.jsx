import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from '../routes/Root.jsx';
import Home from '../pages/Home/Home.jsx';
import Books, { booksLoader } from '../pages/Books/Books.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Home />} />
      <Route
        path='books'
        element={<Books />}
        loader={booksLoader}
      />
      {/* <Route path='about' element={<About/>}/>
          <Route path='user/:userId' element={<User/>}/> */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
)
