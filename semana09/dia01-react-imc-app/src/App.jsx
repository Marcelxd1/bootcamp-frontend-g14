import { useState } from 'react'
import './App.css'

function App() {
  const [peso, setPeso] = useState(67)
  const [altura, setAltura] = useState(164)

  const handleChangePeso = (event) =>{
    setPeso(event.target.value)
  }

  const handleChangeAltura = (event) =>{
    setAltura(event.target.value)
  }

  return (
    <>

      <section className='w-96 mx-auto my-5 rounded-lg bg-sky-600 '>

        <h1 className='text-3xl  text-white font-bold p-3'>IMC APPs</h1>

        <div className='bg-sky-200 p-5'>

          <p className='font-bold'>Peso: {peso} Kg</p>
          <input type="range" name="peso" className='w-full' onChange={handleChangePeso} min={20} max={120}/>

          <p className='font-bold'>Altura: {altura} cm</p>
          <input type="range" name="altura" className='w-full' onChange={handleChangeAltura} min={100} max={210}/>

          <p className='text-2xl font-bold bg-orange-200 text-center p-4 mt-4'>IMC es 99</p>
        </div>

      </section>
    </>
  )
}

export default App
