import styled from "styled-components";

export const PokedexContainer = styled.section``;

export const Text = styled.h3`
  text-align: center;
  letter-spacing: 2px;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #38373c;
  max-width: 1300px;
  font-weight: normal;
  margin: auto;
  padding: 40vh 20px 20px 20px;

  @media only screen and (min-width: 700px) {
    padding: 25vh 20px 20px 20px;
    font-size: 1.5rem;
  }
`;

export const Search = styled.div`
  width: 100%;
  background-color: #ea5c5c;
  position: fixed;
  padding: 20px;
  z-index: 100;
  margin: auto;

  @media only screen and (min-width: 700px) {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
`;

export const SearchContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 10px;
  @media only screen and (min-width: 700px) {
    width: 1300px;
    display: flex;
    justify-content: space-around;
  }
`;

export const Image = styled.img`
  width: 200px;
  grid-column-start: 1;
  grid-column-end: 3;
  order: 1;
  @media only screen and (min-width: 700px) {
    width: 15%;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 5;
  order: 3;
  width: 100%;

  @media only screen and (min-width: 700px) {
    order: 2;
    width: auto;
    align-self: center;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 50px;
  padding: 0px 50px;
  font-size: 1.2rem;
  background-color: rgb(246, 246, 246);

  ::placeholder {
    font-size: 1rem;
    padding: 5px;
  }

  @media only screen and (min-width: 700px) {
    width: 400px;
  }
`;

export const BtnSearch = styled.button`
  background: none;
  outline: none;
  border: none;
  position: absolute;
  margin-left: 8px;
  cursor: pointer;

  i {
    font-size: 1.1rem;
    width: 100%;
    height: auto;
    border-radius: 50%;
    padding: 10px;
    color: #0269b4;
  }
`;

export const PokemonSection = styled.div`
  margin: auto;
`;

export const Pages = styled.div`
  margin: 50px 50px;
  padding: 10px;
  border-radius: 30px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
  max-width: 1300px;
  margin: auto;
`;

export const SelectButton = styled.select`
  cursor: pointer;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  padding: 10px;
  height: 50px;
  outline: none;
  background-color: rgb(246, 246, 246);
  grid-column-start: 3;
  grid-column-end: 5;
  order: 2;
  align-self: center;

  option {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 700px) {
    width: 15%;
    order: 3;
    font-size: 1.2rem;

    option {
      font-size: 1.1rem;
    }
  }
`;

export const Previous = styled.button`
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  svg {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 0.7rem;
    color: #0269b4;
  }
`;

export const Next = styled.button`
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  svg {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 0.7rem;
    color: #0269b4;
  }
`;

export const Items = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PageButton = styled.button`
  border: none;
  background-color: ${({ pag, page }) =>
    pag === page ? "#ea5c5c" : "#0269b4"};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: rgb(246, 246, 246);
  font-size: 1.3rem;
  margin: 5px;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: #ea5c5c;
    transition: 0.2s;
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
