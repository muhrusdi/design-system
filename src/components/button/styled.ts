import styled from "styled-components";
import { ButtonType } from "./button"

interface Props {
  buttonType: ButtonType | undefined,
}

export const ButtonStyled = styled.button(
  {
    lineHeight: 1.5715,
    position: "relative",
    textAlign: "center",
    border: "1px solid transparent",
    boxShadow: "0 2px 0 rgba(0, 0, 0, 0.015)",
    transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
    userSelect: "none",
    touchAction: "manipulation",
    height: 32,
    padding: "4px 15px",
    cursor: "pointer",
    fontSize: "14px",
    borderRadius: 2,
    color: "rgba(0, 0, 0, 0.65)",
    backgroundColor: "#fff",
    borderColor: "#d9d9d9",
  },
  (props: Props) => {
    switch (props.buttonType) {
      case "primary": {
        return {
          color: "#fff",
          backgroundColor: "#1890ff",
          borderColor: "#1890ff",
          textShadow: "0 -1px 0 rgba(0, 0, 0, 0.12)",
          boxShadow: "0 2px 0 rgba(0, 0, 0, 0.045)",
        }
      }
      case "success": {
        return {
          color: "#fff",
          backgroundColor: "rgb(70,201,58)",
          borderColor: "rgb(70,201,58)",
          textShadow: "0 -1px 0 rgba(0, 0, 0, 0.12)",
          boxShadow: "0 2px 0 rgba(0, 0, 0, 0.045)",
        }
      }
      default:
        return {}
    }
  }
);