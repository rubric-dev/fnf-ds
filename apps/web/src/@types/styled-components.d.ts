import "styled-components";
import { ParteTheme } from "@fnf-ds/ui";

declare module "styled-components" {
  interface DefaultTheme extends ParteTheme {}
}
