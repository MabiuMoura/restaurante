import styled from "styled-components";
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline  } from "react-icons/io";



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
`

export const OptionsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 10px;
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
    padding: 5px 0;
`

export const OptionLabel = styled.label`
    font-size: 14px;
    color: #333;
`;

export const OptionPrice = styled.span`
    margin-right: 0;
    font-size: 14px;
`;

export const AddItemButton = styled(IoIosAddCircleOutline)`
    color: black;
    cursor: pointer;
    width: 20px;
    height: 20px;
`;

export const RemoveItemButton = styled(IoIosRemoveCircleOutline)`
    color: black; 
    cursor: pointer;
    width: 20px;
    height: 20px;
`;