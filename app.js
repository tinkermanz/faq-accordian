const svgLoader = document.querySelectorAll(".question-icon-div");
const answerdivs = document.querySelectorAll(".answer-div");
let clicked = [1, 1, 1, 1];
svgLoader.forEach((element, i) => {
	element.children[0].src = "./assets/images/icon-plus.svg";
	element.addEventListener("click", () => {
		if (clicked[i]) {
			clicked[i] = 0;
			svgLoader[i].children[0].src = "./assets/images/icon-minus.svg";
		} else {
			clicked[i] = 1;
			svgLoader[i].children[0].src = "./assets/images/icon-plus.svg";
		}
		answerdivs[i].classList.toggle("active");
	});
});
