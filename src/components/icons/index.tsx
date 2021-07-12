import * as React from 'react';

type MGIconProps = {
  width?: string,
  height?: string
}

export function MagnifyingGlassIcon({ width = "32", height = "32" }: MGIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
      <path fill="#85D0CC" d="M13.0002 12.9999C13.3907 12.6094 14.0239 12.6094 14.4144 12.9999L20.7072 19.2928C21.0977 19.6833 21.0977 20.3165 20.7072 20.707C20.3166 21.0975 19.6835 21.0975 19.2929 20.707L13.0002 14.4141C12.6096 14.0236 12.6096 13.3904 13.0002 12.9999Z" clipRule="evenodd" fillRule="evenodd" strokeWidth="1.5"></path>
      <path fill="#98EED5" d="M14.2426 5.75736C16.5858 8.1005 16.5858 11.8995 14.2426 14.2426C11.8995 16.5858 8.1005 16.5858 5.75736 14.2426C3.41421 11.8995 3.41421 8.1005 5.75736 5.75736C8.1005 3.41421 11.8995 3.41421 14.2426 5.75736Z" strokeWidth="1.5"></path>
      <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#fcffff" d="M6.46439 10.707C6.46439 10.707 6.46439 11.4141 7.52505 12.4748C8.58571 13.5354 9.29282 13.5354 9.29282 13.5354"></path>
    </svg>
  )
}


export function PlusFilledIcon({ width = "32", height = "32" }: MGIconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
      <path fill="#85D0CC" d="M10.5 4.5C10.5 3.66772 11.1677 3 12 3C12.8323 3 13.5 3.66772 13.5 4.5V19.5C13.5 20.3323 12.8323 21 12 21C11.1677 21 10.5 20.3323 10.5 19.5V4.5Z" clipRule="evenodd" fillRule="evenodd" transform="translate(2,2)"></path><path fill="#98EED5" d="M10.5 4.5C10.5 3.66772 11.1677 3 12 3C12.8323 3 13.5 3.66772 13.5 4.5V19.5C13.5 20.3323 12.8323 21 12 21C11.1677 21 10.5 20.3323 10.5 19.5V4.5Z" clipRule="evenodd" fillRule="evenodd"></path>
      <path fill="#85D0CC" d="M3 12C3 11.1677 3.66772 10.5 4.5 10.5H19.5C20.3323 10.5 21 11.1677 21 12C21 12.8323 20.3323 13.5 19.5 13.5H4.5C3.66772 13.5 3 12.8323 3 12Z" clipRule="evenodd" fillRule="evenodd" transform="translate(2,2)"></path><path fill="#98EED5" d="M3 12C3 11.1677 3.66772 10.5 4.5 10.5H19.5C20.3323 10.5 21 11.1677 21 12C21 12.8323 20.3323 13.5 19.5 13.5H4.5C3.66772 13.5 3 12.8323 3 12Z" clipRule="evenodd" fillRule="evenodd"></path>
    </svg>
  );
}

export function RobotFilled({ width = "32", height = "32" }: MGIconProps) {
  return (
    <>
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
        <path fill="#85D0CC" d="M21 14H20V9H21C21.55 9 22 9.45 22 10V13C22 13.55 21.55 14 21 14Z" transform="translate(2,2)"></path><path fill="none" d="M21 14H20V9H21C21.55 9 22 9.45 22 10V13C22 13.55 21.55 14 21 14Z"></path>
        <path fill="#85D0CC" d="M3 9H4V14H3C2.45 14 2 13.55 2 13V10C2 9.45 2.45 9 3 9Z" transform="translate(2,2)"></path><path fill="none" d="M3 9H4V14H3C2.45 14 2 13.55 2 13V10C2 9.45 2.45 9 3 9Z"></path>
        <path fill="#98EED5" d="M18 19H6C4.9 19 4 18.1 4 17V7C4 5.9 4.9 5 6 5H18C19.1 5 20 5.9 20 7V17C20 18.1 19.1 19 18 19Z" transform="translate(2,2)"></path><path fill="none" d="M18 19H6C4.9 19 4 18.1 4 17V7C4 5.9 4.9 5 6 5H18C19.1 5 20 5.9 20 7V17C20 18.1 19.1 19 18 19Z"></path>
        <path fill="#85D0CC" d="M15.25 12.5C16.2165 12.5 17 11.7165 17 10.75C17 9.7835 16.2165 9 15.25 9C14.2835 9 13.5 9.7835 13.5 10.75C13.5 11.7165 14.2835 12.5 15.25 12.5Z" transform="translate(2,2)"></path><path fill="none" d="M15.25 12.5C16.2165 12.5 17 11.7165 17 10.75C17 9.7835 16.2165 9 15.25 9C14.2835 9 13.5 9.7835 13.5 10.75C13.5 11.7165 14.2835 12.5 15.25 12.5Z"></path>
        <path fill="#85D0CC" d="M8.75 12.5C9.7165 12.5 10.5 11.7165 10.5 10.75C10.5 9.7835 9.7165 9 8.75 9C7.7835 9 7 9.7835 7 10.75C7 11.7165 7.7835 12.5 8.75 12.5Z" transform="translate(2,2)"></path><path fill="none" d="M8.75 12.5C9.7165 12.5 10.5 11.7165 10.5 10.75C10.5 9.7835 9.7165 9 8.75 9C7.7835 9 7 9.7835 7 10.75C7 11.7165 7.7835 12.5 8.75 12.5Z"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#265F58" d="M9.5 16H14.5"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#265F58" d="M8.75 12.5C9.7165 12.5 10.5 11.7165 10.5 10.75C10.5 9.7835 9.7165 9 8.75 9C7.7835 9 7 9.7835 7 10.75C7 11.7165 7.7835 12.5 8.75 12.5Z"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke="#265F58" d="M15.25 12.5C16.2165 12.5 17 11.7165 17 10.75C17 9.7835 16.2165 9 15.25 9C14.2835 9 13.5 9.7835 13.5 10.75C13.5 11.7165 14.2835 12.5 15.25 12.5Z"></path>
      </svg>
    </>
  )
}
