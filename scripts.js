const contactList = [
    "Lorem Ipsum",
    "Sigurd",
    "Richard the lionheart",
    "Julianne Harvey",
    "Gillian Cosgrove",
    "Hannah Aufhausen",
    "Kim Nguyen",
    "Fore El Gato",

]

const request = document.querySelector("#contactRequest")
const addition = document.querySelector("#contactAddition")
const searchInput = document.querySelector("#search")
const addInput = document.querySelector("#add")
const triggerSearch = document.querySelector("#triggerSearch")
const triggerAdd = document.querySelector("#triggerAdd")

triggerSearch.addEventListener(`click`, contactSearcher);

function contactSearcher() {
    const searchName = searchInput.toLowerCase();
    searchInput.value = ``;
    searchInput,focus();
    request.textContent = ``;
    for (const contact of contactList) {
        const splitContact = contact.split(` `);
        for (const contents of splitContact) {
            if contents.includes(searchName) {
                request.textContent = `${searchInput}`;
                break;
            } else {
                failedSearch();
            }
            
        }
    }

}

function contactAdder() {

}

function failedSearch(n) {
    request.textContent = `Contact not Found`
}