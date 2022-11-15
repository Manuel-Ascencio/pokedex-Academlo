import styled from "styled-components";

export const Pokemon = styled.div`
  background-color: ${({ colors, type }) => colors[type]};
  width: 100%;
  min-height: 100vh;
  color: #f6f6f6;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 700px) {
    max-width: 1200px;
    margin: auto;
  }
`;

export const PokemonContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 25px;
  color: #f6f6f6;
  z-index: 300;
  @media only screen and (min-width: 700px) {
    font-size: 1.5rem;
    padding: 5px 0;
  }
`;

export const PokemonIdentifier = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  text-align: end;
`;

export const Id = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Name = styled.h1`
  font-size: 1.6rem;
  text-transform: capitalize;
  @media only screen and (min-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const Measurement = styled.div`
  position: absolute;
  width: 105%;
  top: 30%;
  right: -50%;
  transform: rotate(-90deg);
  display: flex;
  justify-content: center;
  text-align: end;

  @media only screen and (min-width: 700px) {
    top: 50%;
    right: 0;
    transform: rotate(0deg);
    width: 80%;
    display: inline;
    text-align: start;
  }
`;

export const Height = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-right: 20px;
  letter-spacing: 1px;
  @media only screen and (min-width: 700px) {
    margin-right: 0;
  }
`;

export const Weight = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const PokemonDescription = styled.div`
  border-radius: 10px;
  @media only screen and (min-width: 700px) {
    position: absolute;
    top: 50%;
    right: 5%;
    display: inline;

    h3 {
      font-size: 1.1rem;
    }
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;

  @media only screen and (min-width: 700px) {
    width: 300px;
    font-size: 1rem;
  }
`;

export const Type = styled.h3`
  font-size: 1.1rem;
  position: absolute;
  top: 30%;
  width: 250px;
  letter-spacing: 2px;
  transform: rotate(-90deg);
  margin-left: -115px;
  text-align: center;
  letter-spacing: 3px;
  @media only screen and (min-width: 700px) {
    top: 80%;
  }
`;

export const PokemonImage = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin-top: 50px;

  @media only screen and (min-width: 700px) {
    max-width: 50%;
    margin: auto;
    margin-top: -50px;
  }
`;

export const Img = styled.img`
  width: 70%;
  svg {
    margin: auto;
  }
  @media only screen and (min-width: 700px) {
  }
`;

export const JapaneseName = styled.span`
  z-index: 3;
  display: block;
  max-width: 1200px;
  font-size: 3rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;

  @media only screen and (min-width: 700px) {
    font-size: 5rem;
    position: absolute;
    top: 0;
    margin: auto;
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  display: inline-block;
  @media only screen and (min-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const Skills = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media only screen and (min-width: 700px) {
    justify-content: center;
  }
`;

export const Progress = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #f6f6f6;
  background: conic-gradient(
    ${({ colors, type }) => colors[type]} ${({ colors, type, deg }) => deg}deg,
    #ededed 0deg
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;

  ::before {
    content: "";
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: #f6f6f6;
    border-radius: 50%;
  }

  @media only screen and (min-width: 700px) {
    margin: 0 10px;
  }
`;

export const ProgressValue = styled.span`
  position: relative;
  color: ${({ colors, type }) => colors[type]};
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-sontent: center;
  align-items: center;

  h3 {
    font-size: 1rem;
  }

  @media only screen and (min-width: 700px) {
    span {
      font-size: 1.1rem;
    }
  }
`;

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 100px;
  margin-bottom: 100px;
  background: radial-gradient(farthest-side, #766df4 94%, #0000) top/16px 16px
      no-repeat,
    conic-gradient(#0000 30%, #0269b4);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 16px), #000 0);
  animation: s3 1s infinite linear;

  @keyframes s3 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
