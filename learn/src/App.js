import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Counter from './features/counter/Counter'
// import Navbar from "./components/Navbar";
import Create from './pages/Create';
import Notes from './pages/Notes';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/" element={<Notes />}/>
            <Route path="/create" element={<Create />} />
          </Route>
          </Routes>
          </BrowserRouter> 
          {/* <Counter /> */}
    </div>
  //   <BrowserRouter>
  //   <Routes>
  //     <Route>
  //     <Route exact path="/">
  //       <Notes />
  //     </Route>
  //     <Route path="/create">
  //       <Create />
  //     </Route>
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
  );
}

export default App;
