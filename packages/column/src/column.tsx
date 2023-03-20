import * as React from "react";

type Props = React.ComponentPropsWithoutRef<"td">;

export interface ColumnProps extends Props {}

export const Column = ({ children, ...props }: ColumnProps) => {
  return <td {...props}>{children}</td>;
};

Column.displayName = "Column";
