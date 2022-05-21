let currentSet = 38;
let record = false;
let records = [[], [], [], [], [], []]
let numberOfR = 0;
let date = null;
let curDate = null;
let waitt = null;

import {
    collection,
    addDoc,
    updateDoc,
    getDocs
  } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
    recordsQuery
} from './pootis.js'

import {
    auth
} from './auth.js'

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

onAuthStateChanged(auth, person => {
    recordsQuery.forEach((user) => {
        console.log(user.id + " " + auth.currentUser.email)
        if (user.id === auth.currentUser.email) {
            Loader(user.data().Track1, 0)
            Loader(user.data().Track2, 1)
            Loader(user.data().Track3, 2)
            Loader(user.data().Track4, 3)
            Loader(user.data().Track5, 4)
            Loader(user.data().Track6, 5)
        }
    });
});

function Loader(str, num) {
    let btt = false
    let button = '';
    let button2 = '';
    for (let index in str) {
        if (parseInt(str[index]) || str[index] === "0") {
            if (btt) button2 += str[index]
            else button += str[index]
        }
        else if (str[index] === " " && btt === true) {
            btt = false;
            console.log(button);
            console.log(button2);
            records[num].push({
                duration: parseInt(button),
                button: parseInt(button2)
            })
            button = '';
            button2 = '';
        }
        else btt = true
    }
}

const elements2 = document.querySelectorAll(".button");
elements2.forEach(function (elem) {
    elem.addEventListener("mousedown", function () {
        let str = elem.id
        let button = '';
        for (let index in str) {
            if (parseInt(str[index]) || str[index] === "0") {
                button += str[index]
            }
        }
        button = parseInt(button);
        if (record) {
            records[numberOfR].push({
                duration: Date.now() - date,
                button: button
            })
        }
        switch (currentSet) {
            case 38:
                switch (button) {
                    ////////////////////////////////////////////////////строка 1 - верх////////////////////////////////////////////////
                    case 49:
                        new Audio('sounds/animals/a0.mp3').play()
                        break;
                    case 50:
                        new Audio('sounds/animals/a1.mp3').play()
                        break;
                    case 51:
                        new Audio('sounds/animals/a2.mp3').play()
                        break;
                    case 52:
                        new Audio('sounds/animals/a3.mp3').play()
                        break;
                    case 53:
                        new Audio('sounds/animals/c0.mp3').play()
                        break;
                    case 54:
                        break;
                    case 55:
                        new Audio('sounds/animals/b0.mp3').play()
                        break;
                    case 56:
                        new Audio('sounds/animals/b1.mp3').play()
                        break;
                    case 57:
                        new Audio('sounds/animals/b2.mp3').play()
                        break;
                    case 48:
                        new Audio('sounds/animals/b3.mp3').play()
                        break;
                    case 189:
                        new Audio('sounds/animals/d12.mp3').play()
                        break;
                    case 187:
                        new Audio('sounds/animals/d13.mp3').play()
                        break;
                    ////////////////////////////////////////////////////строка 2 - верх////////////////////////////////////////////////
                    case 81:
                        new Audio('sounds/animals/a4.mp3').play()
                        break;
                    case 87:
                        new Audio('sounds/animals/a5.mp3').play()
                        break;
                    case 69:
                        new Audio('sounds/animals/a6.mp3').play()
                        break;
                    case 82:
                        new Audio('sounds/animals/a7.mp3').play()
                        break;
                    case 84:
                        new Audio('sounds/animals/c4.mp3').play()
                        break;
                    case 89:
                        break;
                    case 85:
                        new Audio('sounds/animals/b4.mp3').play()
                        break;
                    case 73:
                        new Audio('sounds/animals/b5.mp3').play()
                        break;
                    case 79:
                        new Audio('sounds/animals/b6.mp3').play()
                        break;
                    case 80:
                        new Audio('sounds/animals/b7.mp3').play()
                        break;
                    case 219:
                        break;
                    case 221:
                        break;
                    ////////////////////////////////////////////////////строка 3 - верх////////////////////////////////////////////////
                    case 65:
                        new Audio('sounds/animals/a8.mp3').play()
                        break;
                    case 83:
                        new Audio('sounds/animals/a9.mp3').play()
                        break;
                    case 68:
                        new Audio('sounds/animals/a10.mp3').play()
                        break;
                    case 70:
                        new Audio('sounds/animals/a11.mp3').play()
                        break;
                    case 71:
                        new Audio('sounds/animals/c12.mp3').play()
                        break;
                    case 72:
                        break;
                    case 74:
                        new Audio('sounds/animals/b8.mp3').play()
                        break;
                    case 75:
                        new Audio('sounds/animals/b9.mp3').play()
                        break;
                    case 76:
                        new Audio('sounds/animals/b10.mp3').play()
                        break;
                    case 186:
                        new Audio('sounds/animals/b11.mp3').play()
                        break;
                    case 222:
                        new Audio('sounds/animals/d14.mp3').play()
                        break;
                    case 13:
                        new Audio('sounds/animals/d15.mp3').play()
                        break;
                    ////////////////////////////////////////////////////строка 4 - верх////////////////////////////////////////////////
                    case 90:
                        new Audio('sounds/animals/a12.mp3').play()
                        break;
                    case 88:
                        new Audio('sounds/animals/a13.mp3').play()
                        break;
                    case 67:
                        new Audio('sounds/animals/a14.mp3').play()
                        break;
                    case 86:
                        new Audio('sounds/animals/a15.mp3').play()
                        break;
                    case 66:
                        new Audio('sounds/animals/c8.mp3').play()
                        break;
                    case 78:
                        break;
                    case 77:
                        new Audio('sounds/animals/b12.mp3').play()
                        break;
                    case 188:
                        new Audio('sounds/animals/b13.mp3').play()
                        break;
                    case 190:
                        new Audio('sounds/animals/b14.mp3').play()
                        break;
                    case 191:
                        new Audio('sounds/animals/b15.mp3').play()
                        break;
                    case 16:
                        break;
                }
                break;

            case 40:
                switch (button) {
                    ////////////////////////////////////////////////////строка 1 - низ////////////////////////////////////////////////
                    case 49:
                        new Audio('sounds/animals/c12.mp3').play()
                        break;
                    case 50:
                        new Audio('sounds/animals/c4.mp3').play()
                        break;
                    case 51:
                        break;
                    case 52:
                        break;
                    case 53:
                        break;
                    case 54:
                        new Audio('sounds/animals/a0.mp3').play()
                        break;
                    case 55:
                        new Audio('sounds/animals/d0.mp3').play()
                        break;
                    case 56:
                        new Audio('sounds/animals/d1.mp3').play()
                        break;
                    case 57:
                        new Audio('sounds/animals/d2.mp3').play()
                        break;
                    case 48:
                        new Audio('sounds/animals/d3.mp3').play()
                        break;
                    case 189:
                        break;
                    case 187:
                        break;
                    ////////////////////////////////////////////////////строка 2 - низ////////////////////////////////////////////////
                    case 81:
                        new Audio('sounds/animals/c8.mp3').play()
                        break;
                    case 87:
                        break;
                    case 69:
                        new Audio('sounds/animals/c5.mp3').play()
                        break;
                    case 82:
                        new Audio('sounds/animals/c6.mp3').play()
                        break;
                    case 84:
                        new Audio('sounds/animals/c7.mp3').play()
                        break;
                    case 89:
                        break;
                    case 85:
                        new Audio('sounds/animals/d4.mp3').play()
                        break;
                    case 73:
                        new Audio('sounds/animals/d5.mp3').play()
                        break;
                    case 79:
                        new Audio('sounds/animals/d6.mp3').play()
                        break;
                    case 80:
                        new Audio('sounds/animals/d7.mp3').play()
                        break;
                    case 219:
                        break;
                    case 221:
                        break;
                    ////////////////////////////////////////////////////строка 3 - низ////////////////////////////////////////////////
                    case 65:
                        new Audio('sounds/animals/c0.mp3').play()
                        break;
                    case 83:
                        new Audio('sounds/animals/c1.mp3').play()
                        break;
                    case 68:
                        new Audio('sounds/animals/c9.mp3').play()
                        break;
                    case 70:
                        new Audio('sounds/animals/c10.mp3').play()
                        break;
                    case 71:
                        new Audio('sounds/animals/c11.mp3').play()
                        break;
                    case 72:
                        break;
                    case 74:
                        new Audio('sounds/animals/d8.mp3').play()
                        break;
                    case 75:
                        new Audio('sounds/animals/d9.mp3').play()
                        break;
                    case 76:
                        new Audio('sounds/animals/d10.mp3').play()
                        break;
                    case 186:
                        new Audio('sounds/animals/d11.mp3').play()
                        break;
                    case 222:
                        break;
                    case 13:
                        break;
                    ////////////////////////////////////////////////////строка 4 - низ////////////////////////////////////////////////
                    case 90:
                        new Audio('sounds/animals/c3.mp3').play()
                        break;
                    case 88:
                        new Audio('sounds/animals/c2.mp3').play()
                        break;
                    case 67:
                        new Audio('sounds/animals/c13.mp3').play()
                        break;
                    case 86:
                        new Audio('sounds/animals/c14.mp3').play()
                        break;
                    case 66:
                        new Audio('sounds/animals/c15.mp3').play()
                        break;
                    case 78:
                        break;
                    case 77:
                        new Audio('sounds/animals/d12.mp3').play()
                        break;
                    case 188:
                        new Audio('sounds/animals/d13.mp3').play()
                        break;
                    case 190:
                        new Audio('sounds/animals/d14.mp3').play()
                        break;
                    case 191:
                        new Audio('sounds/animals/d15.mp3').play()
                        break;
                    case 16:
                        break;
                }
                break;

            case 37:
                switch (button) {
                    ////////////////////////////////////////////////////строка 1 - лево////////////////////////////////////////////////
                    case 49:
                        new Audio('sounds/animals2/b0.mp3').play()
                        break;
                    case 50:
                        new Audio('sounds/animals2/b1.mp3').play()
                        break;
                    case 51:
                        new Audio('sounds/animals2/b2.mp3').play()
                        break;
                    case 52:
                        new Audio('sounds/animals2/b3.mp3').play()
                        break;
                    case 53:
                        new Audio('sounds/animals2/d0.mp3').play()
                        break;
                    case 54:
                        new Audio('sounds/animals2/d1.mp3').play()
                        break;
                    case 55:
                        new Audio('sounds/animals2/d2.mp3').play()
                        break;
                    case 56:
                        new Audio('sounds/animals2/d3.mp3').play()
                        break;
                    case 57:
                        new Audio('sounds/animals2/a0.mp3').play()
                        break;
                    case 48:
                        new Audio('sounds/animals2/a1.mp3').play()
                        break;
                    case 189:
                        new Audio('sounds/animals2/a2.mp3').play()
                        break;
                    case 187:
                        new Audio('sounds/animals2/a3.mp3').play()
                        break;
                    ////////////////////////////////////////////////////строка 2 - лево////////////////////////////////////////////////
                    case 81:
                        new Audio('sounds/animals2/b4.mp3').play()
                        break;
                    case 87:
                        new Audio('sounds/animals2/b5.mp3').play()
                        break;
                    case 69:
                        new Audio('sounds/animals2/b6.mp3').play()
                        break;
                    case 82:
                        new Audio('sounds/animals2/b7.mp3').play()
                        break;
                    case 84:
                        new Audio('sounds/animals2/d4.mp3').play()
                        break;
                    case 89:
                        new Audio('sounds/animals2/d5.mp3').play()
                        break;
                    case 85:
                        new Audio('sounds/animals2/d6.mp3').play()
                        break;
                    case 73:
                        new Audio('sounds/animals2/d7.mp3').play()
                        break;
                    case 79:
                        new Audio('sounds/animals2/a4.mp3').play()
                        break;
                    case 80:
                        new Audio('sounds/animals2/a5.mp3').play()
                        break;
                    case 219:
                        new Audio('sounds/animals2/a6.mp3').play()
                        break;
                    case 221:
                        new Audio('sounds/animals2/a7.mp3').play()
                        break;
                    ////////////////////////////////////////////////////строка 3 - лево////////////////////////////////////////////////
                    case 65:
                        new Audio('sounds/animals2/b8.mp3').play()
                        break;
                    case 83:
                        new Audio('sounds/animals2/b9.mp3').play()
                        break;
                    case 68:
                        new Audio('sounds/animals2/b10.mp3').play()
                        break;
                    case 70:
                        new Audio('sounds/animals2/b11.mp3').play()
                        break;
                    case 71:
                        new Audio('sounds/animals2/d8.mp3').play()
                        break;
                    case 72:
                        new Audio('sounds/animals2/d9.mp3').play()
                        break;
                    case 74:
                        new Audio('sounds/animals2/d10.mp3').play()
                        break;
                    case 75:
                        new Audio('sounds/animals2/d11.mp3').play()
                        break;
                    case 76:
                        new Audio('sounds/animals2/c4.mp3').play()
                        break;
                    case 186:
                        new Audio('sounds/animals2/c5.mp3').play()
                        break;
                    case 222:
                        new Audio('sounds/animals2/c6.mp3').play()
                        break;
                    case 13:
                        break;
                    ////////////////////////////////////////////////////строка 4 - лево////////////////////////////////////////////////
                    case 90:
                        new Audio('sounds/animals2/b12.mp3').play()
                        break;
                    case 88:
                        new Audio('sounds/animals2/b13.mp3').play()
                        break;
                    case 67:
                        new Audio('sounds/animals2/b14.mp3').play()
                        break;
                    case 86:
                        new Audio('sounds/animals2/b15.mp3').play()
                        break;
                    case 66:
                        new Audio('sounds/animals2/d12.mp3').play()
                        break;
                    case 78:
                        new Audio('sounds/animals2/d13.mp3').play()
                        break;
                    case 77:
                        new Audio('sounds/animals2/d14.mp3').play()
                        break;
                    case 188:
                        new Audio('sounds/animals2/d15.mp3').play()
                        break;
                    case 190:
                        new Audio('sounds/animals2/c8.mp3').play()
                        break;
                    case 191:
                        new Audio('sounds/animals2/c9.mp3').play()
                        break;
                    case 16:
                        new Audio('sounds/animals2/c10.mp3').play()
                        break;
                }
                break;

            case 39:
                break;
        }
    })

});





try {
    let link = document.getElementById('b38');
    link.classList.add("button-test")
}
catch (TypeError) { }
try {
    let link = document.getElementById('bm38');
    link.classList.add("button-test")
}
catch (TypeError) { }

const newSong = document.querySelector('#newSng')

let example = [{
    duration: 3000,
    button: 38,
}, {
    duration: 4000,
    button: 90,
}, {
    duration: 5000,
    button: 88,
}, {
    duration: 5500,
    button: 67,
}, {
    duration: 6000,
    button: 86,
}, {
    duration: 7000,
    button: 70,
}, {
    duration: 7750,
    button: 68,
}, {
    duration: 8500,
    button: 83,
}, {
    duration: 9000,
    button: 65,
}, {
    duration: 9500,
    button: 81,
}, {
    duration: 10000,
    button: 87,
}, {
    duration: 12000,
    button: 69,
}, {
    duration: 12500,
    button: 69,
}, {
    duration: 13000,
    button: 82,
}, {
    duration: 13500,
    button: 82,
}, {
    duration: 14000,
    button: 52,
}, {
    duration: 15500,
    button: 51,
}, {
    duration: 16500,
    button: 69,
}, {
    duration: 17000,
    button: 82,
}, {
    duration: 17500,
    button: 82,
}, {
    duration: 18000,
    button: 50,
}, {
    duration: 20000,
    button: 77,
}, {
    duration: 21000,
    button: 188,
}, {
    duration: 21500,
    button: 190,
}, {
    duration: 22000,
    button: 191,
}, {
    duration: 23000,
    button: 186,
}, {
    duration: 23750,
    button: 76,
}, {
    duration: 24500,
    button: 75,
}, {
    duration: 25000,
    button: 74,
}, {
    duration: 25500,
    button: 85,
}, {
    duration: 26000,
    button: 73,
}, {
    duration: 28000,
    button: 79,
}, {
    duration: 28500,
    button: 79,
}, {
    duration: 29000,
    button: 80,
}, {
    duration: 29500,
    button: 80,
}, {
    duration: 30000,
    button: 48,
}, {
    duration: 31500,
    button: 57,
}, {
    duration: 33000,
    button: 56,
}, {
    duration: 34000,
    button: 55,
}, {//////////////////////////////////////// переключаемся
    duration: 35000,
    button: 40,
}, {
    duration: 36000,
    button: 49,
}, {
    duration: 36000,
    button: 77,
}, {
    duration: 37000,
    button: 49,
}, {
    duration: 37000,
    button: 77,
}, {
    duration: 37500,
    button: 188,
}, {
    duration: 38000,
    button: 49,
}, {
    duration: 38000,
    button: 190,
}, {
    duration: 39000,
    button: 49,
}, {
    duration: 39000,
    button: 191,
}, {
    duration: 39750,
    button: 186,
}, {
    duration: 40000,
    button: 49,
}, {
    duration: 40500,
    button: 76,
}, {
    duration: 41000,
    button: 49,
}, {
    duration: 41000,
    button: 75,
}, {
    duration: 41500,
    button: 74,
}, {
    duration: 42000,
    button: 49,
}, {
    duration: 42000,
    button: 85,
}, {
    duration: 43000,
    button: 49,
}, {
    duration: 43000,
    button: 73,
}, {
    duration: 44000,
    button: 49,
}, {
    duration: 44000,
    button: 79,
}, {
    duration: 44500,
    button: 79,
}, {
    duration: 45000,
    button: 49,
}, {
    duration: 45000,
    button: 80,
}, {
    duration: 45500,
    button: 80,
}, {
    duration: 46000,
    button: 49,
}, {
    duration: 46000,
    button: 85,
}, {
    duration: 47000,
    button: 49,
}, {
    duration: 47000,
    button: 73,
}, {
    duration: 47500,
    button: 57,
}, {
    duration: 48000,
    button: 49,
}, {
    duration: 48500,
    button: 79,
}, {
    duration: 49000,
    button: 49,
}, {
    duration: 49000,
    button: 80,
}, {
    duration: 49500,
    button: 80,
}, {
    duration: 50000,
    button: 49,
}, {
    duration: 50000,
    button: 85,
}, {
    duration: 50500,
    button: 56,
}, {
    duration: 51000,
    button: 49,
}, {
    duration: 51000,
    button: 73,
}, {
    duration: 52000,
    button: 49,
}
    , {
    duration: 52000,
    button: 77,
}, {
    duration: 53000,
    button: 49,
}, {
    duration: 53000,
    button: 77,
}, {
    duration: 53500,
    button: 188,
}, {
    duration: 54000,
    button: 49,
}, {
    duration: 54000,
    button: 190,
}, {
    duration: 55000,
    button: 49,
}, {
    duration: 55000,
    button: 191,
}, {
    duration: 55750,
    button: 186,
}, {
    duration: 56000,
    button: 49,
}, {
    duration: 56500,
    button: 76,
}, {
    duration: 57000,
    button: 49,
}, {
    duration: 57000,
    button: 75,
}, {
    duration: 57500,
    button: 74,
}, {
    duration: 58000,
    button: 49,
}, {
    duration: 58000,
    button: 85,
}, {
    duration: 59000,
    button: 49,
}, {
    duration: 59000,
    button: 73,
}, {
    duration: 60000,
    button: 49,
}, {
    duration: 60000,
    button: 79,
}, {
    duration: 60500,
    button: 79,
}, {
    duration: 61000,
    button: 49,
}, {
    duration: 61000,
    button: 80,
}, {
    duration: 61500,
    button: 80,
}, {
    duration: 62000,
    button: 49,
}, {
    duration: 62000,
    button: 85,
}, {
    duration: 63000,
    button: 49,
}, {
    duration: 63000,
    button: 73,
}, {
    duration: 63500,
    button: 57,
}, {
    duration: 64000,
    button: 49,
}, {
    duration: 64500,
    button: 79,
}, {
    duration: 65000,
    button: 49,
}, {
    duration: 65000,
    button: 80,
}, {
    duration: 65500,
    button: 80,
}, {
    duration: 66000,
    button: 49,
}, {
    duration: 66000,
    button: 55,
}/////////////////////////////////////////переход на сл
]

const BB = document.querySelector(".big-button");
BB.addEventListener("click", function () {
    example.forEach(element => { console.log(element.duration + " " + element.button) });
    if (waitt != null && Date.now() < waitt) { console.log(waitt + " nope " + Date.now()); return }
    waitt = Date.now() + example[example.length - 1].duration / 2.25;
    console.log(waitt)
    example.forEach(element => {
        setTimeout(function () {
            console.log(element.button)
            let button = element.button
            if (button <= 40 && button >= 37) changePar(button)
            else {
                startP2(button);
                setTimeout(function () {
                    let links = document.getElementById('b' + button);
                    try {
                        links.classList.remove("button-test")
                        console.log("removed from " + button)
                        links = document.getElementById('bm' + button);
                        links.classList.remove("button-test")
                    }
                    catch (TypeError) { console.log("fuck"); }
                }, 200)
            }
        }, element.duration / 2.25)
    });
})


document.addEventListener('keydown', function (event) {
    let button = event.keyCode;
    if (button == 13) {
        console.log("enter")
        event.preventDefault();
    }
    if (button <= 40 && button >= 37) changePar(button)
    else startP(button)
});

document.addEventListener('keyup', function (event) {
    let button = event.keyCode;
    if (button <= 40 && button >= 37) { }
    else endP(button);
});

const NwR = document.querySelector(".navigation-panel-head__text_button");
NwR.addEventListener("click", function () {
    if (!record) {
        date = Date.now();
        newSong.innerHTML = "stop";
        record = true
        records[numberOfR] = []
    }
    else {
        newSong.innerHTML = "new song";
        record = false;
        numberOfR = +numberOfR + 1;
        if (numberOfR == 6) numberOfR = 0;

        
        recordsQuery.forEach((user) => {
            if (user.id === auth.currentUser.email) {
                let output = ""
                records[0].forEach(elem => {output += elem.duration + " " + elem.button + " "});
                updateDoc(user.ref, { Track1: output})
                output = ""
                records[1].forEach(elem => {output += elem.duration + " " + elem.button + " "});
                updateDoc(user.ref, { Track2: output})
                output = ""
                records[2].forEach(elem => {output += elem.duration + " " + elem.button + " "});
                updateDoc(user.ref, { Track3: output})
                output = ""
                records[3].forEach(elem => {output += elem.duration + " " + elem.button + " "});
                updateDoc(user.ref, { Track4: output})
                output = ""
                records[4].forEach(elem => {output += elem.duration + " " + elem.button + " "});
                updateDoc(user.ref, { Track5: output})
                output = ""
                records[5].forEach(elem => {output += elem.duration + " " + elem.button + " "});
                updateDoc(user.ref, { Track6: output})
            }
        });

    }
});

const PRlist = document.querySelectorAll(".navigation-panel-genres__item");
PRlist.forEach(function (elem) {
    elem.addEventListener("click", function () {
        let str = elem.id
        let button = '';
        for (let index in str) {
            if (parseInt(str[index]) || str[index] === "0") {
                button += str[index]
            }
        }
        let par = parseInt(button);
        if (waitt != null && Date.now() < waitt) { console.log("nope " + Date.now()); return }
        waitt = Date.now() + records[par][records[par].length - 1].duration;
        console.log(waitt)
        records[par].forEach(element => {
            setTimeout(function () {
                button = element.button
                if (button <= 40 && button >= 37) changePar(button)
                else playMp3(button)
            }, element.duration)
        });
    });
});

const Changers = document.querySelectorAll(".sound-pack-button");
Changers.forEach(function (elem) {
    elem.addEventListener("click", function () {
        console.log("nice3")
        let str = elem.id
        let button = '';
        for (let index in str) {
            if (parseInt(str[index]) || str[index] === "0") {
                button += str[index]
            }
        }
        button = parseInt(button);
        if (record) {
            records[numberOfR].push({
                duration: Date.now() - date,
                button: button
            })
        }
        currentSet = button;
        try {
            let link = document.getElementById('b37');
            link.classList.remove("button-test")
            link = document.getElementById('b38');
            link.classList.remove("button-test")
            link = document.getElementById('b39');
            link.classList.remove("button-test")
            link = document.getElementById('b40');
            link.classList.remove("button-test")
            link = document.getElementById('b' + button);
            link.classList.add("button-test")
        }
        catch (TypeError) { }
        try {
            let link = document.getElementById('bm37');
            link.classList.remove("button-test")
            link = document.getElementById('bm38');
            link.classList.remove("button-test")
            link = document.getElementById('bm39');
            link.classList.remove("button-test")
            link = document.getElementById('bm40');
            link.classList.remove("button-test")
            link = document.getElementById('bm' + button);
            link.classList.add("button-test")
        }
        catch (TypeError) { }

    });
});


function changePar(button) {
    if (record) {
        records[numberOfR].push({
            duration: Date.now() - date,
            button: button
        })
    }
    currentSet = button;
    try {
        let link = document.getElementById('b37');
        link.classList.remove("button-test")
        link = document.getElementById('b38');
        link.classList.remove("button-test")
        link = document.getElementById('b39');
        link.classList.remove("button-test")
        link = document.getElementById('b40');
        link.classList.remove("button-test")
        link = document.getElementById('b' + button);
        link.classList.add("button-test")
    }
    catch (TypeError) { }
    try {
        let link = document.getElementById('bm37');
        link.classList.remove("button-test")
        link = document.getElementById('bm38');
        link.classList.remove("button-test")
        link = document.getElementById('bm39');
        link.classList.remove("button-test")
        link = document.getElementById('bm40');
        link.classList.remove("button-test")
        link = document.getElementById('bm' + button);
        link.classList.add("button-test")
    }
    catch (TypeError) { }
}

function startP(button) {
    let links = document.getElementById('b' + button);
    try {
        if (!links.pressed) {
            playMp3(button);
            links.pressed = true
            links.classList.add("button-test")
            console.log("added for " + button)
            links = document.getElementById('bm' + button);
            links.classList.add("button-test")
        }
    }
    catch (TypeError) { console.log("fuck"); }

}

function startP2(button) {
    let links = document.getElementById('b' + button);
    try {
        playMp3(button);
        links.classList.add("button-test")
        console.log("added for " + button)
        links = document.getElementById('bm' + button);
        links.classList.add("button-test")
    }
    catch (TypeError) { console.log("fuck"); }

}


function endP(button) {
    let links = document.getElementById('b' + button);
    try {
        links.pressed = false;
        links.classList.remove("button-test")
        console.log("removed from " + button)
        links = document.getElementById('bm' + button);
        links.classList.remove("button-test")
    }
    catch (TypeError) { console.log("fuck"); }
}


function playMp3(button) {
    if (record) {
        records[numberOfR].push({
            duration: Date.now() - date,
            button: button
        })
    }
    switch (currentSet) {
        case 38:
            switch (button) {
                ////////////////////////////////////////////////////строка 1 - верх////////////////////////////////////////////////
                case 49:
                    new Audio('sounds/animals/a0.mp3').play()
                    break;
                case 50:
                    new Audio('sounds/animals/a1.mp3').play()
                    break;
                case 51:
                    new Audio('sounds/animals/a2.mp3').play()
                    break;
                case 52:
                    new Audio('sounds/animals/a3.mp3').play()
                    break;
                case 53:
                    new Audio('sounds/animals/c0.mp3').play()
                    break;
                case 54:
                    break;
                case 55:
                    new Audio('sounds/animals/b0.mp3').play()
                    break;
                case 56:
                    new Audio('sounds/animals/b1.mp3').play()
                    break;
                case 57:
                    new Audio('sounds/animals/b2.mp3').play()
                    break;
                case 48:
                    new Audio('sounds/animals/b3.mp3').play()
                    break;
                case 189:
                    new Audio('sounds/animals/d12.mp3').play()
                    break;
                case 187:
                    new Audio('sounds/animals/d13.mp3').play()
                    break;
                ////////////////////////////////////////////////////строка 2 - верх////////////////////////////////////////////////
                case 81:
                    new Audio('sounds/animals/a4.mp3').play()
                    break;
                case 87:
                    new Audio('sounds/animals/a5.mp3').play()
                    break;
                case 69:
                    new Audio('sounds/animals/a6.mp3').play()
                    break;
                case 82:
                    new Audio('sounds/animals/a7.mp3').play()
                    break;
                case 84:
                    new Audio('sounds/animals/c4.mp3').play()
                    break;
                case 89:
                    break;
                case 85:
                    new Audio('sounds/animals/b4.mp3').play()
                    break;
                case 73:
                    new Audio('sounds/animals/b5.mp3').play()
                    break;
                case 79:
                    new Audio('sounds/animals/b6.mp3').play()
                    break;
                case 80:
                    new Audio('sounds/animals/b7.mp3').play()
                    break;
                case 219:
                    break;
                case 221:
                    break;
                ////////////////////////////////////////////////////строка 3 - верх////////////////////////////////////////////////
                case 65:
                    new Audio('sounds/animals/a8.mp3').play()
                    break;
                case 83:
                    new Audio('sounds/animals/a9.mp3').play()
                    break;
                case 68:
                    new Audio('sounds/animals/a10.mp3').play()
                    break;
                case 70:
                    new Audio('sounds/animals/a11.mp3').play()
                    break;
                case 71:
                    new Audio('sounds/animals/c12.mp3').play()
                    break;
                case 72:
                    break;
                case 74:
                    new Audio('sounds/animals/b8.mp3').play()
                    break;
                case 75:
                    new Audio('sounds/animals/b9.mp3').play()
                    break;
                case 76:
                    new Audio('sounds/animals/b10.mp3').play()
                    break;
                case 186:
                    new Audio('sounds/animals/b11.mp3').play()
                    break;
                case 222:
                    new Audio('sounds/animals/d14.mp3').play()
                    break;
                case 13:
                    new Audio('sounds/animals/d15.mp3').play()
                    break;
                ////////////////////////////////////////////////////строка 4 - верх////////////////////////////////////////////////
                case 90:
                    new Audio('sounds/animals/a12.mp3').play()
                    break;
                case 88:
                    new Audio('sounds/animals/a13.mp3').play()
                    break;
                case 67:
                    new Audio('sounds/animals/a14.mp3').play()
                    break;
                case 86:
                    new Audio('sounds/animals/a15.mp3').play()
                    break;
                case 66:
                    new Audio('sounds/animals/c8.mp3').play()
                    break;
                case 78:
                    break;
                case 77:
                    new Audio('sounds/animals/b12.mp3').play()
                    break;
                case 188:
                    new Audio('sounds/animals/b13.mp3').play()
                    break;
                case 190:
                    new Audio('sounds/animals/b14.mp3').play()
                    break;
                case 191:
                    new Audio('sounds/animals/b15.mp3').play()
                    break;
                case 16:
                    break;
            }
            break;

        case 40:
            switch (button) {
                ////////////////////////////////////////////////////строка 1 - низ////////////////////////////////////////////////
                case 49:
                    new Audio('sounds/animals/c12.mp3').play()
                    break;
                case 50:
                    new Audio('sounds/animals/c4.mp3').play()
                    break;
                case 51:
                    break;
                case 52:
                    break;
                case 53:
                    break;
                case 54:
                    new Audio('sounds/animals/a0.mp3').play()
                    break;
                case 55:
                    new Audio('sounds/animals/d0.mp3').play()
                    break;
                case 56:
                    new Audio('sounds/animals/d1.mp3').play()
                    break;
                case 57:
                    new Audio('sounds/animals/d2.mp3').play()
                    break;
                case 48:
                    new Audio('sounds/animals/d3.mp3').play()
                    break;
                case 189:
                    break;
                case 187:
                    break;
                ////////////////////////////////////////////////////строка 2 - низ////////////////////////////////////////////////
                case 81:
                    new Audio('sounds/animals/c8.mp3').play()
                    break;
                case 87:
                    break;
                case 69:
                    new Audio('sounds/animals/c5.mp3').play()
                    break;
                case 82:
                    new Audio('sounds/animals/c6.mp3').play()
                    break;
                case 84:
                    new Audio('sounds/animals/c7.mp3').play()
                    break;
                case 89:
                    break;
                case 85:
                    new Audio('sounds/animals/d4.mp3').play()
                    break;
                case 73:
                    new Audio('sounds/animals/d5.mp3').play()
                    break;
                case 79:
                    new Audio('sounds/animals/d6.mp3').play()
                    break;
                case 80:
                    new Audio('sounds/animals/d7.mp3').play()
                    break;
                case 219:
                    break;
                case 221:
                    break;
                ////////////////////////////////////////////////////строка 3 - низ////////////////////////////////////////////////
                case 65:
                    new Audio('sounds/animals/c0.mp3').play()
                    break;
                case 83:
                    new Audio('sounds/animals/c1.mp3').play()
                    break;
                case 68:
                    new Audio('sounds/animals/c9.mp3').play()
                    break;
                case 70:
                    new Audio('sounds/animals/c10.mp3').play()
                    break;
                case 71:
                    new Audio('sounds/animals/c11.mp3').play()
                    break;
                case 72:
                    break;
                case 74:
                    new Audio('sounds/animals/d8.mp3').play()
                    break;
                case 75:
                    new Audio('sounds/animals/d9.mp3').play()
                    break;
                case 76:
                    new Audio('sounds/animals/d10.mp3').play()
                    break;
                case 186:
                    new Audio('sounds/animals/d11.mp3').play()
                    break;
                case 222:
                    break;
                case 13:
                    break;
                ////////////////////////////////////////////////////строка 4 - низ////////////////////////////////////////////////
                case 90:
                    new Audio('sounds/animals/c3.mp3').play()
                    break;
                case 88:
                    new Audio('sounds/animals/c2.mp3').play()
                    break;
                case 67:
                    new Audio('sounds/animals/c13.mp3').play()
                    break;
                case 86:
                    new Audio('sounds/animals/c14.mp3').play()
                    break;
                case 66:
                    new Audio('sounds/animals/c15.mp3').play()
                    break;
                case 78:
                    break;
                case 77:
                    new Audio('sounds/animals/d12.mp3').play()
                    break;
                case 188:
                    new Audio('sounds/animals/d13.mp3').play()
                    break;
                case 190:
                    new Audio('sounds/animals/d14.mp3').play()
                    break;
                case 191:
                    new Audio('sounds/animals/d15.mp3').play()
                    break;
                case 16:
                    break;
            }
            break;

        case 37:
            switch (button) {
                ////////////////////////////////////////////////////строка 1 - лево////////////////////////////////////////////////
                case 49:
                    new Audio('sounds/animals2/b0.mp3').play()
                    break;
                case 50:
                    new Audio('sounds/animals2/b1.mp3').play()
                    break;
                case 51:
                    new Audio('sounds/animals2/b2.mp3').play()
                    break;
                case 52:
                    new Audio('sounds/animals2/b3.mp3').play()
                    break;
                case 53:
                    new Audio('sounds/animals2/d0.mp3').play()
                    break;
                case 54:
                    new Audio('sounds/animals2/d1.mp3').play()
                    break;
                case 55:
                    new Audio('sounds/animals2/d2.mp3').play()
                    break;
                case 56:
                    new Audio('sounds/animals2/d3.mp3').play()
                    break;
                case 57:
                    new Audio('sounds/animals2/a0.mp3').play()
                    break;
                case 48:
                    new Audio('sounds/animals2/a1.mp3').play()
                    break;
                case 189:
                    new Audio('sounds/animals2/a2.mp3').play()
                    break;
                case 187:
                    new Audio('sounds/animals2/a3.mp3').play()
                    break;
                ////////////////////////////////////////////////////строка 2 - лево////////////////////////////////////////////////
                case 81:
                    new Audio('sounds/animals2/b4.mp3').play()
                    break;
                case 87:
                    new Audio('sounds/animals2/b5.mp3').play()
                    break;
                case 69:
                    new Audio('sounds/animals2/b6.mp3').play()
                    break;
                case 82:
                    new Audio('sounds/animals2/b7.mp3').play()
                    break;
                case 84:
                    new Audio('sounds/animals2/d4.mp3').play()
                    break;
                case 89:
                    new Audio('sounds/animals2/d5.mp3').play()
                    break;
                case 85:
                    new Audio('sounds/animals2/d6.mp3').play()
                    break;
                case 73:
                    new Audio('sounds/animals2/d7.mp3').play()
                    break;
                case 79:
                    new Audio('sounds/animals2/a4.mp3').play()
                    break;
                case 80:
                    new Audio('sounds/animals2/a5.mp3').play()
                    break;
                case 219:
                    new Audio('sounds/animals2/a6.mp3').play()
                    break;
                case 221:
                    new Audio('sounds/animals2/a7.mp3').play()
                    break;
                ////////////////////////////////////////////////////строка 3 - лево////////////////////////////////////////////////
                case 65:
                    new Audio('sounds/animals2/b8.mp3').play()
                    break;
                case 83:
                    new Audio('sounds/animals2/b9.mp3').play()
                    break;
                case 68:
                    new Audio('sounds/animals2/b10.mp3').play()
                    break;
                case 70:
                    new Audio('sounds/animals2/b11.mp3').play()
                    break;
                case 71:
                    new Audio('sounds/animals2/d8.mp3').play()
                    break;
                case 72:
                    new Audio('sounds/animals2/d9.mp3').play()
                    break;
                case 74:
                    new Audio('sounds/animals2/d10.mp3').play()
                    break;
                case 75:
                    new Audio('sounds/animals2/d11.mp3').play()
                    break;
                case 76:
                    new Audio('sounds/animals2/c4.mp3').play()
                    break;
                case 186:
                    new Audio('sounds/animals2/c5.mp3').play()
                    break;
                case 222:
                    new Audio('sounds/animals2/c6.mp3').play()
                    break;
                case 13:
                    break;
                ////////////////////////////////////////////////////строка 4 - лево////////////////////////////////////////////////
                case 90:
                    new Audio('sounds/animals2/b12.mp3').play()
                    break;
                case 88:
                    new Audio('sounds/animals2/b13.mp3').play()
                    break;
                case 67:
                    new Audio('sounds/animals2/b14.mp3').play()
                    break;
                case 86:
                    new Audio('sounds/animals2/b15.mp3').play()
                    break;
                case 66:
                    new Audio('sounds/animals2/d12.mp3').play()
                    break;
                case 78:
                    new Audio('sounds/animals2/d13.mp3').play()
                    break;
                case 77:
                    new Audio('sounds/animals2/d14.mp3').play()
                    break;
                case 188:
                    new Audio('sounds/animals2/d15.mp3').play()
                    break;
                case 190:
                    new Audio('sounds/animals2/c8.mp3').play()
                    break;
                case 191:
                    new Audio('sounds/animals2/c9.mp3').play()
                    break;
                case 16:
                    new Audio('sounds/animals2/c10.mp3').play()
                    break;
            }
            break;

        case 39:
            break;
    }
}