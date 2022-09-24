import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResulvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], //расширения которые не нужно будет укаывать в импорте
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
