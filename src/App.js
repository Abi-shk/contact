import logo from './logo.svg';
import './App.css';
import details from './contacts.json'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import Profile from './components/Profile';


function App() {

  const [clicked ,setclicked]=useState(false)
   const singleView=(a)=>{
    setclicked(a)
   }
  console.log(details.contacts)
  return (
  <div className='App'>
    <Navbar/>
    {!clicked?(

      details.contacts.map((contact,i)=>(
        <div key={i} className='box' onClick={()=>singleView(contact)}>
        <div>
        <img className='img' src={contact.profile} alt="" />
        </div>
        <h1>{contact.name}</h1>
        </div>
        ))
        ):(
          <Profile data={clicked}/>

        )}
  <Footer/>
  </div>
  );
}

export default App;
