import './App.css';
import React from 'react';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/signup';
import Plan from './Components/PricingPlan/Plan';
// import KanbanBoard from './Components/KanbanBoard/index';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

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
                    <Route path="/plan" element={<Plan />}/>
                </Routes>
            </ApolloProvider>
        </BrowserRouter>
    );
}

export default App;
