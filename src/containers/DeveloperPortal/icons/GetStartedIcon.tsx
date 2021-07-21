import React, {FC} from 'react';

const GetStartedIcon: FC<{size?: number}> = ({size = 40}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="get-started-path-1-outside-1"
        maskUnits="userSpaceOnUse"
        x="1"
        y="1"
        width="37"
        height="37"
        fill="black"
      >
        <rect fill="white" x="1" y="1" width="37" height="37" />
        <path d="M21.64 37H17.36C17.131 36.9983 16.9094 36.9188 16.7316 36.7745C16.5537 36.6302 16.4303 36.4297 16.3815 36.206L15.918 33.8925C14.4883 33.5365 13.1201 32.9682 11.859 32.2065L9.897 33.511C9.70615 33.6385 9.47726 33.6964 9.24875 33.6751C9.02023 33.6538 8.806 33.5546 8.642 33.394L5.616 30.3635C5.45284 30.1982 5.35209 29.9813 5.33093 29.75C5.30978 29.5187 5.36953 29.2872 5.5 29.095L6.8 27.145C6.03668 25.8838 5.46875 24.5143 5.1155 23.083L2.8 22.62C2.57507 22.572 2.37322 22.4488 2.22778 22.2706C2.08234 22.0924 2.00199 21.87 2 21.64V17.36C2.00166 17.131 2.08118 16.9094 2.22547 16.7316C2.36976 16.5537 2.57026 16.4303 2.794 16.3815L5.112 15.9165C5.46532 14.4855 6.03308 13.1162 6.796 11.855L5.489 9.9C5.36127 9.70906 5.30317 9.47996 5.32448 9.25122C5.34578 9.02249 5.4452 8.80806 5.606 8.644L8.6365 5.614C8.80151 5.45057 9.01812 5.34947 9.24937 5.32795C9.48062 5.30643 9.71217 5.36582 9.9045 5.496L11.8545 6.7985C13.1165 6.03547 14.4859 5.46629 15.917 5.11L16.38 2.8C16.428 2.57507 16.5512 2.37322 16.7294 2.22778C16.9076 2.08234 17.13 2.00199 17.36 2H21.64C21.869 2.00166 22.0906 2.08118 22.2684 2.22547C22.4463 2.36976 22.5697 2.57026 22.6185 2.794L23.082 5.1075C24.5154 5.46229 25.887 6.03191 27.15 6.797L29.1 5.4895C29.2909 5.36177 29.52 5.30367 29.7488 5.32498C29.9775 5.34628 30.1919 5.4457 30.356 5.6065L33.3865 8.6365C33.5504 8.80121 33.6519 9.01789 33.6734 9.24929C33.695 9.48069 33.6352 9.71236 33.5045 9.9045L32.2045 11.859C32.9665 13.1198 33.5348 14.4879 33.8905 15.9175L36.196 16.38C36.4217 16.4272 36.6244 16.5501 36.7707 16.7283C36.9169 16.9066 36.9978 17.1295 37 17.36V21.64C36.9983 21.869 36.9188 22.0906 36.7745 22.2684C36.6302 22.4463 36.4297 22.5697 36.206 22.6185L33.8925 23.0825C33.5368 24.5121 32.9685 25.8802 32.2065 27.141L33.5115 29.103C33.6389 29.2939 33.6968 29.5228 33.6754 29.7513C33.654 29.9799 33.5546 30.1941 33.394 30.358L30.3635 33.3885C30.1984 33.5518 29.9818 33.6529 29.7506 33.6744C29.5194 33.6959 29.2879 33.6366 29.0955 33.5065L27.1455 32.203C25.8832 32.9679 24.5126 33.5375 23.08 33.8925L22.62 36.2C22.572 36.4249 22.4488 36.6268 22.2706 36.7722C22.0924 36.9177 21.87 36.998 21.64 37ZM11.85 31.1115C11.9436 31.1112 12.0353 31.1376 12.1145 31.1875C13.4475 32.0342 14.9165 32.6446 16.457 32.992C16.5513 33.0133 16.6373 33.0615 16.7047 33.1307C16.7722 33.1999 16.8181 33.2872 16.837 33.382L17.3605 36H21.6355L22.1645 33.382C22.1834 33.2872 22.2294 33.1998 22.297 33.1306C22.3645 33.0614 22.4507 33.0132 22.545 32.992C24.0855 32.6464 25.5543 32.036 26.886 31.188C26.969 31.1373 27.0647 31.1111 27.1619 31.1122C27.2592 31.1134 27.3542 31.1419 27.436 31.1945L29.6555 32.6795L32.6795 29.6565L31.2215 27.469C31.2027 27.4462 31.1859 27.4218 31.1715 27.396C31.128 27.3178 31.1062 27.2294 31.1085 27.14C31.1108 27.0505 31.137 26.9633 31.1845 26.8875C32.0314 25.5546 32.6419 24.0856 32.989 22.545C33.0103 22.4507 33.0585 22.3647 33.1277 22.2973C33.1969 22.2298 33.2842 22.1839 33.379 22.165L36 21.6395V17.36L33.382 16.835C33.2872 16.8161 33.1999 16.7702 33.1307 16.7027C33.0615 16.6353 33.0133 16.5493 32.992 16.455C32.6449 14.9144 32.0344 13.4454 31.1875 12.1125C31.1397 12.0369 31.113 11.9498 31.1102 11.8604C31.1075 11.7709 31.1288 11.6824 31.172 11.604C31.1894 11.5721 31.2104 11.5422 31.2345 11.515L32.6785 9.3435L29.656 6.3185L27.438 7.8055C27.3562 7.85823 27.2612 7.88681 27.1639 7.88796C27.0666 7.88911 26.971 7.86278 26.888 7.812C25.5563 6.96397 24.0875 6.35357 22.547 6.008C22.4527 5.98675 22.3665 5.9386 22.299 5.86938C22.2314 5.80016 22.1854 5.71284 22.1665 5.618L21.6395 3H17.36L16.8355 5.618C16.8166 5.71278 16.7707 5.80005 16.7032 5.86927C16.6358 5.93848 16.5498 5.98667 16.4555 6.008C14.915 6.35535 13.446 6.9658 12.113 7.8125C12.0313 7.86426 11.9363 7.89119 11.8395 7.89004C11.7428 7.88888 11.6485 7.85969 11.568 7.806L9.343 6.321L6.3185 9.3435L7.806 11.5675C7.85969 11.648 7.88889 11.7423 7.89004 11.839C7.89119 11.9358 7.86426 12.0308 7.8125 12.1125C6.96584 13.4444 6.3568 14.9132 6.0125 16.4535C5.99038 16.5532 5.93827 16.6437 5.86319 16.7129C5.78811 16.782 5.69365 16.8266 5.5925 16.8405L3 17.3605V21.64L5.6095 22.163C5.70699 22.1802 5.79724 22.2258 5.869 22.294C5.94076 22.3622 5.99084 22.45 6.013 22.5465C6.35732 24.0867 6.96636 25.5555 7.813 26.8875C7.86473 26.9691 7.89169 27.064 7.89063 27.1606C7.88956 27.2573 7.86051 27.3515 7.807 27.432L6.327 29.6565L9.3445 32.682L11.532 31.223C11.6219 31.1509 11.7337 31.1116 11.849 31.1115H11.85Z" />
      </mask>
      <path
        d="M21.64 37H17.36C17.131 36.9983 16.9094 36.9188 16.7316 36.7745C16.5537 36.6302 16.4303 36.4297 16.3815 36.206L15.918 33.8925C14.4883 33.5365 13.1201 32.9682 11.859 32.2065L9.897 33.511C9.70615 33.6385 9.47726 33.6964 9.24875 33.6751C9.02023 33.6538 8.806 33.5546 8.642 33.394L5.616 30.3635C5.45284 30.1982 5.35209 29.9813 5.33093 29.75C5.30978 29.5187 5.36953 29.2872 5.5 29.095L6.8 27.145C6.03668 25.8838 5.46875 24.5143 5.1155 23.083L2.8 22.62C2.57507 22.572 2.37322 22.4488 2.22778 22.2706C2.08234 22.0924 2.00199 21.87 2 21.64V17.36C2.00166 17.131 2.08118 16.9094 2.22547 16.7316C2.36976 16.5537 2.57026 16.4303 2.794 16.3815L5.112 15.9165C5.46532 14.4855 6.03308 13.1162 6.796 11.855L5.489 9.9C5.36127 9.70906 5.30317 9.47996 5.32448 9.25122C5.34578 9.02249 5.4452 8.80806 5.606 8.644L8.6365 5.614C8.80151 5.45057 9.01812 5.34947 9.24937 5.32795C9.48062 5.30643 9.71217 5.36582 9.9045 5.496L11.8545 6.7985C13.1165 6.03547 14.4859 5.46629 15.917 5.11L16.38 2.8C16.428 2.57507 16.5512 2.37322 16.7294 2.22778C16.9076 2.08234 17.13 2.00199 17.36 2H21.64C21.869 2.00166 22.0906 2.08118 22.2684 2.22547C22.4463 2.36976 22.5697 2.57026 22.6185 2.794L23.082 5.1075C24.5154 5.46229 25.887 6.03191 27.15 6.797L29.1 5.4895C29.2909 5.36177 29.52 5.30367 29.7488 5.32498C29.9775 5.34628 30.1919 5.4457 30.356 5.6065L33.3865 8.6365C33.5504 8.80121 33.6519 9.01789 33.6734 9.24929C33.695 9.48069 33.6352 9.71236 33.5045 9.9045L32.2045 11.859C32.9665 13.1198 33.5348 14.4879 33.8905 15.9175L36.196 16.38C36.4217 16.4272 36.6244 16.5501 36.7707 16.7283C36.9169 16.9066 36.9978 17.1295 37 17.36V21.64C36.9983 21.869 36.9188 22.0906 36.7745 22.2684C36.6302 22.4463 36.4297 22.5697 36.206 22.6185L33.8925 23.0825C33.5368 24.5121 32.9685 25.8802 32.2065 27.141L33.5115 29.103C33.6389 29.2939 33.6968 29.5228 33.6754 29.7513C33.654 29.9799 33.5546 30.1941 33.394 30.358L30.3635 33.3885C30.1984 33.5518 29.9818 33.6529 29.7506 33.6744C29.5194 33.6959 29.2879 33.6366 29.0955 33.5065L27.1455 32.203C25.8832 32.9679 24.5126 33.5375 23.08 33.8925L22.62 36.2C22.572 36.4249 22.4488 36.6268 22.2706 36.7722C22.0924 36.9177 21.87 36.998 21.64 37ZM11.85 31.1115C11.9436 31.1112 12.0353 31.1376 12.1145 31.1875C13.4475 32.0342 14.9165 32.6446 16.457 32.992C16.5513 33.0133 16.6373 33.0615 16.7047 33.1307C16.7722 33.1999 16.8181 33.2872 16.837 33.382L17.3605 36H21.6355L22.1645 33.382C22.1834 33.2872 22.2294 33.1998 22.297 33.1306C22.3645 33.0614 22.4507 33.0132 22.545 32.992C24.0855 32.6464 25.5543 32.036 26.886 31.188C26.969 31.1373 27.0647 31.1111 27.1619 31.1122C27.2592 31.1134 27.3542 31.1419 27.436 31.1945L29.6555 32.6795L32.6795 29.6565L31.2215 27.469C31.2027 27.4462 31.1859 27.4218 31.1715 27.396C31.128 27.3178 31.1062 27.2294 31.1085 27.14C31.1108 27.0505 31.137 26.9633 31.1845 26.8875C32.0314 25.5546 32.6419 24.0856 32.989 22.545C33.0103 22.4507 33.0585 22.3647 33.1277 22.2973C33.1969 22.2298 33.2842 22.1839 33.379 22.165L36 21.6395V17.36L33.382 16.835C33.2872 16.8161 33.1999 16.7702 33.1307 16.7027C33.0615 16.6353 33.0133 16.5493 32.992 16.455C32.6449 14.9144 32.0344 13.4454 31.1875 12.1125C31.1397 12.0369 31.113 11.9498 31.1102 11.8604C31.1075 11.7709 31.1288 11.6824 31.172 11.604C31.1894 11.5721 31.2104 11.5422 31.2345 11.515L32.6785 9.3435L29.656 6.3185L27.438 7.8055C27.3562 7.85823 27.2612 7.88681 27.1639 7.88796C27.0666 7.88911 26.971 7.86278 26.888 7.812C25.5563 6.96397 24.0875 6.35357 22.547 6.008C22.4527 5.98675 22.3665 5.9386 22.299 5.86938C22.2314 5.80016 22.1854 5.71284 22.1665 5.618L21.6395 3H17.36L16.8355 5.618C16.8166 5.71278 16.7707 5.80005 16.7032 5.86927C16.6358 5.93848 16.5498 5.98667 16.4555 6.008C14.915 6.35535 13.446 6.9658 12.113 7.8125C12.0313 7.86426 11.9363 7.89119 11.8395 7.89004C11.7428 7.88888 11.6485 7.85969 11.568 7.806L9.343 6.321L6.3185 9.3435L7.806 11.5675C7.85969 11.648 7.88889 11.7423 7.89004 11.839C7.89119 11.9358 7.86426 12.0308 7.8125 12.1125C6.96584 13.4444 6.3568 14.9132 6.0125 16.4535C5.99038 16.5532 5.93827 16.6437 5.86319 16.7129C5.78811 16.782 5.69365 16.8266 5.5925 16.8405L3 17.3605V21.64L5.6095 22.163C5.70699 22.1802 5.79724 22.2258 5.869 22.294C5.94076 22.3622 5.99084 22.45 6.013 22.5465C6.35732 24.0867 6.96636 25.5555 7.813 26.8875C7.86473 26.9691 7.89169 27.064 7.89063 27.1606C7.88956 27.2573 7.86051 27.3515 7.807 27.432L6.327 29.6565L9.3445 32.682L11.532 31.223C11.6219 31.1509 11.7337 31.1116 11.849 31.1115H11.85Z"
        fill="#EEF2F6"
      />
      <path
        d="M21.64 37H17.36C17.131 36.9983 16.9094 36.9188 16.7316 36.7745C16.5537 36.6302 16.4303 36.4297 16.3815 36.206L15.918 33.8925C14.4883 33.5365 13.1201 32.9682 11.859 32.2065L9.897 33.511C9.70615 33.6385 9.47726 33.6964 9.24875 33.6751C9.02023 33.6538 8.806 33.5546 8.642 33.394L5.616 30.3635C5.45284 30.1982 5.35209 29.9813 5.33093 29.75C5.30978 29.5187 5.36953 29.2872 5.5 29.095L6.8 27.145C6.03668 25.8838 5.46875 24.5143 5.1155 23.083L2.8 22.62C2.57507 22.572 2.37322 22.4488 2.22778 22.2706C2.08234 22.0924 2.00199 21.87 2 21.64V17.36C2.00166 17.131 2.08118 16.9094 2.22547 16.7316C2.36976 16.5537 2.57026 16.4303 2.794 16.3815L5.112 15.9165C5.46532 14.4855 6.03308 13.1162 6.796 11.855L5.489 9.9C5.36127 9.70906 5.30317 9.47996 5.32448 9.25122C5.34578 9.02249 5.4452 8.80806 5.606 8.644L8.6365 5.614C8.80151 5.45057 9.01812 5.34947 9.24937 5.32795C9.48062 5.30643 9.71217 5.36582 9.9045 5.496L11.8545 6.7985C13.1165 6.03547 14.4859 5.46629 15.917 5.11L16.38 2.8C16.428 2.57507 16.5512 2.37322 16.7294 2.22778C16.9076 2.08234 17.13 2.00199 17.36 2H21.64C21.869 2.00166 22.0906 2.08118 22.2684 2.22547C22.4463 2.36976 22.5697 2.57026 22.6185 2.794L23.082 5.1075C24.5154 5.46229 25.887 6.03191 27.15 6.797L29.1 5.4895C29.2909 5.36177 29.52 5.30367 29.7488 5.32498C29.9775 5.34628 30.1919 5.4457 30.356 5.6065L33.3865 8.6365C33.5504 8.80121 33.6519 9.01789 33.6734 9.24929C33.695 9.48069 33.6352 9.71236 33.5045 9.9045L32.2045 11.859C32.9665 13.1198 33.5348 14.4879 33.8905 15.9175L36.196 16.38C36.4217 16.4272 36.6244 16.5501 36.7707 16.7283C36.9169 16.9066 36.9978 17.1295 37 17.36V21.64C36.9983 21.869 36.9188 22.0906 36.7745 22.2684C36.6302 22.4463 36.4297 22.5697 36.206 22.6185L33.8925 23.0825C33.5368 24.5121 32.9685 25.8802 32.2065 27.141L33.5115 29.103C33.6389 29.2939 33.6968 29.5228 33.6754 29.7513C33.654 29.9799 33.5546 30.1941 33.394 30.358L30.3635 33.3885C30.1984 33.5518 29.9818 33.6529 29.7506 33.6744C29.5194 33.6959 29.2879 33.6366 29.0955 33.5065L27.1455 32.203C25.8832 32.9679 24.5126 33.5375 23.08 33.8925L22.62 36.2C22.572 36.4249 22.4488 36.6268 22.2706 36.7722C22.0924 36.9177 21.87 36.998 21.64 37ZM11.85 31.1115C11.9436 31.1112 12.0353 31.1376 12.1145 31.1875C13.4475 32.0342 14.9165 32.6446 16.457 32.992C16.5513 33.0133 16.6373 33.0615 16.7047 33.1307C16.7722 33.1999 16.8181 33.2872 16.837 33.382L17.3605 36H21.6355L22.1645 33.382C22.1834 33.2872 22.2294 33.1998 22.297 33.1306C22.3645 33.0614 22.4507 33.0132 22.545 32.992C24.0855 32.6464 25.5543 32.036 26.886 31.188C26.969 31.1373 27.0647 31.1111 27.1619 31.1122C27.2592 31.1134 27.3542 31.1419 27.436 31.1945L29.6555 32.6795L32.6795 29.6565L31.2215 27.469C31.2027 27.4462 31.1859 27.4218 31.1715 27.396C31.128 27.3178 31.1062 27.2294 31.1085 27.14C31.1108 27.0505 31.137 26.9633 31.1845 26.8875C32.0314 25.5546 32.6419 24.0856 32.989 22.545C33.0103 22.4507 33.0585 22.3647 33.1277 22.2973C33.1969 22.2298 33.2842 22.1839 33.379 22.165L36 21.6395V17.36L33.382 16.835C33.2872 16.8161 33.1999 16.7702 33.1307 16.7027C33.0615 16.6353 33.0133 16.5493 32.992 16.455C32.6449 14.9144 32.0344 13.4454 31.1875 12.1125C31.1397 12.0369 31.113 11.9498 31.1102 11.8604C31.1075 11.7709 31.1288 11.6824 31.172 11.604C31.1894 11.5721 31.2104 11.5422 31.2345 11.515L32.6785 9.3435L29.656 6.3185L27.438 7.8055C27.3562 7.85823 27.2612 7.88681 27.1639 7.88796C27.0666 7.88911 26.971 7.86278 26.888 7.812C25.5563 6.96397 24.0875 6.35357 22.547 6.008C22.4527 5.98675 22.3665 5.9386 22.299 5.86938C22.2314 5.80016 22.1854 5.71284 22.1665 5.618L21.6395 3H17.36L16.8355 5.618C16.8166 5.71278 16.7707 5.80005 16.7032 5.86927C16.6358 5.93848 16.5498 5.98667 16.4555 6.008C14.915 6.35535 13.446 6.9658 12.113 7.8125C12.0313 7.86426 11.9363 7.89119 11.8395 7.89004C11.7428 7.88888 11.6485 7.85969 11.568 7.806L9.343 6.321L6.3185 9.3435L7.806 11.5675C7.85969 11.648 7.88889 11.7423 7.89004 11.839C7.89119 11.9358 7.86426 12.0308 7.8125 12.1125C6.96584 13.4444 6.3568 14.9132 6.0125 16.4535C5.99038 16.5532 5.93827 16.6437 5.86319 16.7129C5.78811 16.782 5.69365 16.8266 5.5925 16.8405L3 17.3605V21.64L5.6095 22.163C5.70699 22.1802 5.79724 22.2258 5.869 22.294C5.94076 22.3622 5.99084 22.45 6.013 22.5465C6.35732 24.0867 6.96636 25.5555 7.813 26.8875C7.86473 26.9691 7.89169 27.064 7.89063 27.1606C7.88956 27.2573 7.86051 27.3515 7.807 27.432L6.327 29.6565L9.3445 32.682L11.532 31.223C11.6219 31.1509 11.7337 31.1116 11.849 31.1115H11.85Z"
        stroke="#EEF2F6"
        strokeWidth="0.6"
        mask="url(#get-started-path-1-outside-1)"
      />
      <path
        d="M24.1331 28.9191L24.1983 29.0542C24.6884 28.8176 25.1572 28.5392 25.5995 28.222L25.5996 28.2221L25.6039 28.2187C25.7371 28.1155 25.825 27.9647 25.8492 27.798C25.8733 27.6313 25.8318 27.4617 25.7334 27.325C25.6349 27.1883 25.4873 27.0952 25.3215 27.0652C25.1557 27.0352 24.9848 27.0708 24.8447 27.1644L24.8447 27.1643L24.8406 27.1673C24.4594 27.4411 24.0552 27.6812 23.6325 27.885L23.6322 27.8851C23.4998 27.9493 23.393 28.0564 23.3294 28.1891C23.2658 28.3218 23.2491 28.4721 23.282 28.6155C23.3149 28.7589 23.3955 28.8869 23.5106 28.9786C23.6257 29.0702 23.7685 29.1201 23.9156 29.1201L23.9163 29.1201C24.0144 29.1196 24.111 29.097 24.1991 29.0538L24.1331 28.9191ZM24.1331 28.9191C24.0654 28.9523 23.991 28.9697 23.9156 28.9701M24.1331 28.9191C24.6155 28.6863 25.0768 28.4123 25.5121 28.1001C25.6145 28.0208 25.6822 27.9047 25.7007 27.7765C25.7193 27.6483 25.6874 27.5178 25.6116 27.4127C25.5359 27.3075 25.4223 27.2359 25.2948 27.2128C25.1673 27.1898 25.0358 27.2171 24.9281 27.2891C24.5399 27.568 24.1282 27.8126 23.6976 28.0201M23.9156 28.9701C23.8024 28.9701 23.6926 28.9317 23.604 28.8612C23.5155 28.7907 23.4535 28.6923 23.4282 28.582C23.4029 28.4716 23.4157 28.356 23.4647 28.2539C23.5136 28.1519 23.5957 28.0695 23.6976 28.0201M23.9156 28.9701V28.9701V28.9701ZM23.6976 28.0201L23.6976 28.0201L23.6976 28.0201Z"
        fill="#EEF2F6"
        stroke="#EEF2F6"
        strokeWidth="0.3"
      />
      <path
        d="M30.1337 20.03L30.1336 20.0327C30.1203 20.2031 30.0412 20.3616 29.9131 20.4748C29.7849 20.5879 29.6178 20.6468 29.4471 20.6388L29.4447 20.6387V20.6387C29.2727 20.628 29.1119 20.5494 28.9978 20.4202C28.8837 20.291 28.8256 20.1218 28.8363 19.9498C28.8363 19.9498 28.8363 19.9497 28.8363 19.9497L28.986 19.959L30.1337 20.03ZM30.1337 20.03C30.1444 19.8517 30.15 19.6787 30.15 19.5C30.15 17.3936 29.5254 15.3346 28.3552 13.5832C27.1849 11.8318 25.5216 10.4668 23.5756 9.66069C21.6295 8.85461 19.4882 8.64371 17.4223 9.05464C15.3564 9.46557 13.4587 10.4799 11.9693 11.9693C10.4799 13.4587 9.46557 15.3564 9.05464 17.4223C8.64371 19.4882 8.85461 21.6295 9.66069 23.5756C10.4668 25.5216 11.8318 27.1849 13.5832 28.3552C15.3346 29.5254 17.3936 30.15 19.5 30.15C19.6734 30.15 19.8466 30.1449 20.0204 30.1358L20.0219 30.1357C20.1072 30.1304 20.1906 30.1083 20.2674 30.0707L20.2015 29.936L30.1337 20.03Z"
        fill="#EEF2F6"
        stroke="#EEF2F6"
        strokeWidth="0.3"
      />
      <path
        d="M27.1671 24.8398C27.0971 24.9368 27.0553 25.0513 27.0462 25.1706C27.0371 25.2899 27.0612 25.4095 27.1157 25.516C27.1702 25.6226 27.2531 25.712 27.3552 25.7744C27.4573 25.8369 27.5746 25.8699 27.6943 25.8699L27.6944 25.8699L28.2216 25.5995C28.5371 25.1613 28.8152 24.6973 29.053 24.2125L29.0532 24.2121C29.1283 24.0577 29.1393 23.8798 29.0837 23.7174C29.0281 23.5549 28.9106 23.4211 28.7566 23.345C28.6027 23.2689 28.425 23.2569 28.2622 23.3114C28.0994 23.366 27.9648 23.4827 27.8878 23.6362L27.8878 23.6362L27.8871 23.6374C27.6812 24.0577 27.4404 24.4599 27.1671 24.8398ZM27.1671 24.8398C27.1671 24.8397 27.1671 24.8397 27.1672 24.8397L27.2888 24.9274M27.1671 24.8398C27.1671 24.8398 27.1671 24.8398 27.167 24.8399L27.2888 24.9274M27.2888 24.9274C27.235 25.0021 27.2028 25.0902 27.1958 25.182C27.1888 25.2738 27.2073 25.3657 27.2492 25.4477C27.2912 25.5297 27.3549 25.5984 27.4334 25.6465C27.512 25.6945 27.6023 25.7199 27.6943 25.7199L28.0218 23.7034C27.8122 24.1313 27.567 24.5407 27.2888 24.9274Z"
        fill="#EEF2F6"
        stroke="#EEF2F6"
        strokeWidth="0.3"
      />
      <path
        d="M22.1 21.9744L22.0141 22.0974C22.1231 22.1734 22.2526 22.2143 22.3855 22.2144C22.5406 22.215 22.6908 22.1602 22.809 22.0597L22.8091 22.0597L22.1 21.9744ZM22.1 21.9744L22.0141 22.0974C21.9052 22.0213 21.8221 21.9136 21.7762 21.7889C21.7303 21.6641 21.7238 21.5283 21.7574 21.3997C21.7911 21.2712 21.8634 21.156 21.9645 21.0698L21.9646 21.0697L23.8094 19.4999L21.9646 17.9302L21.9645 17.93C21.8995 17.8745 21.8461 17.8068 21.8073 17.7307C21.7684 17.6546 21.745 17.5716 21.7383 17.4864C21.7316 17.4012 21.7417 17.3156 21.768 17.2343C21.7944 17.153 21.8365 17.0778 21.892 17.0128C21.9475 16.9478 22.0152 16.8944 22.0913 16.8556C22.1674 16.8168 22.2504 16.7933 22.3356 16.7866C22.4208 16.7799 22.5065 16.79 22.5877 16.8164C22.6689 16.8427 22.7442 16.8848 22.8091 16.9402L22.1 21.9744Z"
        fill="#EEF2F6"
        stroke="#EEF2F6"
        strokeWidth="0.3"
      />
      <path
        d="M16.1926 22.0597L16.1925 22.0596L13.7666 19.9952C13.7665 19.9952 13.7665 19.9952 13.7665 19.9952C13.6947 19.9341 13.6371 19.8583 13.5975 19.7728C13.558 19.6872 13.5375 19.5941 13.5375 19.4999C13.5375 19.4057 13.558 19.3126 13.5975 19.2271C13.6371 19.1416 13.6947 19.0657 13.7665 19.0047C13.7665 19.0047 13.7665 19.0046 13.7666 19.0046L16.1923 16.9403C16.1924 16.9403 16.1924 16.9403 16.1924 16.9403L16.1925 16.9402L16.1926 22.0597ZM16.1926 22.0597C16.3103 22.1598 16.4598 22.2146 16.6143 22.2144M16.1926 22.0597L15.1907 19.5L17.0354 21.0697L17.0355 21.0698C17.1367 21.156 17.209 21.2712 17.2426 21.3997C17.2763 21.5283 17.2697 21.6641 17.2238 21.7889C17.1779 21.9136 17.0949 22.0213 16.9859 22.0974C16.8769 22.1735 16.7472 22.2143 16.6143 22.2144M16.6143 22.2144L16.6142 22.0644M16.6143 22.2144C16.6144 22.2144 16.6144 22.2144 16.6144 22.2144L16.6142 22.0644M16.6142 22.0644C16.4953 22.0646 16.3803 22.0224 16.2897 21.9454L16.9382 21.1839C17.016 21.2502 17.0716 21.3388 17.0975 21.4377C17.1234 21.5367 17.1184 21.6411 17.0831 21.7371C17.0478 21.833 16.9839 21.9159 16.9001 21.9744C16.8162 22.0329 16.7165 22.0643 16.6142 22.0644Z"
        fill="#EEF2F6"
        stroke="#EEF2F6"
        strokeWidth="0.3"
      />
      <path
        d="M17.8152 24.6926L17.8146 24.6926C17.7376 24.6923 17.6612 24.6785 17.589 24.6518L17.5889 24.6517C17.4273 24.5918 17.2961 24.4701 17.2242 24.3135C17.1523 24.1569 17.1456 23.9781 17.2054 23.8165L17.2055 23.8164L20.576 14.7319L20.5761 14.7316C20.6059 14.6516 20.6513 14.5783 20.7095 14.5158C20.7677 14.4533 20.8377 14.4029 20.9154 14.3674C20.993 14.332 21.077 14.3122 21.1623 14.3091C21.2477 14.3061 21.3328 14.3199 21.4128 14.3498C21.4928 14.3797 21.5662 14.425 21.6286 14.4832C21.6911 14.5415 21.7415 14.6114 21.777 14.6891C21.8125 14.7668 21.8323 14.8507 21.8353 14.9361C21.8383 15.0214 21.8245 15.1064 21.7947 15.1864C21.7947 15.1864 21.7946 15.1865 21.7946 15.1866L18.4243 24.2681L17.8152 24.6926ZM17.8152 24.6926C17.9479 24.6925 18.0774 24.6517 18.1863 24.5759C18.2951 24.5 18.3782 24.3927 18.4242 24.2683L17.8152 24.6926Z"
        fill="#EEF2F6"
        stroke="#EEF2F6"
        strokeWidth="0.3"
      />
    </svg>
  );
};

export default GetStartedIcon;