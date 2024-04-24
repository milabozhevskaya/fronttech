const SVGSelector = ({ id }: { id: string }): JSX.Element => {
  switch (id) {
    case 'logo':
      return (
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5093 0C9.16808 0 0 9.16808 0 20.5093C0 29.5756 5.87436 37.2496 14.0238 39.966C15.0424 40.1698 15.416 39.5246 15.416 38.9813C15.416 38.5059 15.382 36.8761 15.382 35.1783C9.67742 36.4007 8.48896 32.7334 8.48896 32.7334C7.57216 30.3565 6.21392 29.7453 6.21392 29.7453C4.34635 28.489 6.34975 28.489 6.34975 28.489C8.42105 28.6248 9.50764 30.5942 9.50764 30.5942C11.3413 33.7182 14.2954 32.8353 15.4839 32.292C15.6536 30.9677 16.1969 30.0509 16.7742 29.5416C12.2241 29.0662 7.43633 27.3005 7.43633 19.4227C7.43633 17.1817 8.25127 15.348 9.5416 13.9219C9.33786 13.4126 8.62479 11.3073 9.74533 8.48896C9.74533 8.48896 11.4771 7.94567 15.382 10.5942C17.0119 10.1528 18.7776 9.91511 20.5093 9.91511C22.2411 9.91511 24.0068 10.1528 25.6367 10.5942C29.5416 7.94567 31.2733 8.48896 31.2733 8.48896C32.3939 11.3073 31.6808 13.4126 31.4771 13.9219C32.8014 15.348 33.5823 17.1817 33.5823 19.4227C33.5823 27.3005 28.7946 29.0323 24.2105 29.5416C24.9576 30.1868 25.6027 31.4092 25.6027 33.3446C25.6027 36.0951 25.5688 38.3022 25.5688 38.9813C25.5688 39.5246 25.9423 40.1698 26.9609 39.966C35.1104 37.2496 40.9847 29.5756 40.9847 20.5093C41.0187 9.16808 31.8166 0 20.5093 0Z"
            fill="white"
          />
        </svg>
      );
    case 'search':
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6.23497 0C2.79706 0 0 2.79706 0 6.23497C0 9.67288 2.79706 12.4699 6.23497 12.4699C7.63766 12.4699 8.92987 11.9995 9.97123 11.216L12.4982 13.7422C12.6697 13.9138 12.8951 14 13.1202 14C13.3453 14 13.5707 13.9138 13.7422 13.7422C14.0862 13.3983 14.0862 12.8421 13.7422 12.4982L11.216 9.97123C11.9995 8.92987 12.4699 7.63766 12.4699 6.23497C12.4699 2.79706 9.67288 0 6.23497 0ZM1.75956 6.23497C1.75956 3.76687 3.76687 1.75956 6.23497 1.75956C8.70307 1.75956 10.7104 3.76687 10.7104 6.23497C10.7104 8.70307 8.70307 10.7104 6.23497 10.7104C3.76687 10.7104 1.75956 8.70307 1.75956 6.23497Z"
            fill="#808080"
          />
        </svg>
      );
    case 'loading':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 26.349 26.35"
        >
          <g>
            <g>
              <circle cx="13.792" cy="3.082" r="3.082" />
              <circle cx="13.792" cy="24.501" r="1.849" />
              <circle cx="6.219" cy="6.218" r="2.774" />
              <circle cx="21.365" cy="21.363" r="1.541" />
              <circle cx="3.082" cy="13.792" r="2.465" />
              <circle cx="24.501" cy="13.791" r="1.232" />
              <path
                d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05
			C6.902,18.996,5.537,18.988,4.694,19.84z"
              />
              <circle cx="21.364" cy="6.218" r="0.924" />
            </g>
          </g>
        </svg>
      );
    case 'not-found':
      return (
        <svg
          width="65"
          height="75"
          viewBox="0 0 65 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 18.5C23 13.2533 27.2533 9 32.5 9C37.7467 9 42 13.2533 42 18.5C42 23.7467 37.7467 28 32.5 28C27.2533 28 23 23.7467 23 18.5ZM32.5 0C22.2827 0 14 8.28273 14 18.5C14 28.7173 22.2827 37 32.5 37C42.7173 37 51 28.7173 51 18.5C51 8.28273 42.7173 0 32.5 0ZM9 70.5C9 57.5213 19.5213 47 32.5 47C45.4787 47 56 57.5213 56 70.5C56 72.9853 58.0147 75 60.5 75C62.9853 75 65 72.9853 65 70.5C65 52.5507 50.4493 38 32.5 38C14.5507 38 0 52.5507 0 70.5C0 72.9853 2.01472 75 4.5 75C6.98528 75 9 72.9853 9 70.5Z"
            fill="#808080"
          />
        </svg>
      );
    case 'followers':
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.028 8.73877C11.028 10.3988 9.69338 11.7388 8.02764 11.7388C6.3619 11.7388 5.01726 10.3988 5.01726 8.73877C5.01726 7.07877 6.3619 5.73877 8.02764 5.73877C9.69338 5.73877 11.028 7.07877 11.028 8.73877ZM19.0557 8.73877C19.0557 10.3988 17.7211 11.7388 16.0553 11.7388C14.3896 11.7388 13.0449 10.3988 13.0449 8.73877C13.0449 7.07877 14.3896 5.73877 16.0553 5.73877C17.7211 5.73877 19.0557 7.07877 19.0557 8.73877ZM8.02764 13.7388C5.68958 13.7388 1.00342 14.9088 1.00342 17.2388V18.7388C1.00342 19.2888 1.45498 19.7388 2.00688 19.7388H14.0484C14.6003 19.7388 15.0519 19.2888 15.0519 18.7388V17.2388C15.0519 14.9088 10.3657 13.7388 8.02764 13.7388ZM15.082 13.7888C15.4332 13.7588 15.7643 13.7388 16.0553 13.7388C18.3934 13.7388 23.0795 14.9088 23.0795 17.2388V18.7388C23.0795 19.2888 22.628 19.7388 22.0761 19.7388H16.8782C16.9885 19.4288 17.0588 19.0888 17.0588 18.7388V17.2388C17.0588 15.7688 16.266 14.6588 15.1221 13.8288C15.1191 13.8257 15.116 13.8218 15.1127 13.8175C15.1051 13.8076 15.096 13.7957 15.082 13.7888Z"
            fill="#808080"
          />
        </svg>
      );
    case 'following':
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.0554 8.73877C16.0554 10.9488 14.2592 12.7388 12.0416 12.7388C9.82395 12.7388 8.02776 10.9488 8.02776 8.73877C8.02776 6.52877 9.82395 4.73877 12.0416 4.73877C14.2592 4.73877 16.0554 6.52877 16.0554 8.73877ZM4.01392 18.7388C4.01392 16.0788 9.36236 14.7388 12.0416 14.7388C14.7208 14.7388 20.0693 16.0788 20.0693 18.7388V19.7388C20.0693 20.2888 19.6177 20.7388 19.0658 20.7388H5.01738C4.46547 20.7388 4.01392 20.2888 4.01392 19.7388V18.7388Z"
            fill="#808080"
          />
        </svg>
      );
    case 'empty-list':
      return (
        <svg
          width="76"
          height="62"
          viewBox="0 0 76 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 0C6.49187 0 0 6.49187 0 14.5V47.5C0 55.5081 6.49187 62 14.5 62H61.5C69.5081 62 76 55.5081 76 47.5V14.5C76 6.49187 69.5081 0 61.5 0H14.5ZM9 14.5C9 11.4624 11.4624 9 14.5 9H61.5C64.5376 9 67 11.4624 67 14.5V47.5C67 50.5376 64.5376 53 61.5 53H14.5C11.4624 53 9 50.5376 9 47.5V14.5ZM48.1984 24.6422C49.37 23.4706 49.37 21.5711 48.1984 20.3995C47.0268 19.228 45.1274 19.228 43.9558 20.3995L38.2989 26.0564L32.6421 20.3995C31.4705 19.228 29.571 19.228 28.3994 20.3995C27.2279 21.5711 27.2279 23.4706 28.3994 24.6422L34.0563 30.299L28.3994 35.9559C27.2279 37.1274 27.2279 39.0269 28.3994 40.1985C29.571 41.3701 31.4705 41.3701 32.6421 40.1985L38.2989 34.5417L43.9558 40.1985C45.1273 41.3701 47.0268 41.3701 48.1984 40.1985C49.37 39.0269 49.37 37.1274 48.1984 35.9559L42.5416 30.299L48.1984 24.6422Z"
            fill="#808080"
          />
        </svg>
      );
    case 'arrow-left':
      return (
        <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.41436 6.00008L7.70726 1.70718L6.29304 0.292969L0.585938 6.00008L6.29304 11.7072L7.70726 10.293L3.41436 6.00008Z"
            strokeWidth="0.1"
            stroke="transparent"
          />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L6 6L1 11" strokeWidth="2" fill="none" />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

export { SVGSelector };