import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {PostList} from './components/postList/PostList';
import {About} from './components/about/About';
import {UserDetail} from './components/userDetail/UserDetail';
import {Header} from "./components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import notFound from "./assets/404.jpg"

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<PostList/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/user/:id" element={<UserDetail/>}/>
                    <Route path="/testAssignment" element={<PostList/>}/>
                    <Route path="/404"
                           element={<div style={{textAlign: "center"}}><img src={notFound} alt="Not Found"/></div>}/>
                    <Route path="*" element={<Navigate to="/404"/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
