import styled from "styled-components";
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline  } from "react-icons/io";
import { CiSquareChevDown, CiSquareChevUp  } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";

export const ExternalContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

export const DropdownContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border-radius:10px;
    background-color: #AFBCC0;
`

export const DropdownHeader = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    border-radius:10px;
    border: 1px solid #ccc;
    padding: 10px;
`

export const HeaderTitle = styled.h3`
    margin: 0; 
    font-size: 16px;
    font-weight: 600;
    user-select:none;
`

export const OpenDropdownIcon = styled(CiSquareChevDown)`
    width:27px;
    height:27px;
    cursor: pointer;
`

export const CloseDropdownIcon = styled(CiSquareChevUp)`
    width:27px;
    height:27px;
    cursor: pointer;
`

export const OptionsList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    max-height: 200px;
    width: 100%;
    overflow-y: auto;
`

export const OptionItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height:35px;
    width: 100%;
    padding: 20px 15px;
    border-radius: 5px;
    user-select:none;
    border-bottom: 1px solid #ccc;
    &:hover {
        background-color: #E0E4E8;
    }
`

export const OptionLabel = styled.label`
    font-size: 14px;
    width: 50%;
    color: #333;
`;

export const PriceAndIconsContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:end;
    align-items:center;
    gap: 5px;
    width: 50%;
`

export const CounterContainer = styled.div`
    width:48px;
    display: flex;
    flex-direction:row;
    
    justify-content:end;
    align-items:center;
    gap: 10px;
`

export const EditPriceIcon = styled(FiEdit2)`
    color: black;
    cursor: pointer;
    width: 19px;
    height: 19px;
`

export const OptionPrice = styled.span`
    margin-right: 0;
    font-size: 15px;
`;

export const AddItemButton = styled(IoIosAddCircleOutline)`
    color: black;
    cursor: pointer;
    width: 22px;
    height: 22px;
`;

export const RemoveItemButton = styled(IoIosRemoveCircleOutline)`
    color: black; 
    cursor: pointer;
    width: 22px;
    height: 22px;
`;