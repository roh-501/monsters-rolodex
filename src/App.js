import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchFileld: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.currentTarget.value.toLowerCase()})
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={searchField ? filteredMonsters : monsters} />
      </div>
    );
  }
}

export default App;
