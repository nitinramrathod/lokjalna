"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import {
  Dropdown,
  DropdownButton,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import Image from "next/image";

const Wrapper = styled.div`
  .avatar {
    background: #0380a5;
    color: white;
    height: 45px;
    aspect-ratio: 1;
    display: grid;
    place-content: center;
    font-size: 18px;
    cursor: pointer;
    border-radius: 50%;
    padding: 1px;
  }

  .avatar-image{
    width: 100%;
    object-fit: cover;
    height: auto;
    aspect-ratio: 1;
    border-radius: 50%;
    /* border: 1px solid #0380a5; */
  }
`;

const Logout = styled.button`
  background: #ff5121;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Info = styled.div`
  margin-bottom: 20px;
  
  p {
    margin: 0;
    color: #4c4c4c;
    border: none;
    padding: 5px 0;
    border-radius: 5px;
  }
`;
const UserAvatar = ({ user, handleLogOut }) => {
  const initials = user?.name
    ?.split(" ")
    .map((word) => word.charAt(0))
    .slice(0, 2);

  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{user?.name || "--"}</Popover.Header>
      <Popover.Body>
        <Info>
          <p>Name: {user?.name}</p>
          <p>Email ID: {user?.email}</p>
          <p>Role: {user?.role}</p>
        </Info>
        <Logout onClick={handleLogOut}>Logout</Logout>
      </Popover.Body>
    </Popover>
  );

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setShowPopover(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handlePopoverClick = () => {
    setShowPopover((prev) => !prev); // Toggle popover visibility
  };

  return (
    <Wrapper>
      <div>
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popover}
          show={showPopover}
          onToggle={handlePopoverClick} // Toggle visibility on click
        >
          <h3 className="avatar" ref={popoverRef} title={user?.name}>
            {user?.image ? <Image className="avatar-image" width={50} height={50} alt={user?.name} src={user.image}/>: initials}
            
          </h3>
        </OverlayTrigger>
      </div>
    </Wrapper>
  );
};

export default UserAvatar;
