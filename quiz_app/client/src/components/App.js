  import '../styles/App.css';

  import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

  /* import component */
  import Main from './main';
  import Quiz from './Quiz';
  import Result from './result';

  /* React Routes */
  const router = createBrowserRouter([
    {
      path :'/',
      element : <Main></Main>
    },
    {
      path :'/quiz',
      element : <Quiz></Quiz>
    },
    {
      path :'/result',
      element : <Result></Result>
    },
  ])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
