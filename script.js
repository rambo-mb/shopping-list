const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearAllBtn = document.getElementById('clear')
const itemFilter = document.getElementById('filter')

function addItem(e) {
	e.preventDefault()

	const newItem = itemInput.value.trim()

	//Validate input
	if (newItem === '') {
		alert('Please add an item')
		return
	}

	// Create list item
	const li = document.createElement('li')
	li.appendChild(document.createTextNode(newItem))

	const button = createButton('remove-item btn-link text-red')
	li.appendChild(button)

	itemList.appendChild(li)

	checkUI()

	itemInput.value = ''
}

function createButton(classes) {
	const button = document.createElement('button')
	button.className = classes

	const icon = createIcon('fa-solid fa-xmark')
	button.appendChild(icon)

	return button
}

function createIcon(classes) {
	const icon = document.createElement('i')
	icon.className = classes
	return icon
}

function clearAll() {
	const items = itemList.querySelectorAll('li')
	if (items.length === 0) {
		return
	}

	items.forEach(item => item.remove())
	checkUI()
}

function removeItem(e) {
	if (e.target.parentElement.classList.contains('remove-item')) {
		if (confirm('Are you sure?')) {
			e.target.parentElement.parentElement.remove()
			checkUI()
		}
	}
}

function checkUI() {
	const items = itemList.querySelectorAll('li')
	if (items.length === 0) {
		clearAllBtn.style.display = 'none'
		itemFilter.style.display = 'none'
	} else {
		clearAllBtn.style.display = 'block'
		itemFilter.style.display = 'block'
	}
}

// Event Listners
itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearAllBtn.addEventListener('click', clearAll)

// Run
checkUI()
