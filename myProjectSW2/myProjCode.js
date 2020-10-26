var demo1 = document.getElementById("demo1")
var demo2 = document.getElementById("demo2")
var demo3 = document.getElementById("demo3")
var demo4 = document.getElementById("demo4")
var demo5 = document.getElementById("demo5")
var demo6 = document.getElementById("demo6")
var demo7 = document.getElementById("demo7")
var demo8 = document.getElementById("demo8")
var demo9 = document.getElementById("demo9")
var demo10 = document.getElementById("demo10")

var names = document.querySelectorAll('p')
var data = {}
var myArr = {}
var pageCount = 1
var url = 'https://swapi.dev/api/people/?page=' + pageCount
var upBtn = document.getElementById('upBtn')
var downBtn = document.getElementById('downBtn')
var listInfo = document.getElementById('demo')
var btnBack = document.getElementById('backBtn')
var demoDiv = document.getElementById('demoDiv')




var getJson = function(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            myData = xhr.response
            myArr = myData.results
            demo1.innerHTML = myArr[0].name
            demo2.innerHTML = myArr[1].name
            demo3.innerHTML = myArr[2].name
            demo4.innerHTML = myArr[3].name
            demo5.innerHTML = myArr[4].name
            demo6.innerHTML = myArr[5].name
            demo7.innerHTML = myArr[6].name
            demo8.innerHTML = myArr[7].name
            demo9.innerHTML = myArr[8].name
            demo10.innerHTML = myArr[9].name
        }
    };
    xhr.send();
}

var pageSwitchNext = function () {
    pageCount = pageCount + 1
}

var pageSwitchPrev = function () {
    pageCount = pageCount - 1

}

upBtn.onclick = function () {
    getJson('https://swapi.dev/api/people/?page=' + pageCount)
    pageSwitchNext()
    if (pageCount == 9) {
        pageCount = 8
    }
}

downBtn.onclick = function () {
    getJson('https://swapi.dev/api/people/?page=' + pageCount)
    pageSwitchPrev()
    if (pageCount == 0) {
        pageCount = 1
    }
}

btnBack.onclick = function () {
    listInfo.innerHTML = " "
    demoDiv.classList.toggle("visible")
}

names.forEach(function (btn) {
        btn.addEventListener("click", function(apiObj) {
            console.log(apiObj.target.innerHTML)
            for (var i = 0; i < myArr.length; i++) {
                if (apiObj.target.innerHTML === myArr[i].name) {
                    var myPerson = Object(myArr[i])
                    demoDiv.classList.toggle("visible")
                    var myP1 = document.createElement('li')
                    var myP2 = document.createElement('li')
                    var myP3 = document.createElement('li')
                    var myP4 = document.createElement('li')
                    var myP5 = document.createElement('li')
                    var myP6 = document.createElement('li')
                    var myP7 = document.createElement('li')
                    myP1.innerHTML = myPerson.name
                    myP2.innerHTML = myPerson.birth_year
                    myP3.innerHTML = myPerson.gender
                    myP4.innerHTML = myPerson.mass
                    myP5.innerHTML = myPerson.hair_color
                    myP6.innerHTML = myPerson.skin_color
                    myP7.innerHTML = myPerson.height
                    listInfo.appendChild(myP1)
                    listInfo.appendChild(myP2)
                    listInfo.appendChild(myP3)
                    listInfo.appendChild(myP4)
                    listInfo.appendChild(myP5)
                    listInfo.appendChild(myP6)
                    listInfo.appendChild(myP7)
                }
            }
        })
    }

)
