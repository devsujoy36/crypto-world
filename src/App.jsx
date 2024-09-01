import { useState } from 'react';
import './App.css'
import Contact from './Contact/Contact';
import CryptoGame from './CryptoGame/CryptoGame';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero'
import Login from './Login/Login'
import Navbar from './Navbar/Navbar'

function App() {
  const [count, setCount] = useState(false);
  // console.log(count);

  const [getStarted, setGetStarted] = useState(false);
  
  const [signup, setSignUp] = useState(false);
  
  
  
  return (
    <>
    <div>
      <Navbar count={count} setCount={setCount} ></Navbar>
      {count && <Login signup={signup} setSignUp={setSignUp}></Login>}

      <Hero getStarted={getStarted} setGetStarted={setGetStarted}></Hero>
      {getStarted && <CryptoGame></CryptoGame>}

      <Contact></Contact>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
