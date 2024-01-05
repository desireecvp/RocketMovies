import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 144px;
  background: rgba(255, 133, 155, 0.05);
  padding: 0 144px;

  display: flex;
  align-items: center;
  justify-content: left;

  button {
    width: 70px;
    gap: 8px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: end;
  margin-top: -96px;

  img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    border-radius: 50%;
    color: ${({ theme }) => theme.COLORS.BLACK_600};
    background: ${({ theme }) => theme.COLORS.PINK_800};

    padding: 14px;
    font-size: 30px;
    width: 48px;
    height: 48px;
    margin-left: -64px;
  }

  input {
    display: none;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 340px;
  margin: 64px auto 0;
  gap: 8px;

  :nth-child(3) {
    margin-top: 24px;
  }
   
   button {
    margin-top: 24px;
   }
`;
