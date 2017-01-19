const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    //check if shit key held down AND check that they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        //go ahead and do what we need
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
            }

            if (inBetween) {
                checkbox.checked = true;
            }

        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));