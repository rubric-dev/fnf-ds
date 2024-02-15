import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M9.217 0c0 1.368.368 2.462 1.104 3.282C12.774 5.197 14 7.385 14 9.846c0 2.735-1.472 4.787-4.415 6.154 2.165-2.4 1.84-3.385-.368-6.4-2.342 1.2-1.967 2-1.592 3.6-.786 0-1.5 0-1.875-.4 0 .547.898 2 1.464 3.2-2.943-.82-6.092-5.744-4.988-6.154.736-.273 1.594-.137 2.575.41C3.575 5.333 5.047 1.915 9.217 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousFlameIcon = convertIcon(Icon, "miscellaneous-flame");
export default MiscellaneousFlameIcon;
