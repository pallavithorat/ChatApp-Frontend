import React from 'react'
import Left from './home/Leftpart/Left';
import Right from './home/Rightpart/Right';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className='flex h-screen'>
      <Left />
      <Right />
    </div>

    // <SignUp/>

  // <Login/>


  )
}

export default App
