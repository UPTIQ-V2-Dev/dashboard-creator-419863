// React 19 act compatibility polyfill
import { act as reactAct } from 'react';

// If React.act doesn't exist, use a no-op function
const act =
    reactAct ||
    ((callback: () => void) => {
        callback();
        return Promise.resolve();
    });

// Polyfill React.act for react-dom/test-utils
if (typeof window !== 'undefined') {
    // @ts-expect-error - Adding React to window for test compatibility
    window.React = window.React || {};
    // @ts-expect-error - Adding act to React for test compatibility
    window.React.act = window.React.act || act;
}

export { act };
