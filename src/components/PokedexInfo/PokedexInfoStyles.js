import styled from "styled-components";

export const PokeBall = styled.div`
  position: relative;
  width: 250px;
  background: #fff;
  height: 250px;
  border-radius: 50%;
  margin: 20px;

  :before {
    content: "";
    width: 250px;
    height: 125px;
    background: #ea5c5c;
    border-radius: 8.5rem 8.5rem 0 0;
    position: absolute;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Name = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  transform-origin: 0 125px;
  padding: 10px;
  color: rgb(246, 246, 246);
  text-transform: uppercase;
  font-weight: bold;

  transform: rotate(${({ deg, i }) => deg * i - 95}deg);
`;

export const Type = styled.div`
  color: black !important;
  position: absolute;
  top: -780%;
  left: 50% !important;
  transform-origin: 0 125px;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;

  transform: rotate(
    ${({ deg2, i, length }) =>
      length < 7 ? deg2 * -i + 235 : deg2 * -i + 243}deg
  );
`;

export const NameLetter = styled.span`
  font-family: "Source Sans Pro", sans-serif;
  line-height: 20px;
  font-size: 1.3rem;
  font-weight: 400;
  display: inline-block;
  padding: 10px;
  transform: rotate(${({ deg, i }) => deg - i}deg);
`;

export const TypeLetter = styled.span`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  display: inline-block;
  padding: 10px;
  transform: rotate(
    ${({ deg2, i, length }) =>
      length < 7 ? deg2 * i + 125 : deg2 * i + 117}deg
  );
`;

export const Line = styled.div`
  width: 250px;
  height: 15px;
  background: #2b2f38;
  margin-top: 125px;
  position: absolute;
`;

export const Circle = styled.div`
  content: "";
  width: 150px;
  height: 150px;
  background: #2b2f38;
  border-radius: 50%;
  margin-top: -75px;
  margin-left: 50px;
`;

export const Pokemon = styled.div`
  content: "";
  width: 120px;
  height: 120px;
  background: #fff;
  border-radius: 50%;
  margin-top: 15px;
  margin-left: 15px;
  position: absolute;
  display: flex;
  justify-content: center;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

export const Image = styled.img`
  width: ${({ image }) => (image ? "80px" : "100px")};
  height: ${({ image }) => (image ? "80px" : "100px")};
  align-self: center;
`;

export const Image2 = styled.div`
  align-self: center;
  align-item: center;
  width: 100px;
  height: 100px;
  background-image: url(${({ image, image2 }) => (image ? image : image2)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
