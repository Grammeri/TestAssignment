import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {PostList} from './components/PostList/PostList';
import {About} from './components/about/About';
import {UserDetail} from './components/userDetail/UserDetail';
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
                    <Route path="401" element={<h1 style={{textAlign: "center"}}>Wellcome to my site, please use the menu</h1>}/>
                    <Route path="*" element={<Navigate to="/401" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
