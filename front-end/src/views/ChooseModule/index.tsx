import { useState } from "react";
import { Modules } from "./Mock/data"
import ModuleOption from "./components/ModuleOption";
import * as S from "./styles";

const ModulePicker: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <S.ModuleContainer>
            {Modules.map((module, index) => (
                <ModuleOption key={index}
                 module={module}
                 isHovered={hoveredIndex === index}
                isOtherHovered={hoveredIndex !== null && hoveredIndex !== index}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
                 />
            ))}
        </S.ModuleContainer>
    );
}

export default ModulePicker;