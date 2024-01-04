import styled from "styled-components";

export const Main = styled.div`
  
  gap: 24px;
  max-height: 70vh;

  overflow: auto;

  &::-webkit-scrollbar {
        background: none;
        width: 8px;
        gap: 24px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK_800};
        border-radius: 8px;
    }
`;

export const PageTitle = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  height: 48px;

  margin-bottom: 38px;

  > h1 {
    font-size: 32px;
    font-weight: 400;
    width: 100%;
  }

  button {
    font-size: 16px;
    font-weight: 400;

    height: 48px;
    width: 208px;
    gap: 8px;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
