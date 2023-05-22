import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const textarea = document.getElementById("text");
const button = document.getElementById("button");
const posts = document.getElementById("comments");

const appSettings = {
  databaseURL:
    "https://the-champion-483f8-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const championsDatabase = ref(database, "Champions");

button.addEventListener("click", () => {
  let inputVal = textarea.value;
  push(championsDatabase, inputVal);
  clearInputField();
});

onValue(championsDatabase, (snapshot) => {
  clearComments();
  let championArray = Object.entries(snapshot.val());
  for (let i = 0; i < championArray.length; i++) {
    let currentValue = championArray[i];
    render(currentValue);
  }
});

function render(item) {
  let id = item[0];
  let value = item[1];
  const li = document.createElement("li");
  li.classList.add("list-item");
  li.innerText = value;
  posts.append(li);
  li.addEventListener("click", () => {
    let databaseItem = ref(database, `Champions/${id}`);
    remove(databaseItem);
  });
}

function clearComments() {
  posts.innerHTML = "";
}

function clearInputField() {
  textarea.value = "";
}
