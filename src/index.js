import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import House from './components/House/House';
import Error404 from './components/Error404/Error404';
import Layout from './components/Layout/Layout';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  { path: '/', element:<Layout><Home/></Layout>, errorElement:<Layout><Error404/></Layout>},
  { path: '/about', element:<Layout><About/></Layout>},
  { path: '/house-detail/:id/', element:<Layout><House/></Layout>},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
