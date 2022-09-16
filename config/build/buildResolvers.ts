import { ResolveOptions } from "webpack";

export function buildResulvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], //расширения которые не нужно будет укаывать в импорте
  };
}
