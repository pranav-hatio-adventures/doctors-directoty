import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  label: string;
  link_to?: string;
  onClick?: () => void;
  buttonClassName?: string;
}
const Button = (props: ButtonProps) => {
  const className = twMerge(
    "rounded-xl text-sm text-white py-3 px-3 bg-primary-color h-fit",
    props.buttonClassName
  );

  if (props.link_to)
    return (
      <Link to={props.link_to} className={className}>
        {props.label}
      </Link>
    );
  return (
    <button className={className} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
