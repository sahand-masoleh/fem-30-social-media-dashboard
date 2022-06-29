const themes = {
	light: {
		bg: "#ffffff",
		topBgPattern: "#f5f7ff",
		cardBg: "#f0f2fa",
		lightText: "#63687e",
		darkText: "#1e202a",
	},
	dark: {
		bg: "#1f2029",
		topBgPattern: "#1f212e",
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
}

toggle.checked = false;
paint();
