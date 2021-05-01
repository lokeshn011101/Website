import React, {FC} from 'react';

import {CustomIconProps} from './types';

const TargetIcon: FC<CustomIconProps> = ({
  className,
  color = 'currentColor',
  onClick,
  size = 24,
  state = 'default',
}) => {
  return (
    <svg className={className} width={size} height={size} fill={color} onClick={onClick} viewBox="0 0 32 32">
      <g clipPath="url(#clip0)">
        <path
          d="M32.1236 23.8124C29.1557 21.6005 28.3473 23.0926 28.8095 20.0373C29.2722 16.9819 29.8189 8.27924 23.336 8.64965C16.853 9.02006 16.5473 13.1972 11.3967 10.4291C6.24608 7.66106 -0.197378 14.9111 3.25842 19.4096C6.59324 23.7504 -4.70059 23.9786 2.79818 29.8942C3.35373 30.3321 3.99916 30.5789 4.66632 30.5789L30.1453 30.4978C31.4742 30.4978 32.2303 29.9893 33.0945 28.7924C33.852 27.7438 33.5848 24.9016 32.1236 23.8124Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M24.4505 24.0712C28.8708 19.5907 28.8708 12.3263 24.4505 7.8458C20.0302 3.36529 12.8634 3.36529 8.44313 7.8458C4.02282 12.3263 4.02282 19.5907 8.44313 24.0712C12.8634 28.5517 20.0302 28.5517 24.4505 24.0712Z"
          fill="#7D97F4"
        />
        <path
          d="M23.2774 22.8821C27.05 19.0581 27.05 12.8584 23.2774 9.03445C19.5049 5.21054 13.3884 5.21054 9.61592 9.03445C5.84339 12.8584 5.84339 19.0581 9.61592 22.8821C13.3884 26.706 19.5049 26.706 23.2774 22.8821Z"
          fill="#91B3FA"
        />
        <path
          d="M16.4471 26.432C10.7493 26.432 6.11426 21.7338 6.11426 15.9585C6.11426 10.1831 10.7498 5.48486 16.4471 5.48486C22.1449 5.48486 26.7799 10.1831 26.7799 15.9585C26.7799 21.7338 22.1444 26.432 16.4471 26.432ZM16.4471 6.84887C11.4915 6.84887 7.45994 10.9354 7.45994 15.9585C7.45994 20.9815 11.4915 25.068 16.4471 25.068C21.4026 25.068 25.4343 20.9815 25.4343 15.9585C25.4343 10.9354 21.4026 6.84887 16.4471 6.84887Z"
          fill="white"
        />
        <path
          d="M22.1161 17.5778C22.9989 14.4045 21.1766 11.1067 18.046 10.2119C14.9153 9.31713 11.6618 11.1642 10.779 14.3375C9.89628 17.5108 11.7186 20.8086 14.8492 21.7034C17.9798 22.5982 21.2333 20.7511 22.1161 17.5778Z"
          fill="#91B3FA"
        />
        <path
          d="M16.4477 22.6101C12.8294 22.6101 9.88574 19.6263 9.88574 15.9587C9.88574 12.2912 12.8294 9.30737 16.4477 9.30737C20.066 9.30737 23.0097 12.2912 23.0097 15.9587C23.0097 19.6263 20.066 22.6101 16.4477 22.6101ZM16.4477 10.6714C13.5712 10.6714 11.2314 13.0435 11.2314 15.9587C11.2314 18.874 13.5717 21.2461 16.4477 21.2461C19.3243 21.2461 21.664 18.874 21.664 15.9587C21.664 13.0435 19.3238 10.6714 16.4477 10.6714Z"
          fill="white"
        />
        <path
          d="M16.4465 18.2714C17.7065 18.2714 18.728 17.236 18.728 15.9588C18.728 14.6816 17.7065 13.6462 16.4465 13.6462C15.1865 13.6462 14.165 14.6816 14.165 15.9588C14.165 17.236 15.1865 18.2714 16.4465 18.2714Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M16.4468 18.9535C14.8176 18.9535 13.4922 17.61 13.4922 15.9587C13.4922 14.3074 14.8176 12.9639 16.4468 12.9639C18.0759 12.9639 19.4013 14.3074 19.4013 15.9587C19.4013 17.61 18.0759 18.9535 16.4468 18.9535ZM16.4468 14.3279C15.5593 14.3279 14.8379 15.0597 14.8379 15.9587C14.8379 16.8577 15.5598 17.5895 16.4468 17.5895C17.3337 17.5895 18.0556 16.8577 18.0556 15.9587C18.0556 15.0597 17.3337 14.3279 16.4468 14.3279Z"
          fill="white"
        />
        <path
          d="M30.1688 2.01416L30.474 2.323L18.9224 14.032L18.6172 13.7231L30.1688 2.01416Z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M18.8327 12.9767C19.0075 12.7995 19.8327 13.6354 19.6579 13.8131L16.5976 16.2518C16.4845 16.3419 16.3379 16.1932 16.4268 16.0786L18.8327 12.9767Z"
          fill="url(#paint3_linear)"
        />
        <path
          d="M30.467 2.33008L32.0211 2.48675L29.8878 4.64914C29.189 5.35743 28.2132 5.71082 27.2295 5.61171L30.467 2.33008Z"
          fill="url(#paint4_linear)"
        />
        <path
          d="M30.1619 2.02056L30.0074 0.445312L27.874 2.60771C27.1753 3.31599 26.8266 4.30508 26.9244 5.30219L30.1619 2.02056Z"
          fill="url(#paint5_linear)"
        />
        {state === 'default' && (
          <g style={{mixBlendMode: 'saturation'}}>
            <rect x="1" width={size} height={size} fill="white" />
          </g>
        )}
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0.172992"
          y1="19.6086"
          x2="33.5063"
          y2="19.6086"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAE3FE" />
          <stop offset="1" stopColor="#E9EFFD" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="24.8621"
          y1="4.63331"
          x2="2.73421"
          y2="33.6168"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E1473D" />
          <stop offset="1" stopColor="#E9605A" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="13.1973"
          y1="14.9815"
          x2="25.641"
          y2="7.55503"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#020039" />
          <stop offset="1" stopColor="#090056" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="17.3618"
          y1="14.9783"
          x2="26.2034"
          y2="7.74314"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4042E2" />
          <stop offset="1" stopColor="#4F52FF" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="28.9896"
          y1="4.49761"
          x2="41.0441"
          y2="-5.36673"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4042E2" />
          <stop offset="1" stopColor="#4F52FF" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="28.0232"
          y1="3.51828"
          x2="38.072"
          y2="-8.43383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4042E2" />
          <stop offset="1" stopColor="#4F52FF" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="32" height="32" fill="white" transform="translate(0.972656)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TargetIcon;