import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./styled";

type Props = {
  type?: string,
}

const Button: React.FC<Props> = () => {
  return (
    <ButtonStyled>
      test
    </ButtonStyled>
  )
}

Button.propTypes = {
  // Type
  type: PropTypes.string,
}

export default Button;