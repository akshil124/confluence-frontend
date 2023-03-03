import './App.css';
import React from 'react';
import Login from './pages/Login';
import AddUser from './pages/AddUser';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/signup';
import Plan from './pages/Plan';
import Form from './pages/CreateForm';
import Header from './Components/Layouts/Header';
function App () {
    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path='/plan' element={<Plan />}/>
            <Route path="/" element={<Header/>}>
                <Route path='/add-user' element={<AddUser />} />
                <Route path='/user-information' element={<Form />} />
            </Route>
        </Routes>
    );
}

export default App;
