import { ExtractToStyledProps } from "@fnf-ds/utils";
import { AnchorHTMLAttributes } from "react";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
  size?: 300 | 400 | 500;
};

export type StyledLinkProps = ExtractToStyledProps<LinkProps, "size">;
