if (document.querySelector("#open_nav")) {
  var nav = document.querySelector("#nav");
  document.querySelector("#open_nav").addEventListener("click", (e) => {
    e.preventDefault();
    if (nav.classList.contains("d-none")) {
      nav.classList.remove("d-none");
      document.querySelector(".main-content").classList.remove("m-0");
    } else {
      nav.classList.add("d-none");
    }
  });
}

function openPopup() {
  document.getElementById("myPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}

document.querySelector("#close_this_nav").addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector("#nav").classList.add("d-none");
});
document.querySelectorAll("[data-toggle]").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const toggleValue = e.target.getAttribute("data-toggle");
    // alert(toggleValue);
    const toggleId = toggleValue;
    document
      .querySelectorAll(".tab-pane , .task")
      .forEach((tab) => tab.classList.remove("active"));
    document.getElementById(toggleId).classList.add("active");
    document.querySelector(`.${toggleId}`).classList.add("active");
  });
});
