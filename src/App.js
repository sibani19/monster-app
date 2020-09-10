import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
      
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //fetches the data from url
      .then(response => response.json()) //converts the data into json
      .then(users => this.setState({ monsters: users })) //assigning the data from json to monsters array

  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    console.log(event.target);
    const {name, value} = event.target
    this.setState({
      [name]:value
    })
    console.log(this.state);

  }

  


  render() { //creates virtual DOM
    const { monsters, searchField } = this.state; //object destructuring monsters = this.state.monsters
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))


    console.log(monsters);
    console.log(searchField);
    return (  //write jsx code inside return
      <div className="App">
        <h1>MONSTER App is running!!</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList monsters={filteredMonsters} /> 

      </div>
    )
  }
}




export default App;

