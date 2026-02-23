import React from 'react';

const AppleMusicIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 13.5c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-1.637.986-3.045 2.4-3.666V7.5c0-.276.224-.5.5-.5h2.6c.276 0 .5.224.5.5v5.8c.87-.514 1.889-.8 3-.8.276 0 .5.224.5.5v2.5z" />
    </svg>
);

export default AppleMusicIcon;
