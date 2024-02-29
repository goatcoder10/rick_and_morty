import { useEffect } from "react";
import { useState } from "react";
import {Card} from "./components/Card.jsx"


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetching = async() => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
      const data = await response.json();
      setCharacters(data.results);
    }
    fetching();
  }, [page])
  return (
    <div>
      <div className="h-[500px] flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold">RICK AND MORTY</h1>
        <div className="mt-6">
          <input onChange={(e)=> {
            setSearch(e.target.value);
          }}
          className="border-2 w-[400px] p-2" placeholder="search character"></input>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-1/2 flex justify-between">
          <button onClick={() => {
            if(page > 1) {
              setPage(page - 1);
            }else {
              setPage(1);
            }
          }}
          className="bg-yellow-500 p-2">back</button>
          <button onClick={() => {
            setPage(page + 1);
          }}
          className="bg-yellow-500 p-2">next</button>
        </div>
      </div>
      <Card characters={characters} search={search}></Card>
    </div>
  )
}

export default App;