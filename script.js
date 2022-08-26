let card = document.querySelector(".flip-card .flip-card-inner");
let arrow_next = document.querySelector(".next")
let arrow_back = document.querySelector(".back")
let num_face = 1;
let data_traker = 0;
let data = {}

card.addEventListener("click", () => {
    if (num_face == 1) {
        card.style.transform = "rotateY(180deg)";
        num_face = 2
    } else {
        card.style.transform = "rotateY(0deg)";
        num_face = 1
    }

})
arrow_next.addEventListener("click", () => {
    if (data_traker != Object.keys(data['eng']).length - 1) {
        data_traker++;
        swap_data(data['eng'][`${data_traker}`], data['ar'][`${data_traker}`]);
    }

})
arrow_back.addEventListener("click", () => {
    if (data_traker != 0) {
        data_traker--;
        swap_data(data['eng'][`${data_traker}`], data['ar'][`${data_traker}`]);
    }

})

fetch("ara_eng.json")
    .then(response => response.json())
    .then((json) => {
        data = json;
        swap_data(data['eng']["0"], data['ar']["0"])
    }).catch(error => console.error(error));



function swap_data(eng, ara) {
    card.firstElementChild.innerHTML = eng;
    card.lastElementChild.innerHTML = ara;
}