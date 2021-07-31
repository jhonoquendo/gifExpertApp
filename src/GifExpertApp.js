import React, {useState} from 'react';

const GifExpertApp = () => {


    const [categories, setCategories] = useState(["One Punch", "Samurai X", "Dragon Ball"]);

    const handleAdd = () => {
        setCategories([...categories, "Lobo"]);
    }

    return (
      <>
      <h2>GifExpertApp</h2>
      <hr/>

      <button onClick={handleAdd}>Agregar</button>

      <ol>
          {categories.map(categoria => {
              return <li key={categoria}>{categoria}</li>
          })}
      </ol>
      </>
    )
  }

  export default GifExpertApp;