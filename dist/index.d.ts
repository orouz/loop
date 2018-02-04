export declare class Loopy {
    private fn;
    private dur;
    private callback;
    private repeat;
    private raf;
    private start;
    private delta;
    private timestamp;
    private isPaused;
    constructor(fn: (t: number, p: number) => void, dur?: number, callback?: (() => void) | undefined, repeat?: boolean | undefined);
    private loop;
    play: () => void;
    pause: () => void;
    private reset();
    stop: () => void;
}
