const themes = {
	light: {
		bg: "#fff",
		topBgPattern: "hsl(225, 100%, 98%)",
		cardBg: "#f0f2fa",
		lightText: "#63687e",
		darkText: "#1e202a",
	},
	dark: {
		bg: "hsl(230, 17%, 14%)",
		topBgPattern: "hsl(232, 19%, 15%)",
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
	body.style.setProperty("--card-bg", themes[currentTheme].cardBg);
	body.style.setProperty("--top-bg-pattern", themes[currentTheme].topBgPattern);
}
