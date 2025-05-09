import * as S from './styles'
import { useNavigate } from 'react-router-dom';

interface ModuleOptionProps {
    module: {
        name: string;
        route: string;
        color: string;
        secundaryColor: string
    }
}

const ModuleOption = ({module}:ModuleOptionProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(module.route);
    };

    return (
        <S.ModuleContainerBackground $backgroundColor={module.color} onClick={handleClick}>
            <S.ModuleContainerContent $primaryColor={module.color} $secundaryColor={module.secundaryColor}>
                {module.name}
            </S.ModuleContainerContent>
        </S.ModuleContainerBackground>
    )
}
export default ModuleOption;