import styled from "styled-components";
import MyHeader from "./components/MyHeader";

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: red;
  margin: -8px;
`

const Text = styled.p`
  display: flex;
  flex: 1;
  font-size: 40px;
`

function App() {
  return (
    <div className="App">
    <Container>
      <Text>
        My app
      </Text>
    </Container>
    <MyHeader/>
    </div>
  );
}

export default App;
