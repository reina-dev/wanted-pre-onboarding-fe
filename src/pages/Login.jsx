import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LoginInput,
  LoginErrorInput,
  PasswordInput,
  PasswordErrorInput,
  LoginButton,
  ErrorMessage,
  CenterContainer,
  Background,
  Title,
} from '../components/Styled';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 이메일 정규 표현식
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const validateEmail = (email) => {
    return email.match(emailRegex);
  };

  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length >= 8;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = {
        email,
        password,
      };
      console.log('#res', res);

      const userString = JSON.stringify(res);

      localStorage.setItem('user', userString);

      alert('로그인 성공!');
      navigate('/main');
    } catch {
      alert('로그인 실패!');
      console.log('로그인에 실패했습니다.', err);
    }
  };
  return (
    <Background>
      <CenterContainer>
        <Title>Instagram</Title>
        <form method="POST" onSubmit={handleSubmit}>
          <label htmlFor="email-address">
            {isEmailValid ? (
              <LoginInput
                id="email"
                name="email"
                type="email"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <span>
                <LoginErrorInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ErrorMessage>이메일 형식이 올바르지 않습니다.</ErrorMessage>
              </span>
            )}
          </label>
          <br />
          <label htmlFor="password">
            {isPasswordValid ? (
              <PasswordInput
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : (
              <span>
                <PasswordErrorInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <ErrorMessage>비밀번호가 올바르지 않습니다.</ErrorMessage>
              </span>
            )}
          </label>
          <br />
          <LoginButton type="submit" disabled={!isFormValid}>
            로그인
          </LoginButton>
        </form>
      </CenterContainer>
    </Background>
  );
};

export default LoginForm;
