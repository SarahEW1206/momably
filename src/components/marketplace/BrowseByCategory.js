import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import StyledLink from "../elements/StyledLink";

export default function BrowseByCategory(props) {
  const CategoryList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    .card {
      border: 2px solid var(--light-teal);
      box-shadow: none;
      border-radius: 0;
      box-sizing: border-box;
    }
  `;
  const CategoryListItem = styled.li`
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100px;

    span {
      color: var(--dark-teal);
      box-shadow: inset 0 -3px 0 -1px var(--med-peach);
      transition: box-shadow 0.15s ease-in-out;
    }

    span:hover {
      box-shadow: inset 0 -23px 0 -1px var(--med-peach);
    }

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
            <span>{business.category}</span>
          </CategoryListItem>
        </Link>
      ))}
    </CategoryList>
  );
}
