### Loopy 🔁🔁🔁

#### a tiny wrapper for `requestAnimationFrame`

### Constructor Arguments

| Prop     | default  |        type |
| -------- | :------: | ----------: |
| handler  |   noop   | LoopHandler |
| duration | Infinity |      number |
| callback |   none   |    function |

### API

    play, pause, stop

### Usage Example

```typescript
import { Loopy } from "loopy"
const z = new Loopy(console.log, 1000, () => console.log("done"))
z.play()
// logs the current timesamp and progress for 1 second
```
