import * as React from "react";

type As = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface TypographyProps {
  as?: As;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Typography = ({
  as: Tag = "p",
  children,
  ...props
}: TypographyProps) => {
  return <Tag {...props}>{children}</Tag>;
};

Typography.displayName = "Typography";
