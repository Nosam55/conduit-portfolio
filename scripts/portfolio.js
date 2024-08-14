const portfolioPieces = [
  {
    "name": "Foo Bar",
    "year": "2024",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet venenatis magna quis rutrum. Cras mollis orci nec rhoncus volutpat. Nunc ullamcorper tristique tellus et ullamcorper. Nam maximus augue eu leo euismod, ut scelerisque turpis scelerisque. Phasellus iaculis orci sed porttitor aliquet. Sed eu libero sit amet sem facilisis convallis. Morbi tempus blandit augue, id varius tortor. In luctus cursus est quis aliquam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lorem magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et venenatis urna. Donec pretium erat id ligula sollicitudin aliquet.",
    "src": "https://www.publicdomainpictures.net/pictures/140000/velka/angry-emotiguy.jpg"
  },
  {
    "name": "Another One",
    "year": "2000",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet venenatis magna quis rutrum. Cras mollis orci nec rhoncus volutpat. Nunc ullamcorper tristique tellus et ullamcorper. Nam maximus augue eu leo euismod, ut scelerisque turpis scelerisque. Phasellus iaculis orci sed porttitor aliquet. Sed eu libero sit amet sem facilisis convallis. Morbi tempus blandit augue, id varius tortor. In luctus cursus est quis aliquam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lorem magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et venenatis urna. Donec pretium erat id ligula sollicitudin aliquet.",
    "src": "https://get.pxhere.com/photo/man-person-photography-sadness-portrait-color-darkness-tear-close-up-sad-face-eye-head-look-tears-organ-crying-facial-hair-603008.jpg"
  },
  {
    "name": "Hey You",
    "year": "1979",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet venenatis magna quis rutrum. Cras mollis orci nec rhoncus volutpat. Nunc ullamcorper tristique tellus et ullamcorper. Nam maximus augue eu leo euismod, ut scelerisque turpis scelerisque. Phasellus iaculis orci sed porttitor aliquet. Sed eu libero sit amet sem facilisis convallis. Morbi tempus blandit augue, id varius tortor. In luctus cursus est quis aliquam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non lorem magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et venenatis urna. Donec pretium erat id ligula sollicitudin aliquet.",
    "src": "https://www.publicdomainpictures.net/pictures/140000/velka/banner-header-1449745167Dld.jpg"
  }
];

function loadPortfolio(event){
  const container = document.getElementById('portfolio');
  const template = document.getElementById('portfolio-piece').content;
  const dialog = container.querySelector("dialog");
  for(let i = 0; i < portfolioPieces.length; ++i){
    const piece = portfolioPieces[i];
    const node = template.cloneNode(true);
    const img = node.querySelector("img");
    const title = node.querySelector("h2");
    const desc = node.querySelector("p");

    //console.log(node, img, title, desc);

    img.src = piece.src;
    img.alt = `${piece.name} (${piece.year}) - Conduit Boy`;

    img.addEventListener("click", () => {
      dialog.innerHTML = img.outerHTML;
      dialog.showModal();
    });

    dialog.addEventListener("click", () => {
      dialog.close();
    });

    title.innerHTML = `${piece.name} - ${piece.year}`;
    desc.innerHTML = piece.desc;
    container.appendChild(node);
  }
}

window.addEventListener("load", (evt) => {
  loadPortfolio(evt)
})