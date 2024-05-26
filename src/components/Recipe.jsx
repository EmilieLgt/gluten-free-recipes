import "./recipe.css"

function Recipe ({recipe}) {

return (<div className='one-recipe'>


    <img  className='img-recipe'src= {recipe.images.REGULAR.url}/>
    <div className="title-box-recipe">
    <h3 className='title-recipe'>{recipe.label}</h3></div>
    <div className="content-recipe">
    <button className='button-recipe'> <a href={recipe.url} target="blank"> Get recipe </a></button>
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