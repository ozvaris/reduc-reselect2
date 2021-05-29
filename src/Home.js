import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Devices from "./Devices";
import Posts from "./Posts";
import PostsByUser from "./PostsByUser";
import Counter from "./Counter";
import { receiveData, setConnection } from "./actions";

export const Button = styled.button`
  height: 25px;
  width: 150px;
  border: 2px solid #222;
  border-radius: 10px;
  font-size: 15px;
  color: #222;
  margin: 15px;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: #222;
    color: lightgray;
  }
`;

export const Card = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  box-shadow: 1px 1px 11px -1px rgba(140, 140, 140, 1);
  min-height: 350px;
  background-color: ${(props) => props.bg || "white"};
  color: ${(props) => props.color || "#222"};
  padding: 10px;
  overflow: auto;
`;

export const Container = styled.div`
  text-align: center;
  width: 100%;
  max-width: 100vw;
  margin-bottom: 48px;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexItem = styled.div`
  flex: 1;
`;

export const FlexItemLeft = styled.div`
  align-items: left;
  justify-content: left;
  text-align: left;
`;

export const Title = styled.div`
  color: firebrick;
  width: 100%;
  text-align: center;
  margin: 0px;
  padding: 10px;
  font-size: 50px;
`;

const Home = (props) => {
  useEffect(() => {
    console.log("Home useEffect");
    //props.receivePosts();
  }, []);

  const postList = () => {
    let viewPosts = null;
    if (props.usersById && Object.keys(props.usersById).length !== 0) {
      viewPosts = (
        <div>
          <h2>Devices</h2>
          <Devices />
          <h2>Posts</h2>
          <Posts />
          <h2>User 1</h2>
          <PostsByUser user={"user-1"} />
          <h2>User 2</h2>
          <PostsByUser user={"user-2"} />
        </div>
      );
    }

    return viewPosts;
  };

  console.log("Home Component render");
  return (
    <Container>
      <Title>Reselect Redux</Title>
      <FlexBox>
        <FlexItemLeft>
          <Counter />
        </FlexItemLeft>
        <FlexItemLeft>
          <Button onClick={() => props.receivePosts()}>Fetch Posts</Button>
          <Button onClick={() => props.setConnection()}>Set Connection</Button>

          {/* <Button onClick={() => console.log(props.devicesById)}>
            Log Devices
          </Button> */}
        </FlexItemLeft>
      </FlexBox>
      <FlexBox>
        <FlexItemLeft>{postList()}</FlexItemLeft>
      </FlexBox>
    </Container>
  );
};

const mapState = (state) => {
  return {
    usersById: state.usersById
    //devicesById: state.devicesById
  };
};

export function mapDispatchToProps(dispatch) {
  return {
    receivePosts: () => dispatch(receiveData()),
    setConnection: () => dispatch(setConnection())
  };
}

export default connect(mapState, mapDispatchToProps)(Home);
