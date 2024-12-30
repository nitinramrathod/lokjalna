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
  overflow-y: auto;
  max-height: calc(100vh - 60px);

  .table-responsive{
    height: 100%;
    min-height: 400px;
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
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  color: #ff570f;
`;
const Tr = styled.tr`
  th {
    background: #4d4d4d;
    position: sticky;
    color: white;
    min-width: fit-content;
    top: 0;
  }
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
          <Tr>
            {header?.map((item, index) => (
              <th key={item + index}>{item}</th>
            ))}
          </Tr>
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
