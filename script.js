function recommend(user) {
    if (user === "student") return ["Learn JS", "Practice DSA"];
    if (user === "developer") return ["Build SaaS", "Learn AI"];
    return ["Explore tech"];
}

console.log(recommend("developer"));