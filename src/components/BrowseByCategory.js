import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledLink from "./StyledLink";

export default function BrowseByCategory(props) {
  const CategoryList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  `;
  const CategoryListItem = styled.li`
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100px;

    @media (max-width: 650px) {
      font-size: 14px;
    }
  `;

  const { users } = props;
  return (
    <CategoryList>
      {users.map(business => (
        <Link to="/" className="card col-4 col-sm-3 col-md-2">
          <CategoryListItem key={business.user_id}>
            {business.category}
          </CategoryListItem>
        </Link>
      ))}
      <Link to="/" className="card col-4 col-sm-3 col-md-2">
        <CategoryListItem>Placeholder</CategoryListItem>
      </Link>
      <Link to="/" className="card col-4 col-sm-3 col-md-2">
        <CategoryListItem>Placeholder</CategoryListItem>
      </Link>
      <Link to="/" className="card col-4 col-sm-3 col-md-2">
        <CategoryListItem>Placeholder</CategoryListItem>
      </Link>
      <Link to="/" className="card col-4 col-sm-3 col-md-2">
        <CategoryListItem>Placeholder</CategoryListItem>
      </Link>
    </CategoryList>
  );
}
