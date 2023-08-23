import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: ReactNode;
}

export default function ModalPortal({ children }: Props) {
  if (typeof window === "undefined") {
    return null;
  }
  const el = document.getElementById("portal") as Element;
  return ReactDOM.createPortal(children, el);
}
