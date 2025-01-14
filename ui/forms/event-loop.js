/*A more detailed event loop algorithm (though still simplified compared to the specification):

Dequeue and run the oldest task from the macrotask queue (e.g. “script”).
Execute all microtasks:
While the microtask queue is not empty:
Dequeue and run the oldest microtask.
Render changes if any.
If the macrotask queue is empty, wait till a macrotask appears.
Go to step 1.
To schedule a new macrotask:

Use zero delayed setTimeout(f).
That may be used to split a big calculation-heavy task into pieces, for the browser to be able to react to user events and show progress between them.

Also, used in event handlers to schedule an action after the event is fully handled (bubbling done).

To schedule a new microtask

Use queueMicrotask(f).
Also promise handlers go through the microtask queue.
There’s no UI or network event handling between microtasks: they run immediately one after another.

So one may want to queueMicrotask to execute a function asynchronously, but within the environment state.*/