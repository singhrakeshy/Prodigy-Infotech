const pole = document.querySelector(".pole");
const navList = document.querySelector(".menu-overlay");

pole.addEventListener("click", function() {
	navList.classList.toggle("active");
	pole.classList.toggle("click");
})