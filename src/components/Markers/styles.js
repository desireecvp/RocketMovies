import styled from "styled-components";

export const Container = styled.div`

    background: ${({ theme }) => theme.COLORS.BLACK_900};

    height: 5.6rem;
    
    padding: 16px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    gap: 24px;

    span {
        color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
        gap: 16px;
    }

    svg {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK_800};
        margin-left: 16px;
    }

`;

export const NewMarkerButton = styled.button`
color: ${({ theme }) => theme.COLORS.GRAY_800};
height: 56px;

display: flex;
align-items: center;

border-radius: 10px;
background: none;
padding: 16px;
border: dashed 2px white;

    svg {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK_800};
        margin-left: 16px;
    }
`;