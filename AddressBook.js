// UC1 (Create Contact)

class Contact{
    firstName;
    lastName;
    address;
    state;
    city;
    zipCode;
    email;
    phoneNumber;

    constructor(firstName, lastName, address, state, city, zipCode, email, phoneNumber){
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.state = state
        this.city = city
        this.zipCode = zipCode
        this.email = email
        this.phoneNumber = phoneNumber
    }
}





// UC2 (Validation)

var addressBook = new Array();

function contactDetails(firstName, lastName, address, state, city, zipCode, email, phoneNumber){
    addressBook.filter(contact => contact.firstName == firstName)
    .reduce(() => count++ , count = 0);
    if(count > 0){
        console.log(firstName + " is already present")
    }
    else{
        const firstNamePattern = /^[A-Z][a-zA-Z]{3,}/;
        let firstName_Check = firstNamePattern.test(firstName);

        const lastNamePattern = /^[A-Z][a-zA-Z]{3,}/;
        let lastName_Check = lastNamePattern.test(lastName);

        const addressPattern = /^[A-Za-zA-Z0-9]{3,}/;
        let address_Check = addressPattern.test(address);

        const statePattern = /^[A-Za-zA-Z]{3,}/;
        let state_Check = statePattern.test(state);

        const cityPattern = /^[A-Za-zA-Z]{3,}/;
        let city_Check = cityPattern.test(city);

        const zipCodePattern = /^[0-9]{6}/;
        let zipCode_Check = zipCodePattern.test(zipCode) ;

        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        let email_Check = emailPattern.test(email);

        const phoneNumberPattern = /^[0-9]{10}/;
        let phoneNumber_Check = phoneNumberPattern.test(phoneNumber);

        if(firstName_Check == true && lastName_Check == true && address_Check == true && state_Check == true && city_Check == true && zipCode_Check == true && email_Check == true && phoneNumber_Check == true){
            let newContact = new Contact(firstName,lastName,address,state,city,zipCode,email,phoneNumber);
            console.log("Contact added successfully");    
            addressBook.push(newContact);
        }
        else{
            throw 'Contact details are invalid';
        }
    }   
}





// UC3 (Add contact) 

contactDetails('Dhruv', 'Varshney', 'Chamad gate', 'Uttar Pradesh', 'Hathras', "204101", 'dhruv@gmail.com', "8427749249");
console.log(addressBook);





// UC4 (Find and edit contact)

function editContact(findName, editedVariable, variableNewValue){
    if(addressBook.length == null){
        console.log("Add contact in address book");
    }
    else{
        addressBook.forEach(newContact => {
            if(newContact.firstName == findName){
                switch(editedVariable){
                    case "firstName":
                        newContact.firstName = variableNewValue;
                        break;
                    case "lastName":
                        newContact.lastName = variableNewValue;
                        break;
                    case "address":
                        newContact.address = variableNewValue;
                        break;
                    case "state":
                        newContact.state = variableNewValue;
                        break;
                    case "city":
                        newContact.city = variableNewValue;
                        break;
                    case "zipCode":
                        newContact.zipCode = variableNewValue;
                        break;  
                    case "firstName":
                        newContact.firstName = variableNewValue;
                        break;
                    case "lastName":
                        newContact.lastName = variableNewValue;
                        break;      
                }
            }
        })
    }
}





// UC5 (Delete contact)

function deleteContact(first_Name){
    if(addressBook.length == null){
        console.log("Add contact in address book");
    }
    else{
        for(let i=0; i <addressBook.length ; i++){
            if(addressBook[i].firstName == first_Name){
                addressBook.splice(i, 1);
                console.log("Contact deleted successfully");
            }
        }
    }
}





// UC6 (Find number of contacts using reduce function)

function numberOfContacts(){
    return addressBook.reduce((total) => total + 1, 0);
}

console.log("Total contacts : " + numberOfContacts());






// UC7 (Duplicate contact check)

function isDuplicate(firstName) {
    let duplicates = addressBook.filter(contact => contact.firstName === firstName);
    let duplicateCount = duplicates.reduce((count) => count + 1, 0);
    return duplicateCount > 0;
}





// UC8 (Search contact by city or state)

function searchByCity_State(choice , name){
    if(choice == "city"){
        person = addressBook.filter(contact => contact.city == name)
        .map(contact => contact.firstName);
        console.log("Contact found from " + name);
        console.log(person);
    }
    else if(choice == "state"){
        person = addressBook.filter(contact => contact.state == name)
        .map(contact => contact.firstName);
        console.log("Contact found from " + name);
        console.log(person);
    }
    else{
        console.log("Invalid city or state");
    }
}





// UC9 (View contact by city or state)
 
function viewByCity_State(choice, name){
    if(choice == "city"){
        person = addressBook.filter(contact => contact.city == name)
        console.log("Contact found from " + name);
        console.log(person);
    }
    else if(choice == "state"){
        person = addressBook.filter(contact => contact.state == name)
        console.log("Contact found from " + name);
        console.log(person);
    }
    else{
        console.log("Invalid city or state");
    }
}





// UC10 (Count contact by city or state)

function countContactInCity_State(choice , name){
    if(choice == "city"){
        person = addressBook.filter(contact => contact.city == name)
        .reduce(() => { count++;},count = 0);
        console.log("Total contact found from " + name + " are " + count);
    }
    else if(choice == "state"){
        person = addressBook.filter(contact => contact.state == name)
        .reduce(() => { count++;},count = 0);
        console.log("Total contact found from " + name + " are " + count);
    }
    else{
        console.log("Invalid city or state");
    }
}





// UC11 (Sort contacts by name)

function sortContact(){
    console.log(addressBook.sort((contact1, contact2) => {
        if(contact1.firstName < contact2.firstName){
            return -1;
        }
        else if(contact1.firstName == contact2.firstName){
            return 0;
        }
        else{
            return 1;
        }
    }));
}





// UC12 (Sort contacts by city, state and zip)
 
function sortContact(choice){
    console.log(addressBook.sort((contact1, contact2) => {
        switch(choice){
            case "city":
                first = contact1.city;
                second = contact2.city;
                break;
            case  "state":
                first = contact1.state;
                second = contact2.state;
                break;
            case "zipCode":
                first = contact1.zipCode;
                second = contact2.zipCode;
                break;
            default:
                console.log("Invalid city, state and zip code")
        }
   
        if(first < second){
            return -1;
        }
        else if(first == second){
            return 0;
        }
        else{
            return 1;
        }
    }));
}