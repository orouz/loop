function __$$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

class Loopy {
    constructor(fn, dur = Infinity, callback) {
        this.fn = fn;
        this.dur = dur;
        this.callback = callback;
        this.timestamp = 0;
        this.isPaused = false;
        this.loop = (timestamp) => {
            try {
                this.timestamp = timestamp;
                this.start = this.start || timestamp;
                this.delta = (timestamp - this.start) / this.dur;
                this.fn(timestamp, this.delta);
                if (this.delta >= 1) {
                    if (this.callback)
                        this.callback();
                    cancelAnimationFrame(this.raf);
                }
                else {
                    if (!this.isPaused)
                        this.raf = requestAnimationFrame(this.loop);
                }
            }
            catch (err) {
                console.warn(err);
            }
        };
        this.play = () => {
            this.isPaused = false;
            this.loop(this.timestamp);
        };
        this.pause = () => {
            this.isPaused = true;
        };
        this.stop = () => {
            cancelAnimationFrame(this.raf);
            this.timestamp = this.start = 0;
        };
    }
}

export { Loopy };
