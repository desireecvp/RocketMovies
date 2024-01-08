import styled from "styled-components";
import backgroundImg from "../../assets/backgroundIMG.png";

export const Main = styled.div`
  height: 100vh;

  display: flex;
  justify-content: space-between;
`;

export const Form = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 340px;
  }

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }

  h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  p {
    font-size: 14px;
    margin-bottom: 48px;
  }

  button {
    margin: 24px 0 42px;
  }

  :nth-child(4) {
    margin-bottom: 8px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: linear-gradient(
      0deg,
      rgba(35, 33, 41, 0.8),
      rgba(35, 33, 41, 0.8)
    ),
    url(${backgroundImg}) no-repeat center/cover;
`;
