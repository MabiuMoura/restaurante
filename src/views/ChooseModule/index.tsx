import { Modules } from "./Mock/data"
import ModuleOption from "./components/ModuleOption";
import * as S from "./styles";

const ModulePicker: React.FC = () => {

    return (
        <S.ModuleContainer>
            {Modules.map((module, index) => (
                <ModuleOption key={index} module={module} />
            ))}
        </S.ModuleContainer>
    );
}

export default ModulePicker;