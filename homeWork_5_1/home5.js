    var myDivElement = document.getElementsByClassName("myClass")[0]
    var myLink = document.getElementsByTagName("a")[0]
    var myBtn = document.getElementById("myBtn")


    myLink.addEventListener("click", addClass)

        function addClass() {
            myDivElement.classList.toggle("classSwitch")
        }



    myBtn.addEventListener("click" , delDiv)

        function delDiv() {
             myDivElement.parentElement.removeChild(myDivElement)
        }





