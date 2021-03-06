import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
        
    }

    onSearchChange = (event) => {  // this syntax makes sure the value of 'this' refers to where the function is created
        this.setState({searchfiled: event.target.value})
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length){
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f2'> RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;