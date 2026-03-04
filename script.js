// Polyfill or future native
const now = Temporal.Now.plainDateTimeISO();
const nextWeek = now.add({ weeks: 1 });
console.log(nextWeek.toString());
