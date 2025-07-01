import * as S from './styles';
import { useNavigate } from 'react-router-dom';

interface ModuleOptionProps {
    module: {
        name: string;
        route: string;
        color: string;
        secundaryColor: string;
    };
    isHovered: boolean;
    isOtherHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}

const ModuleOption = ({ module, isHovered, isOtherHovered, onHover, onLeave }: ModuleOptionProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(module.route);
    };

    return (
        <S.ModuleContainerBackground
            $backgroundColor={module.color}
            $isHovered={isHovered}
            $isOtherHovered={isOtherHovered}
            onClick={handleClick}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <S.ModuleContainerContent
                $primaryColor={module.color}
                $secundaryColor={module.secundaryColor}
            >
                {module.name}
            </S.ModuleContainerContent>
        </S.ModuleContainerBackground>
    );
};

export default ModuleOption;
