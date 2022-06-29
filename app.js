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

let currentTheme = "light";
const toggle = document.querySelector(".toggle__input");
const toggleBtn = document.querySelector(".toggle__button");
toggle.addEventListener("click", handleSwitchTheme);

function handleSwitchTheme(event) {
	const { checked } = event.target;
	currentTheme = checked ? "dark" : "light";
	paint();
}

toggleBtn.addEventListener("click", handleToggle);
function handleToggle() {
	toggle.click();
}

const body = document.querySelector("body");
function paint() {
	body.style.setProperty("--body-color", themes[currentTheme].bg);
	body.style.setProperty("--primary-text", themes[currentTheme].darkText);
	body.style.setProperty("--secondary-text", themes[currentTheme].lightText);
	body.style.setProperty("--card-bg", themes[currentTheme].topBgPattern);
}

toggle.checked = false;
paint();
