const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

//checks if there are items in localStorage first and if nothing stored, start with empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    //key/value store. localstorage stores STRINGS!
    //so stringify the values you want to pass it
    //to get it back as an object use JSON.parse()
    this.reset();
}

function populateList(plates = [], platesList) {
    //map over an array named plates
    // i is the index
    //map takes in an array of raw data and returns an array of new data?
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
        <label for="item${i}">
        ${plate.text}
        </label>
        </li>`;
    }).join(''); //join to turn into string
}

//event Delegation, looks at the parent and have them pass on the event listener to the child
function toggleDone(e) {
    if (!e.target.matches('input')) return;

    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done; //flip-flopping between true and false

    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);

    console.log(el.dataset.index); //the index of the item clicked by //looking at it's data-index


}


//yay! Time to store data in localStorage! - getItem, setItem, removeItem
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);

/* need to add clearAll and checkAll functions later */