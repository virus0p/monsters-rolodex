import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

 class App extends Component{
   constructor(){
        super();
        this.state = {
           monsters : [],
           searchField : ''
        };
   }
  componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then((response) => response.json())
     .then((user) => this.setState(() => {
       return {monsters : user}
        }
      )
     );
  }

onSearchChange = (event)=>{
   // console.log(event.target .value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() =>{
       return {searchField};
    });
};
   render(){
     const {monstes,searchField} =this.state;
     const {onSearchChange} = this;
     const filteredMonster = this.state.monsters.filter((monster) => {
         return monster.name.toLowerCase().includes(searchField);
     });
    return (
      <div className="App">
         <h1 className='app-title'>Monster Rolodex</h1>
         <SearchBox 
             className = {'monsters-search-box'}
             onChangehandler = {onSearchChange}
             placeholder = 'Search-monster'
         />
        <CardList monsters = {filteredMonster}/>
      </div>
    );
   }
 
}

export default App;
