import styled from "styled-components";

export const Tag = styled.button`

display: flex;
align-items: center;
border: none;
padding: 16px 8px;
height: 30px;

background-color: ${({ theme, variant }) => variant === 'primary' ? theme.COLORS.PINK_900 : theme.COLORS.BLACK_600};
color: ${({ theme }) => theme.COLORS.WHITE_TEXT};

font-size: 12px;
border-radius: 10px;
margin: 8px 0;

`;