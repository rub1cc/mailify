import * as React from "react";

type Props = React.ComponentPropsWithoutRef<"table">;

export interface ContainerProps extends Props {}

export const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <table
      {...props}
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      align="center"
    >
      <tbody>
        <tr style={{ width: "100%" }}>
          <td>{children}</td>
        </tr>
      </tbody>
    </table>
  );
};

Container.displayName = "Container";
