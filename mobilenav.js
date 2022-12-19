function navonclick() {
    var x = document.getElementById("me");
    if (x.style.display === "none") 
    {
      x.style.display = "block";
    } 
    else 
    {
      x.style.display = "none";
    }
    console.log(x.style);
  }