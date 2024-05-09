import MyHeader from "./components/MyHeader";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Feed from "./pages/Feed";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Music from "./pages/Music";
import React, { createContext, useState } from "react";

const ContextProvider = createContext(null)

export const useContext = () => {
    return React.useContext(ContextProvider)
}

function App() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <ContextProvider.Provider value={{
            username,
            setUsername,
            password,
            setPassword
        }}>
            <div style={{ margin: "-8px" }}>
                <MyHeader/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SignUp/>} exact={false}/>
                        <Route path="/signup" element={<SignUp/>} exact={false}/>
                        <Route path="/login" element={<LogIn/>} exact={false}/>
                        <Route path="/feed" element={<Feed/>} exact={false}/>
                        <Route path="/track/:id" element={<Music/>} exact={false}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </ContextProvider.Provider>
    )
}

export default App;
