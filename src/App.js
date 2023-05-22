import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostList } from './components/PostList/PostList';
import { About } from './components/about/About';
import {UserDetail}  from './components/userDetail/UserDetail';
import {Header} from "./components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user/:id" element={<UserDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
