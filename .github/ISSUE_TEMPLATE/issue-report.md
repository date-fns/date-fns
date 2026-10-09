## The problem

The generated docs for a few date helpers expose a broken type reference: `ContextDate` appears in the JSDoc/type params even though it is not a real exported type. This results in a missing docs entry / "ping me" stub on pages such as `startOfToday`.

### 💻 Code demonstrating the problem

<!-- Demonstrate the problem -->

```ts
import { startOfToday } from 'date-fns';

startOfToday();
// The docs page for the generated type reference can show a broken `ContextDate` link.
```

### 🙁 Actual behavior

The docs page for `startOfToday` (and similar helpers) references a non-existent `ContextDate` type, causing the generated documentation to show a broken link / placeholder stub instead of a valid type reference.

### 🙂 Expected behavior

The type parameter should use the standard documented names (`DateType` / `ResultDate`) so the generated docs resolve to valid type entries and no broken `ContextDate` stub is created.

## Debug information

- date-fns version: 4.4.0
- Browser/Node.js version: <!-- Fill in the envrionment version (i.e. Chrome 94.0.4606.61) -->
- Your timezone: <!-- Fill in your timezone name (i.e. Asia/Singapore) -->
- Your current time: <!-- Fill in the time when did you tested the problem (i.e. 16:20) -->
