const Companies = document.getElementById("COMPANIES");
const Templates = document.getElementById("TEMPLATES");
const Queries = document.getElementById("QUERIES");

count(10, 1000, Companies);
count(314, 1000, Templates);
count(12, 1000, Queries);

/*  
    number - number to which function count
    time - duration of counting (ms)
    element - element which innerText will be changed
*/
function count(number, time, element) {
	let ExtraText;

	switch (element) {
		case Companies:
			ExtraText = "k+";
			break;
		case Templates:
			ExtraText = null;
			break;
		case Queries:
			ExtraText = "M+";
			break;
	}

	for (let i = 0; i <= number; i++) {
		setTimeout(() => {
			element.innerText = i + ExtraText;
		}, (time / number) * i);
	}
}
