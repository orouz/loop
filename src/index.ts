export class Loopy {
  private raf: number
  private start: number | undefined
  private delta: number
  private timestamp: number = 0
  private isPaused: boolean = false
  constructor(
    private fn: (t: number, p: number) => void,
    private dur: number = Infinity,
    private callback?: () => void
  ) {}
  private loop = (timestamp: number) => {
    try {
      this.timestamp = timestamp
      this.start = this.start || timestamp
      this.delta = (timestamp - this.start) / this.dur

      this.fn(timestamp, this.delta)
      if (this.delta >= 1) {
        if (this.callback) this.callback()
        cancelAnimationFrame(this.raf)
      } else {
        if (!this.isPaused) this.raf = requestAnimationFrame(this.loop)
      }
    } catch (err) {
      console.warn(err)
    }
  }
  public play = () => {
    this.isPaused = false
    this.loop(this.timestamp)
  }
  public pause = () => {
    this.isPaused = true
  }
  public stop = () => {
    cancelAnimationFrame(this.raf)
    this.timestamp = this.start = 0
  }
}
