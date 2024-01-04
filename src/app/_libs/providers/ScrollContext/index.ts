import { createContext } from 'react';

export const ScrollContext = createContext<{scrollingElement: HTMLDivElement | undefined}>({
    scrollingElement: undefined,
});