import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News key="1" pageSize="6" country="in" category="general"></News>
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News key="2"  pageSize="6" country="in" category="technology"></News>
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News key="3"  pageSize="6" country="in" category="business"></News>
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News key="4"  pageSize="6" country="in" category="sports"></News>
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News key="5"  pageSize="6" country="in" category="science"></News>
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News key="6"  pageSize="6" country="in" category="entertaiment"></News>
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News key="7" pageSize="6" country="in" category="general"></News>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
