import React from 'react';
import FilterLink from '../containers/FilterLink';

// this a single line arrow function, the parenthesis keep the whole thing together
const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
);

export default Footer

