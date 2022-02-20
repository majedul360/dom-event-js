let search = document.getElementById("search");

search?.addEventListener("change", () => {
  window.location.href = "newPage.html?text=" + search.value;
});

var urlParams;
(window.onpopstate = function () {
  var match,
    pl = /\+/g, // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) {
      return decodeURIComponent(s.replace(pl, " "));
    },
    query = window.location.search.substring(1);

  urlParams = {};
  while ((match = search.exec(query)))
    urlParams[decode(match[1])] = decode(match[2]);
})();

const heading = document.querySelector("#title");
heading.innerText = urlParams.text;

const paragraph = document.querySelector("p");
console.log(paragraph);
paragraph.addEventListener("mouseenter", () => {
  document.body.style.backgroundColor = "red";
});

/* window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "white";
  }
}); */

/* window.addEventListener("keydown", (event) => {
  console.log(event.key);
}); */
