import styled from "styled-components";

export const StyledTextArea = styled.textarea`
    width: 100%;
    height: 100%;


    border: none;
    border-radius: 10px;
    padding: 19px 16px;
    background-color: ${({theme}) => theme.COLORS.BLACK_700};
    color: ${({ theme }) => theme.COLORS.GRAY_800};

`;