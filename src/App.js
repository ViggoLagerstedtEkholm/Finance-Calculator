import SimpleInterestCalculator from "./Components/SimpleInterestCalculator";
import Home from "./Components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/SimpleInterestCalculator" element={<SimpleInterestCalculator/>}/>
          </Routes>
        </BrowserRouter>
    </Container>
  );
}

export default App;
