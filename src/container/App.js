import React, {Component} from "react";
import List from "../components/worklist";
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../ErrorBoundary';

class App extends Component{
    constructor() {
    super()
    this.state = {
        robot : [],
        searchfield : ""
    }
    console.log("constructor")
}

 componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(nepal => this.setState({robot : nepal}))
       console.log("componentDidMount")
   }

   

    onSearchChange = (event) => { // event is non-other than "input" of "searchbox".
    this.setState({searchfield: event.target.value})//setState updates the state.In this case setState is updating,
                                                 //the searchfield with whatever we type or what event value is.
        
    }

    render(){
        const {robot , searchfield} = this.state; //destructuring.....
        const filteredRobots = robot.filter((robo)=> {
            return (robo.name.toLowerCase().includes(searchfield.toLowerCase()))//here includes()is comparing
        })                                                              //if the searchfield has the string == robo.name
        console.log("render")                                           //if yes print that robot                     
        return(
        <div className="tc">   
           <h1 className="f1">RoboFriends</h1>
           <Searchbox searchChange = {this.onSearchChange}/>
           <Scroll>
            <ErrorBoundary>
              <List robopeople={filteredRobots} />
            </ErrorBoundary>  
           </Scroll>
        </div>
            ) 
    } 
}

export default App;