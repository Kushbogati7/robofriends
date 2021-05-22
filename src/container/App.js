import React, {useState,useEffect} from "react";
import List from "../components/worklist";
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../ErrorBoundary';

function App () {
 
  const [robot ,setRobot] = useState([]);
  const [searchfield, setSearchfield] = useState('')

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robofriend => setRobot(robofriend))
  })

    
       
    const filteredRobots = robot.filter((robo)=> {
            return (robo.name.toLowerCase().includes(searchfield.toLowerCase()))//here includes()is comparing
        })                                                              //if the searchfield has the string == robo.name
                                                                        //if yes print that robot                     
    return (robot === 0) ? <h1>loading please wait</h1> : 
     
        (
        <div className="tc">   
           <h1 className="f1">RoboFriends</h1>
           <Searchbox searchChange = {(event)=>setSearchfield(event.target.value)}/>
           <Scroll>
            <ErrorBoundary>
              <List robopeople={filteredRobots} />
            </ErrorBoundary>  
           </Scroll>
        </div>
        ) 


}

export default App;