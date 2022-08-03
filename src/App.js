// import logo from './logo.svg';
import "./App.css";
import News2 from "./Component/News2";
import Navbar from "./Component/Navbar";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import News2 from "./Component/News2";

function App() {
  const apikey = process.env.REACT_APP_API;
  // const [state, setState] = useState(0);
  // const setprogress = (progress) => {
  //   setState({ progress: progress });
  // };
  return (
    <>
      {/* <News2 setprogress={setprogress} category="sports" /> */}
      {/* <News2 setprogress={setprogress} /> */}
      <BrowserRouter>
        <Navbar />

        {/* <News2 setprogress={setprogress} category="sports" /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News2
                // setprogress={setprogress}
                apiKey={apikey}
                key="general"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News2
                // setprogress={setprogress}
                apiKey={apikey}
                key="business"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News2
                // setprogress={setprogress}
                apiKey={apikey}
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News2
                // setprogress={setprogress}
                apiKey={apikey}
                key="general"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News2
                // setprogress={setprogress}
                apiKey={apikey}
                key="health"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News2
                // setprogress={setprogress}
                apiKey={apikey}
                key="science"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News2
                // setprogress={setprogress}
                apiKey={apikey}
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News2
                // setprogress={setprogress}
                apiKey={apikey}
                key="technology"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
