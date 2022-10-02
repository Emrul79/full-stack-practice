let btn = document.getElementById("btn");
let country = document.getElementById("country");
let text = document.getElementById("description");
let featured = document.getElementById("featured");

async function myfunction() {
  const hitdata = await fetch("http://localhost:3001/about");
  const deta = await hitdata.json();

  const { name, description } = deta;
  country.innerHTML = name;
  text.innerHTML = description;
}

let newpage = document.getElementById("newpage");
btn.addEventListener("click", myfunction);
async function myfunction2() {
  const hitdata = await fetch("http://localhost:3001/featured");
  const deta = await hitdata;
  newpage.innerHTML = deta.url;
  console.log(deta);
}
featured.addEventListener("click", myfunction2);
