import styled from "styled-components";

export const Container = styled.header`
margin-bottom: 40px;
    grid-area: header;
    gap: 16px;  

    width: 100%;
    padding: 24px 80px;
    height: 105px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};

    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;

    > h1 {
    min-width: 198px;
display: flex;
justify-content: center;
      font-size: 24px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.PINK_800};
    }

`;

export const Profile = styled.div`
    width: 198px;
    height: 68px;

    display: flex;
    align-items: center;
    gap: 9px;

    color: ${({ theme }) => theme.COLORS.WHITE_800};
    
    > p {
        
        color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
    
    > div {
        width: 125px;
        height: 36px;
        
        display: flex;
        flex-direction: column;
        font-size: 14px;

        
        :nth-child(1), :nth-child(2) {
            display: flex;
            justify-content: flex-end;
        }
        
        :last-child {
            color: ${({ theme }) => theme.COLORS.GRAY_800};
        }
    }

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        cursor: pointer;
    }


    div {
        display: flex;
        flex-direction: column;
    }
`;