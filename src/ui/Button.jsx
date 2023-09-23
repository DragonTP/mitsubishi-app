import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-50);
    background-color: var(--color-theme);

    &:hover {
      background-color: var(--color-theme-darker);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
};

const Button = styled.button`
  ${({$variation}) => variations[$variation]}
  ${({size}) => sizes[size]}
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  cursor: pointer;
  min-width: 10rem;
`
Button.defaultProps = {
  $variation: 'primary',
  size: 'medium'
}

export default Button