import styled from "styled-components";

function getButtonColor(variant, theme) {
  switch (variant) {
    case 'primary': 
    return theme.COLORS.PINK_800
    
    case 'secondary':
      return theme.COLORS.BLACK_600
      
    case 'link':
      return 'transparent'

    default:
    return theme.COLORS.PINK_800
  }
}

export const Container = styled.button`
  width: 100%;
  background-color: ${(props) => getButtonColor (props.variant, props.theme)}; 
  color:${(props) => props.variant === "primary" ? props.theme.COLORS.BLACK_600 : props.theme.COLORS.PINK_800};

  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  gap: 8px;
  border: 0;
  padding: ${(props) => props.variant != 'link' ? '0 16px' : 0};
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
