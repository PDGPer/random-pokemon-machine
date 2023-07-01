import twitterLogo from "./svg/twitterLogo.tsx";
import { useState, useEffect, SetStateAction, Dispatch } from "react";

const fetchRandomPokemon = (
    setQuoteFn: Dispatch<SetStateAction<string>>,
    setAuthorFn: Dispatch<SetStateAction<string>>
) =>
    fetch(
        `https://pokeapi.co/api/v2/pokemon/${
            Math.floor(Math.random() * 999) + 1
        }`
    )
        .then((response) => response.json())
        .then((data) => {
            setQuoteFn(data.name);
            setAuthorFn(data.name);
        })
        .catch((error) => {
            console.error(error);
            setQuoteFn("pikachu");
            setAuthorFn("pikachu");
        });

function App() {
    const [quote, setQuote] = useState<string>("...");
    const [author, setAuthor] = useState<string>("...");
    const [toggle, setToggle] = useState<boolean>(true);

    useEffect(() => {
        fetchRandomPokemon(setQuote, setAuthor);
    }, [toggle]);

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-green-300">
            <div id="quote-box">
                {/* TOP SECTION - RED */}
                <div
                    style={{
                        padding: "20px",
                        minWidth: "400px",
                        minHeight: "180px",
                    }}
                    className="bg-red-400 rounded-t-lg flex items-center justify-center"
                >
                    <div className="flex items-center justify-center flex-col text-white">
                        <p id="text" className="text-3xl">
                            "{quote.toUpperCase()}!"
                        </p>
                        <div className="py-2"></div>
                        <p id="author" className="text-xl">
                            - {author.charAt(0).toUpperCase() + author.slice(1)}
                        </p>
                    </div>
                </div>
                {/* MIDDLE SECTION - BLACK */}
                <div
                    style={{
                        padding: "20px",
                        minWidth: "400px",
                        minHeight: "40px",
                    }}
                    className="bg-black relative flex items-center justify-center"
                >
                    <a
                        id="tweet-quote"
                        className="absolute"
                        href={`https://twitter.com/intent/tweet?text=${quote}`}
                        target="_blank"
                    >
                        {twitterLogo}
                    </a>
                </div>
                {/* BOTTOM SECTION - WHITE */}
                <div
                    style={{
                        padding: "20px",
                        minWidth: "400px",
                        minHeight: "180px",
                    }}
                    className="bg-white rounded-b-lg flex items-center justify-center"
                >
                    <button
                        onClick={() => setToggle(!toggle)}
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
