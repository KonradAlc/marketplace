import classNames from "classnames";
import React from "react";

type PageProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
};

const PageContainer = (props: PageProps) => {
  const { children, fullWidth = false } = props;

  return <main className={classNames("mx-auto px-6 py-6 lg:py-14 lg:px-8 bg-gray-50", { ["max-w-7xl"]: !fullWidth })}>{children}</main>;
};

export default PageContainer;
