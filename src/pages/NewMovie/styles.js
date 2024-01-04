import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    

    > button {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
    }

    > h1 {
        margin-bottom: 40px;
        font-size: 36px;
    }

     p {
        height: 26px;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_700};
        margin-bottom: -16px;
    }

    &::-webkit-scrollbar {
        background: none;
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK_800};
        border-radius: 8px;
    }

`;

export const Wrapper = styled.div`
    gap: 40px;
    display: flex;
    flex-direction: column;
    
    div {
    display: flex;
    gap: 40px;
    }

    > textarea {
        height: 274px;
        resize: none;
    }
`;

export const DeleteButton = styled.button`
border: none;
color: ${({ theme }) => theme.COLORS.PINK_800};
background-color: ${({ theme }) => theme.COLORS.BLACK_900};
width: 100%;

display: flex;
align-items: center;
justify-content: center;

border-radius: 10px;
padding: 16px 25px;
height: 56px;


`;