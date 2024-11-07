import type { IconProps } from "../../types";

export function PersonCard(props: IconProps): React.JSX.Element {
  const { sizeX = 14, sizeY = 14, color = "#FFFFFF", ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeX}
      height={sizeY}
      viewBox="0 0 16 16"
      fill="none"
      {...rest}
    >
      <g clipPath="url(#clip0_4542_43264)">
        <path
          d="M9.50001 4.99977C9.50001 4.86716 9.55269 4.73998 9.64645 4.64622C9.74022 4.55245 9.8674 4.49977 10 4.49977H15.5C15.6326 4.49977 15.7598 4.55245 15.8536 4.64622C15.9473 4.73998 16 4.86716 16 4.99977C16 5.13238 15.9473 5.25955 15.8536 5.35332C15.7598 5.44709 15.6326 5.49977 15.5 5.49977H10C9.8674 5.49977 9.74022 5.44709 9.64645 5.35332C9.55269 5.25955 9.50001 5.13238 9.50001 4.99977ZM15.5 7.49977H10C9.8674 7.49977 9.74022 7.55245 9.64645 7.64622C9.55269 7.73998 9.50001 7.86716 9.50001 7.99977C9.50001 8.13238 9.55269 8.25956 9.64645 8.35332C9.74022 8.44709 9.8674 8.49977 10 8.49977H15.5C15.6326 8.49977 15.7598 8.44709 15.8536 8.35332C15.9473 8.25956 16 8.13238 16 7.99977C16 7.86716 15.9473 7.73998 15.8536 7.64622C15.7598 7.55245 15.6326 7.49977 15.5 7.49977ZM15.5 10.4998H11.5C11.3674 10.4998 11.2402 10.5524 11.1465 10.6462C11.0527 10.74 11 10.8672 11 10.9998C11 11.1324 11.0527 11.2596 11.1465 11.3533C11.2402 11.4471 11.3674 11.4998 11.5 11.4998H15.5C15.6326 11.4998 15.7598 11.4471 15.8536 11.3533C15.9473 11.2596 16 11.1324 16 10.9998C16 10.8672 15.9473 10.74 15.8536 10.6462C15.7598 10.5524 15.6326 10.4998 15.5 10.4998ZM6.83063 8.87477C7.32686 8.49256 7.69102 7.96461 7.87202 7.36497C8.05302 6.76533 8.0418 6.12407 7.83992 5.53114C7.63804 4.9382 7.25563 4.42332 6.74633 4.05871C6.23702 3.6941 5.62637 3.49805 5.00001 3.49805C4.37365 3.49805 3.76299 3.6941 3.25369 4.05871C2.74438 4.42332 2.36198 4.9382 2.1601 5.53114C1.95822 6.12407 1.94699 6.76533 2.128 7.36497C2.309 7.96461 2.67315 8.49256 3.16938 8.87477C1.88063 9.42039 0.865008 10.5185 0.515633 11.8748C0.49655 11.9487 0.494642 12.026 0.510055 12.1007C0.525467 12.1755 0.557791 12.2457 0.604548 12.3061C0.651306 12.3664 0.711256 12.4152 0.779804 12.4488C0.848352 12.4824 0.923678 12.4998 1.00001 12.4998H9.00001C9.07634 12.4998 9.15166 12.4824 9.22021 12.4488C9.28876 12.4152 9.34871 12.3664 9.39547 12.3061C9.44222 12.2457 9.47455 12.1755 9.48996 12.1007C9.50537 12.026 9.50347 11.9487 9.48438 11.8748C9.13501 10.5179 8.11938 9.41977 6.83063 8.87477Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_4542_43264">
          <rect width="16" height="16" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
}
