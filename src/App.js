import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {
  const APP_ID = "7e6118f6";
  const APP_KEY = "cfb2a9b86a1b1541626ed9b928972a9a";
  
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('pizza')

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data);
  }

  useEffect(() => {
    getRecipes()
  }, [query]);

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <h1 className="header">Recipe App</h1>
      <form onSubmit={onSubmit} className="search-form" name='input'>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          key={recipe.recipe.label}
          />
      ))}
      </div>
    </div>
  )
}

export default App;
