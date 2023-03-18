import * as React from "react";

type Props = React.ComponentPropsWithoutRef<"head">;

export interface HeadProps extends Props {}

export const Head = ({ children, ...props }: HeadProps) => {
  return (
    <head {...props}>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {children}
    </head>
  );
};

Head.displayName = "Head";
