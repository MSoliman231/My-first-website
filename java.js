      var toggleBtn = document.getElementById("toggle-sidebar-btn");
      var sidebar = document.querySelector(".sidebar");
      var image1Counter = 0;
      var image2Counter = 0;
      var image3Counter = 0;
      var image4Counter = 0;
      var image5Counter = 0;
      var image6Counter = 0;
      var image7Counter = 0;
      var image8Counter = 0;
      var image9Counter = 0;
      var image10Counter = 0;
      var image11Counter = 0;
      var image12Counter = 0;

      let modalBtns = [...document.querySelectorAll(".button1")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };
      
      function togglePasswordVisibility(event) {
        var passwordInput = event.target.previousElementSibling;
        if (event.target.checked) {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }
      toggleBtn.addEventListener("click", function() {
        sidebar.style.visibility = (sidebar.style.visibility === "visible") ? "hidden" : "visible";
      });
      
      document.getElementById("link1").addEventListener("click", function () {
        image1Counter++;
        document.getElementById("image1Counter").innerHTML = image1Counter;
      });
      document.getElementById("link2").addEventListener("click", function () {
        image2Counter++;
        document.getElementById("image2Counter").innerHTML = image2Counter;
      });
      document.getElementById("link3").addEventListener("click", function () {
        image3Counter++;
        document.getElementById("image3Counter").innerHTML = image3Counter;
      });
      document.getElementById("link4").addEventListener("click", function () {
        image4Counter++;
        document.getElementById("image4Counter").innerHTML = image4Counter;
      });
      document.getElementById("link5").addEventListener("click", function () {
        image5Counter++;
        document.getElementById("image5Counter").innerHTML = image5Counter;
      });
      document.getElementById("link6").addEventListener("click", function () {
        image6Counter++;
        document.getElementById("image6Counter").innerHTML = image6Counter;
      });
      document.getElementById("link7").addEventListener("click", function () {
        image7Counter++;
        document.getElementById("image7Counter").innerHTML = image7Counter;
      });
      document.getElementById("link8").addEventListener("click", function () {
        image8Counter++;
        document.getElementById("image8Counter").innerHTML = image8Counter;
      });
      document.getElementById("link9").addEventListener("click", function () {
        image9Counter++;
        document.getElementById("image9Counter").innerHTML = image9Counter;
      });
      document.getElementById("link10").addEventListener("click", function () {
        image10Counter++;
        document.getElementById("image10Counter").innerHTML = image10Counter;
      });
      document.getElementById("link11").addEventListener("click", function () {
        image11Counter++;
        document.getElementById("image11Counter").innerHTML = image11Counter;
      });
      document.getElementById("link12").addEventListener("click", function () {
        image12Counter++;
        document.getElementById("image12Counter").innerHTML = image12Counter;
      });
      
      var timeouts = [];

function setImageAndTitleAndLink(i) {
    var file = document.getElementById("imageInput" + i).files[0];
    var selectedTime = document.querySelector(`input[name="time-select-${i}"]:checked`);
    if (selectedTime) {
        var time = parseInt(selectedTime.value);
        var reader = new FileReader();
        reader.onloadend = function () {
            document.querySelector("#link" + i).href = document.getElementById("linkInput" + i).value;
            document.querySelector("#image" + i).title = document.getElementById("titleInput" + i).value;
            document.querySelector("#image" + i).src = reader.result;
            changeImage(i, time);
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please select a time!");
    }
}

function changeImage(i, time) {
    var img = new Image();
    img.src = document.querySelector("#image" + i).src;
    img.onload = function(){
        if (timeouts[i]) {
            clearTimeout(timeouts[i]);
        }
        timeouts[i] = setTimeout(function () {
            document.querySelector("#link" + i).href = "#";
            document.querySelector("#image" + i).src = "";
            document.getElementById("linkInput" + i).value = "";
            document.getElementById("titleInput" + i).value = "";
            document.getElementById("imageInput" + i).value = "";
        }, (time*1000));
    }
}

      document.getElementById("button1").addEventListener("click", function () {
        setImageAndTitleAndLink(1);
      });
      document.getElementById("button2").addEventListener("click", function () {
        setImageAndTitleAndLink(2);
      });
      document.getElementById("button3").addEventListener("click", function () {
        setImageAndTitleAndLink(3);
      });
      document.getElementById("button4").addEventListener("click", function () {
        setImageAndTitleAndLink(4);
      });
      document.getElementById("button5").addEventListener("click", function () {
        setImageAndTitleAndLink(5);
      });
      document.getElementById("button6").addEventListener("click", function () {
        setImageAndTitleAndLink(6);
      });
      document.getElementById("button7").addEventListener("click", function () {
        setImageAndTitleAndLink(7);
      });
      document.getElementById("button8").addEventListener("click", function () {
        setImageAndTitleAndLink(8);
      });
      document.getElementById("button9").addEventListener("click", function () {
        setImageAndTitleAndLink(9);
      });
      document.getElementById("button10").addEventListener("click", function () {
        setImageAndTitleAndLink(10);
      });
      document.getElementById("button11").addEventListener("click", function () {
        setImageAndTitleAndLink(11);
      });
      document.getElementById("button12").addEventListener("click", function () {
        setImageAndTitleAndLink(12);
      });
      document.getElementById("button13").addEventListener("click", function () {
        setImageAndTitleAndLink(13);
      });
      document.getElementById("button14").addEventListener("click", function () {
        setImageAndTitleAndLink(14);
      });
      document.getElementById("button15").addEventListener("click", function () {
        setImageAndTitleAndLink(15);
      });
      document.getElementById("button16").addEventListener("click", function () {
        setImageAndTitleAndLink(16);
      });
      document.getElementById("button17").addEventListener("click", function () {
        setImageAndTitleAndLink(17);
      });
      document.getElementById("button18").addEventListener("click", function () {
        setImageAndTitleAndLink(18);
      });
      document.getElementById("button19").addEventListener("click", function () {
        setImageAndTitleAndLink(19);
      });
      document.getElementById("button20").addEventListener("click", function () {
        setImageAndTitleAndLink(20);
      });
      document.getElementById("button21").addEventListener("click", function () {
        setImageAndTitleAndLink(21);
      });
      document.getElementById("button22").addEventListener("click", function () {
        setImageAndTitleAndLink(22);
      });
      document.getElementById("button23").addEventListener("click", function () {
        setImageAndTitleAndLink(23);
      });
      document.getElementById("button24").addEventListener("click", function () {
        setImageAndTitleAndLink(24);
      });
      document.getElementById("button25").addEventListener("click", function () {
        setImageAndTitleAndLink(25);
      });
      document.getElementById("button26").addEventListener("click", function () {
        setImageAndTitleAndLink(26);
      });
      document.getElementById("button27").addEventListener("click", function () {
        setImageAndTitleAndLink(27);
      });
      document.getElementById("button28").addEventListener("click", function () {
        setImageAndTitleAndLink(28);
      });
      document.getElementById("button29").addEventListener("click", function () {
        setImageAndTitleAndLink(29);
      });
      document.getElementById("button30").addEventListener("click", function () {
        setImageAndTitleAndLink(30);
      });
      document.getElementById("button31").addEventListener("click", function () {
        setImageAndTitleAndLink(31);
      });
      document.getElementById("button32").addEventListener("click", function () {
        setImageAndTitleAndLink(32);
      });
      document.getElementById("button33").addEventListener("click", function () {
        setImageAndTitleAndLink(33);
      });
      document.getElementById("button34").addEventListener("click", function () {
        setImageAndTitleAndLink(34);
      });
      document.getElementById("button35").addEventListener("click", function () {
        setImageAndTitleAndLink(35);
      });
      document.getElementById("button36").addEventListener("click", function () {
        setImageAndTitleAndLink(36);
      });
      document.getElementById("button37").addEventListener("click", function () {
        setImageAndTitleAndLink(37);
      });

        function openForm() {
          // Get the user's input
          var formNumber = document.getElementById("formNumber").value;
          // Hide all forms
          for (var i = 1; i <= 3; i++) {
              document.getElementById(`form${i}`).style.display = "none";
          }
          // Show the selected form
          document.getElementById(`form${formNumber}`).style.display = "block";
      }