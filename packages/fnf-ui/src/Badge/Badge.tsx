import * as Styled from "./Badge.styled";
import { BadgeProps } from "./Badge.types";
import React from "react";

export const Badge = ({
  type = "badge",
  badgeColor = "AUTO",
  text,
}: BadgeProps) => {
  return (
    <Styled.Badge $badgeColor={badgeColor} $type={type}>
      {text}
    </Styled.Badge>
  );
};
