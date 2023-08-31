import twitterLogo from "./svg/twitterLogo.tsx";
import { useState, useEffect } from "react";
import fetchRandomPokemon from "./fetch.ts";

function App() {
    const [pokemonName, setPokemonName] = useState<string>("...");

    const allCapsShout = (pokemonName: string): string => {
        return '"' + pokemonName.toUpperCase() + '!"';
    };

    const signedBy = (pokemonName: string): string => {
        return (
            "- " + pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
        );
    };

    const handleFetchRandomPokemon = async () => {
        const pokemonFetchReturn = await fetchRandomPokemon();
        setPokemonName(pokemonFetchReturn);
    };

    useEffect(() => {
        handleFetchRandomPokemon();
    }, []);

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-green-300">
            <div id="quote-box">
                {/* TOP SECTION - RED */}
                <div className="bg-red-400 rounded-t-lg flex items-center justify-center p-4 min-w-[400px] min-h-[180px]">
                    <div className="flex items-center justify-center flex-col text-white">
                        <p id="text" className="text-3xl">
                            {allCapsShout(pokemonName)}
                        </p>
                        <div className="py-2"></div>
                        <p id="author" className="text-xl">
                            {signedBy(pokemonName)}
                        </p>
                    </div>
                </div>
                {/* MIDDLE SECTION - BLACK */}
                <div className="bg-black relative flex items-center justify-center  p-4 min-w-[400px] min-h-[40px]">
                    <a
                        id="tweet-quote"
                        className="absolute"
                        href={`https://twitter.com/intent/tweet?text=${allCapsShout(
                            pokemonName
                        )} ${signedBy(pokemonName)}`}
                        target="_blank"
                    >
                        {twitterLogo}
                    </a>
                </div>
                {/* BOTTOM SECTION - WHITE */}
                <div className="bg-white rounded-b-lg flex items-center justify-center p-4 min-w-[400px] min-h-[180px]">
                    <button
                        onClick={() => handleFetchRandomPokemon()}
                        id="new-quote"
                        className="bg-white hover:bg-red-200 border-black border-2 text-black text-xl py-2 px-4 rounded"
                    >
                        Another quote!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
