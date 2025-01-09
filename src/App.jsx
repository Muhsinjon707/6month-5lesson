import React from 'react';
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import JsonPosts from './pages/JsonPosts';
import PokemonGo from './pages/PokemonGo';
import Weather from './pages/Weather';
import Details from './pages/Details';
import Error from './pages/Error';
import RandomUser from './pages/RandomUser';

import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';

import MainLayout from './layout/MainLayout';


function App() {
    return (
        <div>
            <Routes>
                <Route index element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                } />

                <Route path="/json-posts" element={
                    <MainLayout>
                        <JsonPosts />
                    </MainLayout>
                } />

                <Route path='/pokemon-go' element={
                    <MainLayout>
                        <PokemonGo />
                    </MainLayout>
                } />

                <Route path="/weather-forecast" element={
                    <MainLayout>
                        <Weather />
                    </MainLayout>
                } />

                <Route path="/details/:id" element={
                    <MainLayout>
                        <Details/>
                    </MainLayout>
                } />

                <Route path="/random-users" element={
                    <MainLayout>
                        <RandomUser />
                    </MainLayout>
                } />

                <Route path="/register" element={
                    <MainLayout>
                        <Register />
                    </MainLayout>
                } />

                <Route path="/login" element={
                    <MainLayout>
                        <Login />
                    </MainLayout>
                } />

                <Route path="/contact" element={
                    <MainLayout>
                        <Contact />
                    </MainLayout>
                } />

                <Route path="*" element={
                    <MainLayout>
                        <Error />
                    </MainLayout>
                } />
            </Routes>
        </div>
    );
}

export default App;