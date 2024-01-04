import styled from "styled-components";



export const Main = styled.div`
      

    > button {
        margin-left: 1rem;
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 8px;
    }
    
    img {
        width: 16px;
        height: 16px;
        border-radius: 35px;
    }

 
`;

export const TitleContainer = styled.div`
padding: 0 1rem;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;

  > h1 {
    margin-right: 8px;
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }

  div {
    gap: 10px;
  }
`;

export const MiddleContent = styled.div`
      max-height: 581px;
      overflow-y: scroll;
      padding: 0 1rem;

          > p {
        text-align: justify;
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

export const Subtitle = styled.div`
padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 8px;
    

    > svg {
        width: 16px;
        height: 16px;
        color: ${({ theme }) => theme.COLORS.PINK_800};

    }
    
`;

export const TagsWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin: 40px 0;

`



