/** One easing curve for the whole site. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_OUT: [number, number, number, number] = [0.4, 0, 1, 1];

/**
 * Entrance is per-element with an explicit delay rather than variant
 * orchestration: a panel mounts inside `AnimatePresence mode="wait"`, and a
 * parent that inherits its children's timing there is one render away from
 * leaving them stuck in their hidden state.
 */
export const STEP = 0.06;
