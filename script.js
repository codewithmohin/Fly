// 9. URL params to object
const url = new URL('https://ex.com?a=1&b=2&c=3');
console.log(Object.fromEntries(url.searchParams));
