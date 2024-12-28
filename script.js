const heading = document.querySelector("h1");
let now = new Date();
setInterval(() => {
	if (now.getMonth() === 0 && now.getDate() === 1)
		heading.textContent = 'YES';
	else
		heading.textContent = 'NO';
}, 60);