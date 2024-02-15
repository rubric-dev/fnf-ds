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
        d="M2.78998 4.61C2.65998 4.78 2.49998 4.91 2.30998 5.02C2.12998 5.13 1.91998 5.2 1.68998 5.25C1.45998 5.29 1.22998 5.32 0.97998 5.32V6.35H2.71998V12H3.97998V4H3.03998C2.99998 4.23 2.91998 4.44 2.78998 4.61ZM7.15998 9.92C7.33998 9.78 7.52998 9.64 7.73998 9.5C7.94998 9.35 8.15998 9.2 8.36998 9.05C8.57998 8.89 8.77998 8.72 8.97998 8.54C9.17998 8.36 9.34998 8.16 9.49998 7.95C9.64998 7.74 9.77998 7.5 9.86998 7.25C9.95998 7 9.99998 6.71 9.99998 6.4C9.99998 6.15 9.95998 5.88 9.87998 5.6C9.80998 5.31 9.67998 5.05 9.48998 4.81C9.30998 4.57 9.05998 4.37 8.75998 4.21C8.46998 4.06 8.09998 3.98 7.64998 3.98C7.23998 3.98 6.87998 4.06 6.56998 4.21C6.25998 4.37 5.98998 4.58 5.77998 4.85C5.55998 5.12 5.39998 5.44 5.28998 5.81C5.17998 6.18 5.12998 6.58 5.12998 7.01H6.31998C6.32998 6.74 6.34998 6.48 6.39998 6.24C6.43998 6 6.50998 5.79 6.60998 5.62C6.69998 5.44 6.82998 5.3 6.98998 5.2C7.14998 5.1 7.33998 5.05 7.57998 5.05C7.83998 5.05 8.04998 5.1 8.20998 5.19C8.35998 5.28 8.48998 5.4 8.57998 5.54C8.66998 5.68 8.72998 5.83 8.75998 5.99C8.78998 6.15 8.80998 6.3 8.80998 6.44C8.79998 6.75 8.72998 7.02 8.58998 7.26C8.44998 7.49 8.26998 7.71 8.05998 7.91C7.83998 8.12 7.59998 8.3 7.34998 8.48C7.08998 8.66 6.83998 8.84 6.59998 9.02C6.09998 9.38 5.70998 9.8 5.42998 10.29C5.14998 10.78 4.99998 11.35 4.98998 12H9.98998V10.85H6.42998C6.47998 10.68 6.56998 10.52 6.69998 10.36C6.82998 10.21 6.98998 10.07 7.15998 9.92ZM15.66 8.36C15.43 8.01 15.12 7.79 14.71 7.71V7.69C15.05 7.56 15.31 7.35 15.47 7.06C15.63 6.77 15.71 6.43 15.71 6.04C15.71 5.7 15.65 5.4 15.52 5.14C15.39 4.88 15.22 4.67 15.01 4.5C14.8 4.33 14.56 4.2 14.29 4.12C14.02 4.03 13.75 3.99 13.47 3.99C13.11 3.99 12.79 4.06 12.51 4.19C12.23 4.32 11.98 4.51 11.79 4.74C11.59 4.97 11.43 5.25 11.32 5.57C11.21 5.89 11.14 6.23 11.13 6.61H12.28C12.27 6.41 12.29 6.22 12.34 6.03C12.39 5.84 12.46 5.67 12.56 5.52C12.66 5.37 12.78 5.25 12.93 5.16C13.08 5.07 13.25 5.03 13.46 5.03C13.78 5.03 14.05 5.13 14.25 5.33C14.46 5.53 14.56 5.79 14.56 6.12C14.56 6.35 14.51 6.55 14.42 6.71C14.33 6.87 14.21 7 14.07 7.09C13.92 7.18 13.75 7.25 13.56 7.28C13.37 7.32 13.18 7.33 12.99 7.32V8.25C13.22 8.24 13.44 8.25 13.66 8.27C13.88 8.29 14.08 8.35 14.25 8.44C14.43 8.53 14.57 8.67 14.68 8.84C14.79 9.02 14.84 9.25 14.84 9.55C14.84 9.99 14.71 10.33 14.45 10.57C14.19 10.81 13.87 10.93 13.48 10.93C13.03 10.93 12.69 10.77 12.46 10.46C12.23 10.15 12.13 9.76 12.14 9.29H11C11.01 9.69 11.06 10.06 11.17 10.39C11.28 10.72 11.43 11 11.64 11.24C11.85 11.47 12.1 11.66 12.41 11.78C12.72 11.91 13.08 11.97 13.49 11.97C13.83 11.97 14.15 11.92 14.45 11.81C14.75 11.7 15.02 11.54 15.25 11.34C15.48 11.14 15.66 10.89 15.8 10.6C15.93 10.33 16 10 16 9.63C16 9.13 15.89 8.71 15.66 8.36Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionNumericalIcon = convertIcon(Icon, "action-numerical");
export default ActionNumericalIcon;
