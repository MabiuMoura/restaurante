import * as S from './styles';
import Switch from 'react-switch';

interface SwitchButtonProps {
  title: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ title, checked, onChange }) => {
  return (
    <S.SwitchContainer>
      <S.Label>{title}</S.Label>
      <Switch
        onChange={onChange}
        checked={checked}
        onColor="#4caf50"
        offColor="#ccc"
        uncheckedIcon={false}
        checkedIcon={false}
        height={25}
        width={42}
        handleDiameter={20}
      />
    </S.SwitchContainer>
  );
};

export default SwitchButton;