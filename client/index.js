let btn = document.getElementById("btn");
let country = document.getElementById("country");
let text = document.getElementById("description");

async function myfunction() {
  const hitdata = await fetch("http://localhost:3001/about");
  const deta = await hitdata.json();

  const { name, description } = deta;
  country.innerHTML = name;
  text.innerHTML = description;
}

btn.addEventListener("click", myfunction);
