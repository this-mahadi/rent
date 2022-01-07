import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/sign/signup";
import Signin from "./components/sign/signin";
import Nav from "./components/helper/Nav";
import Rent from "./components/Rent";
import Post from "./components/Post";
import Premium from "./components/Premium";

function App() {

    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="signin" element={<Signin/>}/>
                <Route path="/rent" element={<Rent/>}/>
                <Route path="/post" element={<Post/>}/>
                <Route path="/premium" element={<Premium/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;