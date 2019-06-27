import React, {Component} from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
  state={
    recipes: recipes,
    url:"https://www.food2fork.com/api/search?key=e0e7125952c1518d56d4adfbee43886b"
  };

  /* async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipes:jsonData.recipes
      });
    } catch(error) {
      console.log(error);
    }  
  }

  componentDidMount() {
    this.getRecipes()
  } */

  render() {
    console.log(this.state.recipes);

    return (
      <React.Fragment>
        <RecipeList recipes={this.state.recipes} />
        <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
