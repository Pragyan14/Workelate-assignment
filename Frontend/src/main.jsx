import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Outlet } from "react-router-dom";
import Root from '../routes/Root.jsx';
import Home from '../pages/Home/Home.jsx';
import Books, { booksLoader } from '../pages/Books/Books.jsx';
import Login from '../pages/Login/Login.jsx';
import Profile from '../pages/Profile/Profile.jsx';
import Logout from '../pages/Logout/Logout.jsx';

function ProtectedRoute() {
  const isLoggedIn = !!localStorage.getItem('accessToken');
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='books'
        element={<Books />}
        loader={booksLoader}
      />
      <Route element={<ProtectedRoute />}>
        <Route path="profile" element={<Profile />} />
        <Route path="logout" element={<Logout />} />
      </Route>
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
