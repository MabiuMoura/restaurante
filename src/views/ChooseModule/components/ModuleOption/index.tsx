import * as S from './styles'
import { useNavigate } from 'react-router-dom';

interface ModuleOptionProps {
    module: {
        name: string;
        route: string;
    }
    backgroundColor: string;
}

const ModuleOption = ({module, backgroundColor}:ModuleOptionProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(module.route);
    };

    return (
        <S.ModuleContainerBackground $backgroundColor={backgroundColor} onClick={handleClick}>
            <S.ModuleContainerContent $backgroundColor={backgroundColor}>
                {module.name}
            </S.ModuleContainerContent>
        </S.ModuleContainerBackground>
    )
}
export default ModuleOption;