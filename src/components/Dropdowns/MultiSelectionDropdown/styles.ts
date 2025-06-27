import styled from "styled-components";
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline  } from "react-icons/io";
import { CiSquareChevDown, CiSquareChevUp  } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { PiKeyReturnLight } from "react-icons/pi";
import { TbRefresh } from "react-icons/tb";

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
    z-index:99;
    &::before {
        content: '';
        position: absolute;
        top: -12px; 
        right: 17px;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 12px solid #AFBCC0;
    }
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
    transition: 0.2s ease;
`

export const OptionItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height:35px;
    width: 100%;
    padding: 20px 15px;
    border-radius: 10px;
    user-select:none;
    border-bottom: 1px solid #ccc;
    &:hover {
        background-color: #E0E4E8;
    }
`

export const OptionLabel = styled.label`
    font-size: 13px;
    width: 50%;
    color: #333;
`;

export const PriceAndIconsContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-left:0;
    width: 50%;
`

export const CounterContainer = styled.div`
    width:48px;
    display: flex;
    font-size: 15px;
    flex-direction:row;
    justify-content:end;
    align-items:center;
    gap: 10px;
`

export const RefreshIcon = styled(TbRefresh)`
    color: black;
    cursor: pointer;
    width: 17px;
    height: 17px;
`

export const EditPriceIcon = styled(FiEdit2)`
    color: black;
    cursor: pointer;
    width: 17px;
    height: 17px;
`

export const OptionPrice = styled.span`
    margin-right: 0;
    font-size: 14px;
`;

export const AddItemButton = styled(IoIosAddCircleOutline)`
    color: black;
    cursor: pointer;
    width: 21px;
    height: 21px;
`;

export const RemoveItemButton = styled(IoIosRemoveCircleOutline)`
    color: black; 
    cursor: pointer;
    width: 21px;
    height: 21px;
`;

export const EditPriceContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:5px;
`

export const CancelEditPrice = styled(PiKeyReturnLight)`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

export const EditPriceButton = styled.button`
    background-color: #4CAF50;  
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
    &:active {
        background-color: #3e8e41;
    }
    `