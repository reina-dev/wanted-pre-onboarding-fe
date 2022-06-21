import styled from 'styled-components';

const LoginInput = styled.input`
  display: flex;
  width: 258px;
  height: 36px;
  background-color: #fafafa;
  margin: 2px;
  padding: 9px 0 7px 8px;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: #cccccc;
`;

const LoginErrorInput = styled.input`
  display: flex;
  width: 258px;
  height: 36px;
  background-color: #fdeded;
  margin: 2px;
  padding: 9px 0 7px 8px;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: #f34949;
`;

const PasswordInput = styled.input`
  display: flex;
  width: 258px;
  height: 36px;
  background-color: #fafafa;
  margin: 2px;
  padding: 9px 0 7px 8px;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: #cccccc;
`;

const PasswordErrorInput = styled.input`
  display: flex;
  width: 258px;
  height: 36px;
  background-color: #fdeded;
  margin: 2px;
  padding: 9px 0 7px 8px;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: #f34949;
`;

const LoginButton = styled.button`
  width: 268px;
  height: 30px;
  padding: 5px 9px;
  font-weight: 600;
  color: white;
  background-color: #0095f6;
  border-radius: 5px;
`;

const LoginDisabledButton = styled.button`
  width: 268px;
  height: 30px;
  padding: 5px 9px;
  font-weight: 600;
  color: #5a5a5a;
  background-color: #9c9c9c;
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  align-items: center;
  justify-content: center;
  margin: 2px;
  padding: 5px;
  color: #c03a3a;
  font-size: 12px;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-wrap: column;
  flex-direction: column;
  width: 350px;
  height: 396px;
  margin: 0px 0px 10px;
  padding: 10px 0px;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: column;
  width: 100%;
  height: 100vh;
  background-color: #2222;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: stretch;
  }
`;

const Title = styled.h1`
  display: flex;
  font-weight: 800;
  font-size: 3em;
  margin: 2px 2px 40px 2px;
  padding: 5px;
`;

const HeaderNav = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0px;
  background-color: #fff;
  box-shadow: 0px 2px #d3d3d3;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: space-between;
  } ;
`;

const SearchBar = styled.input`
  width: 200px;
  height: 36px;
  background-color: #cccccc;
  color: #929292;
  margin: 2px;
  padding: 9px 0 7px 8px;
  margin: 5px;
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const IconWrapper = styled.div`
  margin: 5px 20px 2px 20px;
  display: flex;
  flex-direction: row;
`;

const LogoutButton = styled.button`
  background-color: white;
  :hover {
    background-color: #dfdfdf;
  }
  border-radius: 5px;
  margin: 0px 10px 0px 10px;
  display: flex;
  height: 36px;
  font-weight: 700;
  font-size: 25px;
`;

const FeedHeader = styled.div`
  display: flex;
  padding: 5px;
  display: flex;
  width: 500px;
  height: 60px;
  background-color: white;
  align-items: center;
  box-shadow: 0px 1px #d3d3d3;

  @media (max-width: 768px) {
    width: 100%;
  } ;
`;

const FeedName = styled.p`
  width: 500px;
  background-color: white;
  display: flex;
  padding: 0px 5px 5px 5px;
  font-size: 12px;
  font-weight: 700;
`;

const FeedImage = styled.img`
  display: flex;
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const FeedFooter = styled.div`
  display: flex;
  padding: 5px;
  display: flex;
  width: 500px;
  height: 60px;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px #d3d3d3;

  @media (max-width: 768px) {
    width: 100%;
  } ;
`;
export {
  LoginInput,
  LoginErrorInput,
  PasswordInput,
  PasswordErrorInput,
  LoginButton,
  LoginDisabledButton,
  ErrorMessage,
  CenterContainer,
  Background,
  Title,
  HeaderNav,
  SearchBar,
  LogoutButton,
  IconWrapper,
  FeedHeader,
  FeedName,
  FeedImage,
  FeedFooter,
};
