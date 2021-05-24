  let lista = document.querySelector("ul");


  lista.addEventListener("mouseover",function(e) {
    let n = e.target;
    if (n.nodeName === "IMG") {
      n.className = "borde";
    }
  });

  lista.addEventListener("mouseout",function(e) {
    let n = e.target;
    if (n.nodeName === "IMG") {
      n.className = "sinBorde";
    }
  }, false);
