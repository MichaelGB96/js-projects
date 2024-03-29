const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete item from the list event
itemList.addEventListener('click', removeItem);
//  Filter event
filter.addEventListener('keyup', filterItems)

function addItem(e) {
    e.preventDefault();

    // Get input value
    const newItem = document.getElementById('item').value;
    // Create new li element
    const li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // Create del button element
    const deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);
    // Append li to list
    itemList.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    // convert text to lower case
    const text = e.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');
    Array.from(items).forEach((item) => {
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}