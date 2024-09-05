import { useState } from "react";
import "./App.css";
import { Character, getPirates } from "./data/getPirates";
import SearchField from "./components/SearchField";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleGet = async () => {
    try {
      const data: Character[] = await getPirates();
      console.log("Data from API: ", data);
      setCharacters(data);
      setMessage("");
    } catch (error) {
      const e: Error = error as Error;
      console.log("Api failed with error: ", e.message);
      setMessage("Something went wrong. Please try again later. Arrr");
    }
  };

  const filteredCharacters = characters.filter((c) =>
    c.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <>
      <div className="app">
        <header className="pirate-header">
          <h1>Fullstack Pirates</h1>
        </header>
        <main>
          <button className="fetch-btn" onClick={handleGet}>
            Arr mateys
          </button>
          <SearchField searchTerm={searchTerm} onSearch={setSearchTerm} />
          {message && <p>{message}</p>}

          <div className="pirate-crew">
            {filteredCharacters.map((c: Character) => (
              <div key={c._id} className="pirate-card">
                <img src={c.imageUrl} alt="bild" />
                <div className="pirate-card-content">
                  <h2>{c.name}</h2>
                  <p className="movie-titles">
                    {c.films.map((film, index) => (
                      <span key={index}>{film}</span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
