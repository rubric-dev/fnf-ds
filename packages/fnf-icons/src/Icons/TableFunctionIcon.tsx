import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.12 4.74H6.98C7.31 3.45 7.73 2.5 8.26 1.9C8.59 1.53 8.9 1.34 9.21 1.34C9.27 1.34 9.32 1.36 9.36 1.39C9.4 1.43 9.42 1.48 9.42 1.54C9.42 1.59 9.38 1.69 9.29 1.83C9.2 1.97 9.16 2.11 9.16 2.23C9.16 2.41 9.23 2.56 9.36 2.69C9.5 2.82 9.67 2.88 9.88 2.88C10.1 2.88 10.29 2.8 10.44 2.65C10.59 2.49 10.67 2.28 10.67 2.02C10.67 1.72 10.56 1.47 10.33 1.28C10.1 1.09 9.74 1 9.24 1C8.46 1 7.75 1.22 7.12 1.67C6.48 2.12 5.88 2.87 5.31 3.9C5.11 4.26 4.93 4.49 4.75 4.59C4.57 4.69 4.29 4.74 3.9 4.74L3.64 5.64H4.72L3.13 11.76C2.86 12.77 2.69 13.39 2.59 13.62C2.45 13.96 2.25 14.25 1.97 14.49C1.86 14.59 1.73 14.64 1.57 14.64C1.53 14.64 1.49 14.63 1.46 14.6L1.42 14.55C1.42 14.52 1.46 14.47 1.54 14.39C1.62 14.31 1.66 14.19 1.66 14.03C1.66 13.85 1.6 13.7 1.47 13.59C1.35 13.47 1.17 13.41 0.93 13.41C0.65 13.41 0.42 13.49 0.25 13.64C0.09 13.78 0 13.96 0 14.17C0 14.39 0.1 14.59 0.31 14.76C0.52 14.93 0.84 15.01 1.28 15.01C1.98 15.01 2.6 14.83 3.15 14.47C3.69 14.11 4.17 13.55 4.57 12.8C4.98 12.05 5.39 10.84 5.82 9.17L6.73 5.63H7.83L8.12 4.74ZM13.55 6.26C13.75 6.11 13.96 6.03 14.17 6.03C14.25 6.03 14.4 6.06 14.62 6.12C14.84 6.18 15.03 6.21 15.19 6.21C15.42 6.21 15.61 6.13 15.76 5.98C15.92 5.82 16 5.62 16 5.37C16 5.11 15.92 4.9 15.77 4.75C15.62 4.6 15.4 4.52 15.11 4.52C14.86 4.52 14.61 4.58 14.39 4.7C14.16 4.82 13.88 5.08 13.53 5.48C13.27 5.78 12.89 6.29 12.38 7.03C12.18 6.12 11.83 5.28 11.33 4.52L8.61 4.98L8.55 5.27C8.75 5.23 8.92 5.21 9.06 5.21C9.33 5.21 9.55 5.32 9.73 5.55C10.01 5.91 10.4 7 10.9 8.81C10.51 9.33 10.24 9.66 10.1 9.82C9.86 10.08 9.66 10.24 9.51 10.32C9.39 10.38 9.26 10.41 9.1 10.41C8.99 10.41 8.8 10.35 8.54 10.23C8.36 10.15 8.2 10.11 8.06 10.11C7.79 10.11 7.58 10.19 7.4 10.36C7.23 10.53 7.14 10.74 7.14 11C7.14 11.25 7.22 11.44 7.38 11.6C7.54 11.75 7.75 11.83 8.02 11.83C8.28 11.83 8.52 11.78 8.75 11.67C8.98 11.56 9.27 11.33 9.61 10.98C9.96 10.63 10.43 10.08 11.04 9.31C11.27 10.04 11.48 10.56 11.65 10.89C11.82 11.22 12.02 11.46 12.24 11.6C12.46 11.75 12.74 11.82 13.07 11.82C13.39 11.82 13.72 11.71 14.05 11.48C14.49 11.18 14.93 10.67 15.39 9.95L15.13 9.8C14.82 10.23 14.59 10.5 14.44 10.6C14.34 10.67 14.22 10.7 14.09 10.7C13.93 10.7 13.77 10.6 13.61 10.4C13.34 10.06 12.99 9.13 12.55 7.6C12.95 6.92 13.28 6.47 13.55 6.26Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableFunctionIcon = convertIcon(Icon, "table-function");
export default TableFunctionIcon;
