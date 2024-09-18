import { ReactComponent as IconMenu } from "../simpleComponents/Icons/menuIcon.svg";

export function Icon({ size, color, name, className, fill }) {
  if (name === "IconMenu") {
    return (
      <IconMenu className={className} width={size} height={size} fill={fill} />
    );
  }
}
