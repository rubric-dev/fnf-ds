import { BadgeColors } from "../@foundations";
import { ExtractToStyledProps } from "@fnf-ds/utils";

export type AvatarShape = "CIRCLE" | "SQUARE";

export type AvatarProps = {
  avatarColor?: BadgeColors;
  size?: number;
  shape?: AvatarShape;
  name?: string;
  showInitial?: boolean;
  src?: string;
};

export type AvatarStyleProps = ExtractToStyledProps<
  AvatarProps,
  "avatarColor" | "size" | "shape"
>;
