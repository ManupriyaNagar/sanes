import { useEffect } from 'react';

export const useScrollbarHide = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);
};
