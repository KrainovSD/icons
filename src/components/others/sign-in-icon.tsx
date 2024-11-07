import React from "react";
import type { IconProps } from "../../types";

export function SignIn(props: IconProps): React.React.JSX.Element {
  const { sizeX = 14, sizeY = 14, color = "#FFFFFF", ...rest } = props;

  return (
    <svg
      width={sizeX}
      height={sizeY}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M11.0672 10.4422L7.94219 13.5672C7.88412 13.6253 7.81518 13.6713 7.73931 13.7027C7.66344 13.7342 7.58212 13.7503 7.5 13.7503C7.41788 13.7503 7.33656 13.7342 7.26069 13.7027C7.18482 13.6713 7.11588 13.6253 7.05781 13.5672C6.99974 13.5091 6.95368 13.4402 6.92225 13.3643C6.89083 13.2884 6.87465 13.2071 6.87465 13.125C6.87465 13.0429 6.89083 12.9616 6.92225 12.8857C6.95368 12.8098 6.99974 12.7409 7.05781 12.6828L9.11641 10.625H1.875C1.70924 10.625 1.55027 10.5592 1.43306 10.4419C1.31585 10.3247 1.25 10.1658 1.25 10C1.25 9.83424 1.31585 9.67527 1.43306 9.55806C1.55027 9.44085 1.70924 9.375 1.875 9.375H9.11641L7.05781 7.31719C6.94054 7.19991 6.87465 7.04085 6.87465 6.875C6.87465 6.70915 6.94054 6.55009 7.05781 6.43281C7.17509 6.31554 7.33415 6.24965 7.5 6.24965C7.66585 6.24965 7.82491 6.31554 7.94219 6.43281L11.0672 9.55781C11.1253 9.61586 11.1714 9.68479 11.2029 9.76066C11.2343 9.83654 11.2505 9.91787 11.2505 10C11.2505 10.0821 11.2343 10.1635 11.2029 10.2393C11.1714 10.3152 11.1253 10.3841 11.0672 10.4422ZM15.625 2.5H10.625C10.4592 2.5 10.3003 2.56585 10.1831 2.68306C10.0658 2.80027 10 2.95924 10 3.125C10 3.29076 10.0658 3.44973 10.1831 3.56694C10.3003 3.68415 10.4592 3.75 10.625 3.75H15V16.25H10.625C10.4592 16.25 10.3003 16.3158 10.1831 16.4331C10.0658 16.5503 10 16.7092 10 16.875C10 17.0408 10.0658 17.1997 10.1831 17.3169C10.3003 17.4342 10.4592 17.5 10.625 17.5H15.625C15.7908 17.5 15.9497 17.4342 16.0669 17.3169C16.1842 17.1997 16.25 17.0408 16.25 16.875V3.125C16.25 2.95924 16.1842 2.80027 16.0669 2.68306C15.9497 2.56585 15.7908 2.5 15.625 2.5Z"
        fill={color}
      />
    </svg>
  );
}