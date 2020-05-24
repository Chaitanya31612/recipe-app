import React from 'react';
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => (
    <div className={style.recipe}>
        <h1>{title}</h1>
        <p>CALORIES~{calories}</p>
        <ul type="square">
        {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
        ))}
        </ul>
        <img src={image} alt="" />
    </div>
)

export default Recipe;