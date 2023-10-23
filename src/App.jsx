
import './App.css'
import Card from './Component/Card/Card'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
 

  return (
    <>
        <h1 className='text-3xl text-center mb-3'>Course Registration </h1>
        <hr />
        <Card></Card>
        <ToastContainer></ToastContainer>
    </>
  )
}

export default App
