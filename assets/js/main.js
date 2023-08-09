window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var scrollPosition = window.scrollY;
  
    if (window.scrollY >= 70) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


  document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".skill__btn li");
    const skillDetailLists = document.querySelectorAll(".skill--detail-list");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons and skill detail lists
            tabButtons.forEach(btn => btn.classList.remove("active"));
            skillDetailLists.forEach(list => list.classList.remove("active"));

            // Add active class to the clicked button and show the corresponding skill detail list
            button.classList.add("active");
            const tabId = button.getAttribute("data-tab");
            const skillDetailList = document.querySelector(`.skill--detail-${tabId}-list`);
            if (skillDetailList) {
                skillDetailList.classList.add("active");
            }
        });
    });
});

