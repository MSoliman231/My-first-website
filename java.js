
var toggleBtn = document.getElementById("toggle-sidebar-btn");
var sidebar = document.querySelector(".sidebar");

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

      



var passwordInput = [];
var submitButton = [];
var validPassword = "password";
var usedPasswords = [];

for (let i = 1; i <= 550; i++) {
    passwordInput[i] = document.getElementById("passwordInput" + i);
    submitButton[i] = document.getElementById("button" + i);
    usedPasswords[i] = [];
}

for (let i = 1; i <= 550; i++) {
  submitButton[i].addEventListener("click", function() {
    var enteredPassword = passwordInput[i].value;
    var imageInput = document.getElementById("imageInput" + i).value;
    var titleInput = document.getElementById("titleInput" + i).value;
    var linkInput = document.getElementById("linkInput" + i).value;
    if (imageInput === "" || titleInput === "" || linkInput === "") {
      alert("Please fill in all the inputs.");
    } else if (enteredPassword === "") {
      alert("Please enter a password.");
    } else if (enteredPassword !== validPassword ) {
      alert("Wrong password please try again.");
    }else if (usedPasswords[i].includes(enteredPassword)) {
      alert("Password already been used.");
    } else {
      setImageAndTitleAndLink(i, enteredPassword);
      usedPasswords[i].push(enteredPassword);
    }
  });
}

function setImageAndTitleAndLink(i, enteredPassword) {
  var file = document.getElementById("imageInput" + i).files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
      if(enteredPassword === validPassword){
          document.querySelector("#link" + i).href = document.getElementById("linkInput" + i).value;
          document.querySelector("#image" + i).title = document.getElementById("titleInput" + i).value;
          document.querySelector("#image" + i).src = reader.result;
          changeImage(i);
      }
  };
  reader.readAsDataURL(file);
}


function changeImage(i) {
  var img = new Image();
  img.src = document.querySelector("#image" + i).src;
  img.onload = function(){
      setTimeout(function () {
          document.querySelector("#link" + i).href = "#";
          var image = document.querySelector("#image" + i);
          image.src = "";
          image.title = "";
      }, (1*1*1*1*60*1000));
  }
}


var usedForms = [];
function openForm() {
    // Get the user's input
    var formNumber = document.getElementById("formNumber").value;
    // Check if the selected form has been used before and if the time of the image is over
    if (usedForms.includes(formNumber)) {
        var image = document.querySelector(`#image${formNumber}`);
        if (image.src === "") {
            usedForms = usedForms.filter(function(form) {
                return form !== formNumber;
            });
        } else {
            alert("This Area has been used and the has not expired yet. Please try another Area or wait for the image to expire.");
            return;
        }
    }
    // Show the selected form
    document.getElementById(`form${formNumber}`).style.display = "block";
    usedForms.push(formNumber);
}
function previewImage(event, i) {
        var input = event.target;
        var file = input.files[0];
        var reader = new FileReader();
      
        reader.onload = function() {
          var preview = document.querySelector(`#preview${i}`);
          preview.src = reader.result;
          preview.style.display = "block";
        }
        reader.readAsDataURL(file);
      }
   



     const topbarmodals = document.querySelectorAll('.topbarmodals');
const topbarmodal = document.querySelectorAll('.topbarmodal');
const modalclose = document.querySelectorAll('.modalclose');

topbarmodals.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

modalclose.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    const modal = closeBtn.closest('.topbarmodal');
    modal.style.display = 'none';
  });
});

window.addEventListener('click', e => {
  if (e.target.classList.contains('topbarmodal')) {
    e.target.style.display = 'none';
  }
});

