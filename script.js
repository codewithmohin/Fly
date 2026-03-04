// In a .mjs file or <script type="module">
const data = await fetch('https://api.example.com/users');
const users = await data.json();
console.log(users);
