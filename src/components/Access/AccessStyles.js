import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PokemonLogo = styled.img`
  width: 90%;

  @media only screen and (min-width: 700px) {
    width: 50%;
  }
`;

export const Form = styled.form`
  width: 80%;
  text-align: center;
`;

export const Label = styled.label`
  text-align: center;
  margin: auto;
  width: 100%;
`;

export const Login = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  @media only screen and (min-width: 700px) {
    width: 50%;
  }
`;

export const LoginIcon = styled.img`
  width: 15%;
`;

export const Input = styled.input`
  height: 35px;
  margin-left: 5px;
  width: 80%;
  outline: none;
  border: none;
  border: 1px solid #38373c;
  border-radius: 5px;
  text-decoration: none;
  padding: 5px 10px;
  text-decoration-line: none;

  @media only screen and (min-width: 700px) {
    height: 45px;
    font-size: 1rem;
    border-radius: 5px;
    text-decoration: none;
    padding: 10px;
  }
`;

export const Button = styled.button`
  width: 90%;
  margin-top: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #0269b4;
  color: #f5f5f5;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.1rem;

  @media only screen and (min-width: 700px) {
    width: 50%;
    margin-top: 10px;
    font-size: 1.2rem;
    background-color: #0269b4;
    color: #f5f5f5;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 0.1rem;
    padding: 12px;
  }
`;
