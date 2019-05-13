document.getElementById("myButton").addEventListener("click", function() {
  let times = document.getElementById("number").value;

  for (i = 0; i < times; i++) {
    let wrapper = document.getElementById("wrapper");
    let box = document.createElement("div");
    box.id = "box";
    

    // let text = document.createTextNode("JS");
    let randomNum = Math.floor(Math.random() * 600) +1
    let search = document.getElementById("search").value;

    let img = document.createElement("img");
    img.src = `https://source.unsplash.com/random/500x500/?${search}/?sig=${randomNum}`
    img.style.height = '100%';
    img.style.width = '100%';

    box.appendChild(img);
    wrapper.appendChild(box);
  }
});

document.getElementById("resetButton").addEventListener("click",function(){
  location.reload(true)
})