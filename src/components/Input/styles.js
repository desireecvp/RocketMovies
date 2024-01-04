import styled from "styled-components";

export const StyledInput = styled.input`
    height: 56px;
    width: 100%;

    border: none;
    border-radius: 10px;
    padding: 19px 24px;
    background-color: ${({theme}) => theme.COLORS.BLACK_700};
    color: ${({ theme }) => theme.COLORS.GRAY_800};

`;