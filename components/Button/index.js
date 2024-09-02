import styled from "styled-components";

const test = 23;

// styled-components
// tagged template literals
const Button = styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: ${test > 20 ? "#efefef" : "white"};
  background-color: var(--primary-color);

  &:hover {
    background-color: var(--secondary-color);
  }

  &:focus {
    border: 3px solid var(--primary-color);
  }
`;

export default Button;
