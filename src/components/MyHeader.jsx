import React from 'react'
import SignUpItem from './SignUpItem'
import LogInItem from './LogInItem'
import styled from "styled-components";

const Container = styled.div`
  //display: flex;
  height: 100%;
  background-color: #47449E;
  margin: -8px;
  margin-bottom: 8px;
  padding: 6px;
  display:flex;
  justifyContent:right;
  alignItems:right;
  paddingRight:50px;
`

const MyHeader = () => {
  return (
    <Container
        style={{
            display:"flex",
            justifyContent:"right",
            alignItems:"right",
            paddingRight:"50px",
            backgroundColor:""
    }}>
      <SignUpItem/>
      <LogInItem/>
    </Container>
  )
}

export default MyHeader