import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ValidationResults from "./components/ValidationResults/ValidationResults";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <SearchBar />
        <ValidationResults />
      </div>
    </div>
  );
}

export default App;
