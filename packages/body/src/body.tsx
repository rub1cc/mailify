import * as React from "react";

type Props = React.ComponentPropsWithoutRef<"body">;

export interface BodyProps extends Props {}

export const Body = ({ children, ...props }: BodyProps) => {
  const styles = {
    wordSpacing: "normal",
    ...props.style,
  };
  return (
    <body {...props} style={styles}>
      {children}
    </body>
  );
};

Body.displayName = "Body";
