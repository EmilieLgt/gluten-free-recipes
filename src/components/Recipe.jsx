/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./recipe.css";

function Recipe({ recipe }) {
  const [showFullContent, setShowFullContent] = useState(false);

  // define a caracters limit for a card (to show more if the card is too long, allow the website to display cards with same height)
  const contentLimit = 50;
  const content = recipe.ingredientLines && recipe.ingredientLines.join(", ");

  // determine if content is longer that the limit
  const isContentLong = content.length > contentLimit;

  // display the whole content of the card if its shorter than the caracters limit, and button show more if its too long
  // const displayContent = showFullContent ? content : `${content.slice(0, contentLimit)}...`;

  return (
    <div className="one-recipe">

      <a href={recipe.url} target="blank">
        <div className="img-hover-recipe">
          <img className="hover-text-svg" src="../.../../get-recipe.svg" />
          <img
            className="hover-img-svg"
            src="../../../external-link-svgrepo-com.svg"
          />
        </div>
      </a>
      <img className="img-recipe" src={recipe.images.REGULAR.url} />

      <div className="title-box-recipe">
        <h3 className="title-recipe">{recipe.label}</h3>
      </div>

      <div className="content-recipe">
        <div className="tags-recipe">
          <div className="tag-racipe">#{recipe.mealType}</div>{" "}
          <div className="tag-racipe">#{recipe.dishType}</div>
        </div>

        <ul className="ingredients-list-recipe">
        {showFullContent ? (
            // Affichez le contenu complet si showFullContent est true
            recipe.ingredientLines && recipe.ingredientLines.map((ingredient, index) => (
              <li className="one-ingredient-recipe" key={index}>{ingredient}</li>
            ))
          ) : (
            // Affichez le contenu tronqué s'il est trop long
            <li className="one-ingredient-recipe">{content.slice(0, contentLimit)}...</li>
          )}
        </ul>
        {/* Affichez le bouton "Show more" uniquement si le contenu est trop long */}
        {isContentLong && (
          <button  className="show-more-button" onClick={() => setShowFullContent(!showFullContent)}>
            {showFullContent ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Recipe;
