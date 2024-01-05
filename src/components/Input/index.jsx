import { StyledInput } from './styles';

export const Input = ({icon, ...props}) => {
    return (
        <StyledInput>
            
            {icon}
            <input   {...props}/>
            
        </StyledInput>
    )
}