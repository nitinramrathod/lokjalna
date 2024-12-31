"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { Button, Table as BootstrapTable, Spinner } from "react-bootstrap";

const Wrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  height: fit-content;
  height: 100%;
  /* overflow-y: auto; */

  .table-responsive{
    height: calc(100% - 70px);
    min-height: 300px;
  }

  table {
    width: 100%;
    overflow-x: auto;
    margin: 0;
    position: relative;
  }

  .delete {
    color: red;
    &:hover {
      background: #ff0f0f72;
      color: #fff;
    }
  }
  .active {
    color: green;
    background: transparent;
    &:hover {
      background: #259d0067;
      color: #fff;
    }
  }

 
`;
const TableHeader = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: #ff570f;
`;

const Th = styled.th`
    background: #4d4d4d !important;
    z-index: 2; 
    position: sticky;
    color: white !important;
    min-width: ${({minWidth})=> minWidth ? minWidth : "fit-content"};
    top: -2px;
    padding: 10px !important;
`;

const Table = ({
  header = [],
  title = "News List",
  addButton,
  children,
  loading = true,
}) => {
  return (
    <Wrapper>
      <TableHeader>
        <h4 className="title">{title}</h4>
        {addButton?.type === "link" && (
          <StyledLink href={addButton?.href}>{addButton?.text}</StyledLink>
        )}
        {addButton?.type === "button" && (
          <Button onClick={addButton?.onClick}>{addButton?.text}</Button>
        )}
      </TableHeader>

      <BootstrapTable striped responsive bordered hover>
        <thead>
          <tr>
            {header?.map((item, index) => (
              <Th minWidth={item?.minWidth}  key={item + index}>{item?.title || "--"}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td className="text-center py-4" colSpan={header?.length}>
                <Spinner animation="border" variant="primary" />{" "}
              </td>
            </tr>
          ) : (
            children
          )}
        </tbody>
      </BootstrapTable>
    </Wrapper>
  );
};

export default Table;
