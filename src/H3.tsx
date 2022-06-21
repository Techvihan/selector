import { FC, HtmlHTMLAttributes } from "react";
import cn from "classnames";
type Props = HtmlHTMLAttributes<HTMLHtmlElement>;
const H3: FC<Props> = ({ children, className }) => {
  return (
    <>
      <h3 className={cn("text-lg font-bold", className)}>{children}</h3>
    </>
  );
};
H3.defaultProps = {};
export default H3;
