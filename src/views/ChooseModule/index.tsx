import { Modules } from "./Mock/data"
import Carrosel from "./components/Carrosel";
import ModuleOption from "./components/ModuleOption";
import * as S from "./styles";

const ModulePicker: React.FC = () => {

    return (
        <S.ModuleContainer>
             {/* Modules.map((module, index) => (
                <ModuleOption key={index} module={module} backgroundColor={module.color}/>
            )) */} 

            <Carrosel modules={Modules} ></Carrosel>
        </S.ModuleContainer>
    );
}

export default ModulePicker;