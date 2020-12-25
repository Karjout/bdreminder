import React,{useState} from 'react';
import data from './data';
import List from './List';
import { AiFillGithub ,AiFillFacebook} from 'react-icons/all';
import './App.css';


function App() {
  const [people,setPeople]=useState(data);
  
 return  <main>
      <section className='container'>
        <h3  className='center'>{people.length} BirthDays Today</h3>
        <List people={people} />
        <button onClick={()=>setPeople([])}>Clear All</button>
      </section>
      <footer className='footer'>
        |  <h4 > <a href='https://github.com/Karjout'>Github<AiFillGithub/></a></h4>
       
        |  <h4 ><a href="https://www.facebook.com/Akarjout/">Facebook <AiFillFacebook /></a></h4>
        <h5>Made By Karjout Adeslam</h5>
      </footer>
   </main>;


}

export default App;
