"use client";
import styled from "@emotion/styled";

const StyledDeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${({type})=>type ==='DELETE'? '#f45b5b': '#3d7aff'};
  font-size: 5px;
  transition: all 0.3s ease;

  span{
    font-size: 22px;
  }

  &:hover {
    color: ${({type})=>type ==='DELETE'? '#ff0000': '#3d7aff'};
  }

`;
const DeleteButton = ({ onClick, type="DELETE"}) => {
  let title;
  let icon;
  switch (type) {
    case "DELETE":
      title = 'Delete this record'
      icon = <span className="material-symbols-outlined">delete_forever</span>
      
      break;
    case "EDIT":
      title = 'Edit this record'
      icon = <span className="material-symbols-outlined">edit_square</span>
      
      break;
    case "VIEW":
      title = 'Delete this record'
      icon = <span className="material-symbols-outlined">delete_forever</span>
      
      break;
  
    default:
      break;
  }
  return (
    <StyledDeleteButton type={type} title={title} onClick={onClick}>
    {icon}
    </StyledDeleteButton>
  );
};

export default DeleteButton;
