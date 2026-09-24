import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Cases } from './pages/Cases';
import { CaseDetail } from './pages/CaseDetail';
import { Funding } from './pages/Funding';
import { Timeline } from './pages/Timeline';
import { Map } from './pages/Map';
import { Domains } from './pages/Domains';
import { Compare } from './pages/Compare';
import { Sources } from './pages/Sources';
import { Methodology } from './pages/Methodology';
import './styles.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cas', element: <Cases /> },
      { path: '/cas/:slug', element: <CaseDetail /> },
      { path: '/financement', element: <Funding /> },
      { path: '/chronologie', element: <Timeline /> },
      { path: '/carte', element: <Map /> },
      { path: '/domaines', element: <Domains /> },
      { path: '/domaines/:id', element: <Domains /> },
      { path: '/comparaison', element: <Compare /> },
      { path: '/sources', element: <Sources /> },
      { path: '/methodologie', element: <Methodology /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
