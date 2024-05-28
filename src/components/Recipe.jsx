/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./recipe.css"

function Recipe ({recipe}) {



return (<div className='one-recipe'>
 <a href={recipe.url} target="blank"> <div className="img-hover-recipe"><img className="hover-text-svg" src="../../public/get-recipe.svg"/><img className="hover-img-svg" src="../../public/external-link-svgrepo-com.svg"/></div> </a> 

    <img  className='img-recipe' src= {recipe.images.REGULAR.url}/>  
    
    <div className="title-box-recipe">
    <h3 className='title-recipe'>{recipe.label}</h3></div>
    <div className="content-recipe">
    <div className="tags-recipe"><div className="tag-racipe">#{recipe.mealType}</div> <div className="tag-racipe">#{recipe.dishType}</div></div>

    <ul className="ingredients-list-recipe">
        {recipe.ingredientLines && recipe.ingredientLines.map((ingredient) => (
        <li className='one-ingredient-recipe'> {ingredient}</li>
      ))}
</ul>
        

    </div>
    </div>
)
}

export default Recipe