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

const cleanedContactList = contactList.map((name) => name.toLowerCase());

const request = document.querySelector("#contactRequest")
const addition = document.querySelector("#contactAddition")
const searchInput = document.querySelector("#search")
const addInput = document.querySelector("#add")
const triggerSearch = document.querySelector("#triggerSearch")
const triggerAdd = document.querySelector("#triggerAdd")

triggerSearch.addEventListener(`click`, contactSearcher);
triggerAdd.addEventListener(`click`, contactAdder);

function contactSearcher() 
{
    const searchName = searchInput.value.toLowerCase();
    searchInput.value = ``;
    searchInput.focus();
    request.textContent = ``;
    let found = false;

    for (const contact of cleanedContactList) {
        const splitContact = contact.split(` `);
        for (const contents of splitContact) {
            if (contents.includes(searchName)) {
                request.textContent = `${contact}`;
                found = true;
                break;
            }  
        }
        if (found === true) {
            break;
        }
    }

    if (found !== true) {
        failedSearch();
    }
    

}

function contactAdder() {
    console.log(addInput.value)
    const addition = addInput.value
    contactList.push(addition)

}

function failedSearch(n) {
    request.textContent = `Contact not Found`;
}