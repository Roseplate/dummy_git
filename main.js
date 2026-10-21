let mode = false;

function thing() {
    console.log("hi")
    if (mode) {
        document.documentElement.style.setProperty('--background-var-col', 'cadetblue');
    } else {
        document.documentElement.style.setProperty('--background-var-col', '#cc2e48');
    }
    mode = !mode;
}