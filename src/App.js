import './App.css';
import React from 'react';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/signup';
import Plan from './Components/PricingPlan/Plan';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './Components/Layouts/Header';
import Dashboard from './Components/Dashboard';

const client = new ApolloClient({
    uri: 'http://localhost:3000/dev/graphql',
    cache: new InMemoryCache()
});
function App () {
    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path='/' element={<Header/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path="plan" element={<Plan />}/>
                    </Route>
                </Routes>
            </ApolloProvider>
        </BrowserRouter>
    );
}

export default App;
