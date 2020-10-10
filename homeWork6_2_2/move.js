var btnStart = document.getElementById("start")
var btnStop = document.getElementById("stop")
var elem = document.getElementById("elem")
var s = 0
var setInt
var sMax = 9



    btnStart.onclick = function () {
       setInt = setInterval(function () {
            goElem()
        } , 1000)



        }


        function goElem() {
                elem.style.left = s + '10px'
                s++
            if (s === sMax) {
                s = 0
            }

                  }








    btnStop.onclick = function () {
        clearInterval(setInt)
    }



