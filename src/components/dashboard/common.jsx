"use client";
import { trash_icon } from "@/assets/icons/dashboard.icon";
import styled from "@emotion/styled";

const StyledDeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: #f45b5b;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    color: #ff0000;
  }
`;
const DeleteButton = ({ onClick }) => {
  return (
    <StyledDeleteButton title="Delete this record." onClick={onClick}>
      {trash_icon}
    </StyledDeleteButton>
  );
};

export default DeleteButton;
