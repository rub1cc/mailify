import * as React from "react";

type Props = React.ComponentPropsWithoutRef<"html">;

export interface HtmlProps extends Props {}

export const Html = ({
  lang = "en",
  dir = "ltr",
  children,
  ...props
}: HtmlProps) => {
  return (
    <html lang={lang} dir={dir} {...props}>
      {children}
    </html>
  );
};

Html.displayName = "Html";
