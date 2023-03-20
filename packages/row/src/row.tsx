import * as React from "react";

type Props = React.ComponentPropsWithoutRef<"table">;

export interface RowProps extends Props {}

export const Row = ({ children, ...props }: RowProps) => {
  return (
    <table
      {...props}
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      align="center"
    >
      <tbody style={{ width: "100%" }}>
        <tr style={{ width: "100%" }}>{children}</tr>
      </tbody>
    </table>
  );
};

Row.displayName = "Row";
