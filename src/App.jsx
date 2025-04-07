
import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries'

const countriesPromise = fetch('https://restcountries.com/v3.1/all')
.then(res => res.json());

function App() {
 

  return (
    <>
    <Suspense fallback={<p>Rules of Heaven</p>}>

    <Countries  countriesPromise ={countriesPromise}></Countries>
    </Suspense>
    
      
      
    </>
  )
}

export default App
