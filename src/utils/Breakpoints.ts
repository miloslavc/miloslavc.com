const breakpoints = [576, 768, 992, 1200];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
export const mqx = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
