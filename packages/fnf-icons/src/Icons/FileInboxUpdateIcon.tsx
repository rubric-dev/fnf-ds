import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M8.1 2a5.023 5.023 0 0 0 0 2H3.66L1.95 8H4c.55 0 1 .45 1 1v1h6V9c0-.55.45-1 1-1h2.05c.708 0 1.352-.241 1.905-.645L16 7.46V13c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7.46l2.08-4.85C2.23 2.25 2.59 2 3 2h5.1ZM13 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FileInboxUpdateIcon = convertIcon(Icon, "file-inbox-update");
export default FileInboxUpdateIcon;
