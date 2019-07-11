let URLBase = "http://hongphat.tinhlaisuat.info";
// let URLBase = "http://local.com";

let DBcustomers = localStorage.getItem('db_customers');
let DBusers = localStorage.getItem('db_users');

if(DBcustomers === null && DBusers === null) {
    updateDatabase();
}

function updateDatabase() {

}



