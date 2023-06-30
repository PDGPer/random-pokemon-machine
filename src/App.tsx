function App() {
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-green-200">
            <div>
                <div
                    id="quote-box"
                    style={{
                        padding: "20px",
                        minWidth: "400px",
                        minHeight: "200px",
                    }}
                    className="bg-red-400 rounded-t-lg flex items-center justify-center"
                >
                    <div className="flex items-center justify-center flex-col text-white text-xl">
                        <p id="text">"Pikachu!"</p>
                        <div className="py-2"></div>
                        <p id="author">- Pikachu</p>
                    </div>
                </div>
                <div
                    style={{
                        padding: "20px",
                        minWidth: "400px",
                        minHeight: "200px",
                    }}
                    className="bg-white rounded-b-lg"
                >
                    Botão
                </div>
            </div>
        </div>
    );
}

export default App;
