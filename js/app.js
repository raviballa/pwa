const container = document.querySelector(".container");
const ballas = [
  { name: "Hema <3 Ravi 1", image: "images/hr1.jpg" },
  { name: "Hema <3 Ravi 2", image: "images/hr2.jpg" },
  { name: "Hema <3 Ravi 3", image: "images/hr3.jpg" },
  { name: "Shreya <3 1", image: "images/shre1.jpg" },
  { name: " Shreya <3 2", image: "images/shre2.jpg" },
  { name: " Shreya <3 3", image: "images/shre3.jpg" },
  { name: "Shruti <3 1", image: "images/shru1.jpg" },
  { name: "Shruti <3 2", image: "images/shru2.jpg" },
  { name: "Shruti <3 3", image: "images/shru3.jpg" },
];

const showBallas = () => {
  let output = "";
  ballas.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">LOVE</a>
              </div>
              `)
  );
  container.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showBallas);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
