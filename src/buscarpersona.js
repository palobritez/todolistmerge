import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


 class SearchPeople extends React.Component {

  state = {
    people:[]

}
     componentDidMount(){
      axios.get('https://swapi.co/api/people')
      .then(res => {
        this.setState({ people: res.data.results});
      });
      console.log(`fuera del then -> ${this.state.people}`);
    }

  render(){
  console.log('render');
  const{people} = this.state;
  console.log(people);

  return(
    <List>
      {this.state.people.map(i => {
      return  (
          <ListItem>
          {i.name}
          </ListItem>
        )
      })}
    </List>

  )
  }
}
 
export default SearchPeople;
