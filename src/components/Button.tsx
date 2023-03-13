import { ChildrenProps } from "../modules/type";

const Button = ({ children, cssClass }: ChildrenProps) => {
  return <button className={cssClass}>{children}</button>;
};

export default Button;
