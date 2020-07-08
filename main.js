// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
// console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
//KATA 01
// Filter the users array to show only the users with an isActive property of true.
const usersAreActive = users
    .filter(users => users.isActive === true)
    console.log(usersAreActive)
printKata(1, usersAreActive)


//KATA 02
// Map over the users array to show only the email addresses of the users.
const emailOnly = users 
    .map(users => users.email)
    console.log(emailOnly)
printKata(2, emailOnly)

//KATA 03
//Check whether at least one user in the users array has a company property of "OVATION".
const companyOvation = users 
    .some(users => users.company === 'OVATION')
    console.log(companyOvation)
printKata(3, companyOvation)


//KATA 04
//Find the first user in the array over the age of 38.
const over38 = users 
    .find(users => users.age > 38)
printKata(4, over38)

//KATA 05
//Find the first user in the array over the age of 38 who is active.
const over38IsActive = users 
    .filter(users => users.isActive === true)
    .find(users => users.age > 38)
printKata(5, over38IsActive)

//KATA 06
//Show the balance of every user in the array from the "ZENCO" company.
const balanceZenco = users 
    .filter(users => users.company === 'ZENCO')
    .map(users => users.balance)
    
printKata(6,balanceZenco)

//KATA 07
//Show the age of every user with the "fugiat" tag.
const usersWithFugiat = users 
    .filter(users => users.tags.includes('fugiat'))
    .map(users => users.age)
    
printKata(7,usersWithFugiat)

//Not a Kata, just verification -- 
// const over38List = users 
//     .filter(users => users.age > 38)
// printKata(10,over38List)