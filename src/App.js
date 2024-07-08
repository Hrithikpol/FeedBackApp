import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./FeedbackContext";
const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList />
                  <AboutIconLink />
                </>
              }
            />

            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
