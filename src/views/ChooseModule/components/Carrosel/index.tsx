import { useState } from "react"
import * as S from "./styles"
import { useNavigate } from 'react-router-dom';

interface CarroselProps {
    modules: {
        name: string,
        route: string,
        color: string
    }[]
}

const Carrosel = ({ modules }: CarroselProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const navigate = useNavigate();

    const handleClick = (route: string) => {
        navigate(route);
    };

    return (
        <S.CarroselContainer>
            {modules.map((module, index) => (
                <S.CarroselItem
                key={index}
                $background={module.color}
                $isHovered={hoveredIndex === index}
                $isAnotherHovered={hoveredIndex !== null && hoveredIndex !== index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleClick(module.route)}>
                {module.name}
            </S.CarroselItem>
            ))}
        </S.CarroselContainer>
    )
}

export default Carrosel;