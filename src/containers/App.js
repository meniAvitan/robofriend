import React ,{ useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';



function App(){
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchField: ''
    //     }
    // } 
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(Response=> Response.json())
    //         .then(users => this.setState({robots: users}));
      
    // }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response=> Response.json())
            .then(users => setRobots( users));
    },[])
      

   const onSearchChange = (event) =>{
    setSearchField( event.target.value )
   }

   
       
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        
     return !robots.length ?
       <h1 className='tc pv7' >loding...</h1> :
        (
            <div  className ="tc">
                <h1 className ="f1">friends</h1>
                <SearchBox searchChange = {onSearchChange} /> 
                <Scroll> 
                    <ErrorBoundry>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                        <CardList robots = {filterRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
     } 
        
       
    
    


export default App;