export declare class Loopy {
    private fn;
    private dur;
    private callback;
    private raf;
    private start;
    private delta;
    private timestamp;
    private isPaused;
    constructor(fn: (t: number, p: number) => void, dur?: number, callback?: (() => void) | undefined);
    private loop;
    play: () => void;
    pause: () => void;
    stop: () => void;
}
