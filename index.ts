// Import stylesheets
import "./style.css";

interface user {
  id: number;
  name: string;
  city: string;
  subscription: boolean;
}
type userForm = Omit<user, 'id'>;

function addUser(u: userForm ) {
  const newUser = {...u, id: 123}
  return addUserSucces(newUser)
}

function addUserSucces(u: user){
  console.log(u.id)
  return u.name
}

const formData = {
  name: "rocco", city: "milano", subscription: true
};

const guest: user = {
  id: 1,
  name: "rocco",
  city: "milano",
  subscription: true
};

const stampName = addUser(formData);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter {stamp} </h1>`;
appDiv.appendChild = {stampName}
