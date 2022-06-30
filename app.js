const themes = {
	light: {
		bg: "#F8F9FE",
		topBgPattern: "#F0F3FA",
		cardBg: "#f0f2fa",
		lightText: "#63687e",
		darkText: "#1e202a",
	},
	dark: {
		bg: "#1f2029",
		topBgPattern: "#252B43",
		cardBg: "#252a41",
		lightText: "#8b97c6",
		darkText: "#ffffff",
	},
};

const body = document.querySelector("body");
let currentTheme = "light";

const toggle = document.querySelector(".toggle__input");
const toggleBtn = document.querySelector(".toggle__button");
toggle.addEventListener("click", handleSwitchTheme);

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
	toggle.click();
} else {
	paint();
}

function handleSwitchTheme() {
	const { checked } = toggle;
	currentTheme = checked ? "dark" : "light";
	localStorage.setItem("theme", currentTheme);
	paint();
}

toggleBtn.addEventListener("click", handleToggle);
function handleToggle() {
	toggle.click();
}

function paint() {
	body.style.setProperty("--body-color", themes[currentTheme].bg);
	body.style.setProperty("--primary-text", themes[currentTheme].darkText);
	body.style.setProperty("--secondary-text", themes[currentTheme].lightText);
	body.style.setProperty("--card-bg", themes[currentTheme].topBgPattern);
}
