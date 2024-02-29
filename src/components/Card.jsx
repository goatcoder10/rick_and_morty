import PropTypes from "prop-types";

export const Card = ({characters, search}) =>{
  const filter = characters.filter((character) => 
  character.name.toLowerCase().includes(search.toLowerCase()));
  
    return (
        <div className=" bg-zinc-800 h-full grid grid-cols-3 pt-20">
        {filter.map((character, index) => {
          return (
            <div className="bg-zinc-700 flex m-2 text-white" key={index}>
              <img className="h-[250px] "
              src={character.image}></img>
              <div>
                <h1 className="text-xl font-bold">{character.name}</h1>
                <p>{character.type}</p>
                <p>{character.species}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
}

Card.propTypes = {
    characters: PropTypes.array,
    search: PropTypes.string
}
