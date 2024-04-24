import classNames from "classnames";
import Link from "next/link";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: React.ElementType;
  iconPosition?: "left" | "right";
  className?: string;
  href?: string;
  fullWidth?: boolean;
}

const Button = (props: ButtonProps) => {
  const { children, icon: Icon, iconPosition = "left", className, href } = props;

  const classes = classNames(
    "bg-indigo-600 px-3 py-2 rounded-md text-sm text-white font-medium leading-6",
    {
      "flex-row-reverse": iconPosition === "right",
      "w-full": props.fullWidth,
    },
    className
  );

  const button = (
    <button type='button' className={classes} {...props}>
      {children}
      {Icon && <Icon className='h-6 w-6' />}
    </button>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
};

export default Button;
