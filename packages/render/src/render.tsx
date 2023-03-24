import * as ReactDomServer from "react-dom/server";
import pretty from "pretty";

export interface RenderOptions {
  minify?: boolean;
}

export const renderToHtml = (
  element: React.ReactElement,
  options?: RenderOptions
) => {
  const doctype = "<!DOCTYPE html>";
  const html = ReactDomServer.renderToStaticMarkup(element);
  const result = doctype + html;
  if (options?.minify) {
    return result;
  }
  return pretty(result);
};
