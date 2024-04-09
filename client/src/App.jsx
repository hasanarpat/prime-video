import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './routes/layout/Layout';
import Home from './routes/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // {
      //   path: '/list',
      //   element: <ListPage />,
      // },
      // {
      //   path: '/:id',
      //   element: <SinglePage />,
      // },
      // {
      //   path: '/profile',
      //   element: <ProfilePage />,
      // },
      // {
      //   path: '/login',
      //   element: <Login />,
      // },
      // {
      //   path: '/register',
      //   element: <Register />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
