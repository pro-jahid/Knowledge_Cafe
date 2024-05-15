import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Header from "./component/Header/Header";

function App() {
  return (
    <>
      <div className="App">
        <div className="container mx-auto">
          <Header></Header>
          <Blogs></Blogs>
        </div>
      </div>
    </>
  );
}

export default App;
