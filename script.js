var arr = [
    {
        username: 'Monk 1',
        age: 65,
        married: false,
        istatus: 'Stranger',
        image: 'https://i.pinimg.com/736x/aa/b6/21/aab621406f06267559b3ded42f603f3e.jpg'
    },
    {
        username: 'Monk 2',
        age: 60,
        married: true,
        istatus: 'Stranger',
        image: 'https://i.pinimg.com/736x/66/7e/12/667e125b2d5a453d6230f930e894eabd.jpg'
    },
    {
        username: 'Monk 3',
        age: 40,
        married: false,
        istatus: 'Stranger',
        image: 'https://i.pinimg.com/736x/14/90/c0/1490c024dc05213caaae0ec59f70362f.jpg'
    }
];

var main = document.querySelector('#main')

function heroFunction() {
    var sum = ''

    arr.forEach(function (elem, idx) {
        sum = sum + `<div class="card">
    <img src="${elem.image}" alt="">
    <h1>${elem.username}, ${elem.age}</h1>
    <h4>Maried : ${elem.married}</h4>
    <h5>${elem.istatus}</h5>
    <button id=${idx}>Add Friend</button>
</div>`
    })

    main.innerHTML = sum
}
heroFunction()

main.addEventListener('click', function (dets) {
    var gold = arr[dets.target.id]
    if(gold.istatus == 'Stranger'){
        gold.istatus = 'Friends'
    }else{
        gold.istatus = 'Stranger'
    }
    heroFunction()
})
