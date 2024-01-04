import { Tag } from './styles';

export function ButtonTag ({title, variant='primary'}) {
    return (
            <Tag variant={variant}>
            {title}
            </Tag>
            
    )
}