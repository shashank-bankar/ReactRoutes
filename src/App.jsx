import { useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    </>
  )
}

export default App



// import { useState } from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Header from './Components/Header/Header'
// import Footer from './Components/Footer/Footer'
// import Home from './Components/Home/Home'
// import './App.css'
// import About from './Components/About/About'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <BrowserRouter>
//      <Header />
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>

//       </Routes>
//       <Footer />
//      </BrowserRouter>
//     </>
//   )
// }

// export default App
