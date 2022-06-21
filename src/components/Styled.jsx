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
`;

const Title = styled.h1`
  display: flex;
  font-weight: 800;
  font-size: 3em;
  margin: 2px 2px 40px 2px;
  padding: 5px;
`;

const HeaderNav = styled.div`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0px;
  z-index: 40;
  box-shadow: 0px 2px #ececec;

  @media (max-width: 768px) {
    justify-content: space-between;
  } ;
`;
export {
  LoginInput,
  LoginErrorInput,
  PasswordInput,
  PasswordErrorInput,
  LoginButton,
  ErrorMessage,
  CenterContainer,
  Background,
  Title,
  HeaderNav,
};
