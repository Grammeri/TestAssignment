import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import About from './components/About';
import UserDetail from './components/UserDetail';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Router>
  );
}

export default App;
