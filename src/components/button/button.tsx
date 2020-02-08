import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./styled";
import { tuple } from "../utils/type"

const ButtonTypes = tuple('default', 'primary', 'success', 'dashed', 'danger', 'link');
export type ButtonType = typeof ButtonTypes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
  type?: ButtonType;
}

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps

export type ButtonProps = Partial<NativeButtonProps>;

const Button: React.FC<ButtonProps> = ({...rest}) => {
  const { htmlType, type,...otherProps } = rest as NativeButtonProps;

  return (
    <ButtonStyled {...otherProps} buttonType={type} type={htmlType}>
      testd
    </ButtonStyled>
  )
}

Button.propTypes = {
  // Type
  type: PropTypes.oneOf(["default", "primary", "success", "dashed", "danger", "link"]),
}

export default Button;