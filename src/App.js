
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1400px] mx-auto'>
     <RouterProvider router={routes}>

     </RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
