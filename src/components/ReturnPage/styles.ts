import styled from "styled-components";
import { PiKeyReturnLight } from "react-icons/pi";

export const ReturnPageIcon = styled(PiKeyReturnLight)`
    width:40px;
    height:40px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover{
        width:50px;
        height:50px;
    }   
`