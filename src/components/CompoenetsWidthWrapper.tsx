import { ReactNode } from "react";
import classnames from "classnames"; // Correct import

interface Props {
  className?: string;
  children: ReactNode;
}

export default function ComponentsWidthWrapper({ className, children }: Props) {
  return (
    <div className={classnames("h-full mx-auto w-full max-w-screen-xl px-2 md:px-20", className)}>
      {children}
    </div>
  );
}
