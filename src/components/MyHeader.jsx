import React from 'react'
import SignUpItem from './SignUpItem'
import LogInItem from './LogInItem'
import styled from "styled-components";
import Title from "antd/es/typography/Title";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #47449E;
`

const MyHeader = () => {
  return (
    <a href='/feed'>
      <Container
        style={{
            padding: "0px 50px",
        }}>
          <Container>
              <img
                  alt='logo'
                  width = {50}
                  src={"https://e7.pngegg.com/pngimages/831/983/png-clipart-computer-icons-graphics-spotify-icon-bluetooth-text-logo.png"}
              />
              <Title 
                level = {3}
                style={{color:"#B4B1FF"}}
              >
                Spoty by Mk
                </Title>
          </Container>
          <Container>
              <SignUpItem/>
              <LogInItem/>
          </Container>
      </Container>
    </a>
  )
}

export default MyHeader