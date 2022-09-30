import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Experience from "./components/Experience";
import Notes from "./components/Notes";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  // <ChakraProvider>
    <React.StrictMode>
    <Router>
    <Routes>
          <Route path="/notes" element={<Notes />}/>
          <Route path="/experience" element={<Experience />}/>
          <Route path="/" element={<App />}/>
          
        </Routes>
        </Router>
    </React.StrictMode>
  // </ChakraProvider>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
