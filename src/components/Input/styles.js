import styled from "styled-components";

export const StyledInput = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 56px;
    width: 100%;
    padding: 12px;

    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.BLACK_700};
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    
    input{
        border: none;
        background: transparent;
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.COLORS.GRAY_800};
    }

    svg {
        display: flex;
        align-items: center;
        font-size: 20px;
    }

`;