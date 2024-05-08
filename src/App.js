// import styled from "styled-components";
import MyHeader from "./components/MyHeader";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Feed from "./pages/Feed";
import axios from "axios";
import LogInItem from "./components/LogInItem";
import API from "./api/API";

// const Container = styled.div`
//   //display: flex;
//   //flex: 1;
//   height: 100%;
//   background-color: #47449E;
//   margin: -8px;
//   margin-bottom: 8px;
//   padding: 6px;
// `
//
// const Text = styled.p`
//   display: flex;
//   flex: 1;
//   font-size: 40px;
// `

function App() {
  return (
    <div className="App">
      <MyHeader/>
        <Feed/>
        {/*<LogIn/>*/}
        {/*<SignUp/>*/}
    </div>
  );
}

export default App;
