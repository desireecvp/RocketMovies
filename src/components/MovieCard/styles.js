import styled from "styled-components";

export const Container = styled.div`
background:  rgba(255, 133, 155, 0.05);
font-size: 16px;
text-align: justify;

padding: 32px;
border-radius: 16px;

gap: 8px;
margin: 0 8px 24px 8px;

> span {
    color: ${({ theme }) => theme.COLORS.PINK_800};
    display: flex;
    flex-direction: row;
    gap: 6px;
}

> h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    margin-bottom: 8px;
}

> p {
    font-size: 16px;

    margin: 15px 0;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    overflow: hidden;
    
};

div {
    display: flex;
    gap: 6px;
}
`;
