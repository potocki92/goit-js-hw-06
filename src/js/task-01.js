const categories = document.getElementById("categories");

const items = categories.getElementsByClassName("item");

function show() {
  console.log("Number of categories: ", items.length);

  for (let item of items) {
    console.log("Category:", item.getElementsByTagName("h2")[0].innerHTML);
    console.log("Elements:",item.getElementsByTagName("li").length)
  }
}

show();