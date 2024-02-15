import { ExtractToStyledProps } from "@fnf-ds/utils";
import React, { ButtonHTMLAttributes } from "react";

export type TableButtonVariant = "fill-primary" | "outline-secondary";

export type TableButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: TableButtonVariant;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
};

export type StyledTableButtonProps = ExtractToStyledProps<
  TableButtonProps,
  "variant" | "fullWidth"
> & {
  $isIconButton?: boolean;
};
