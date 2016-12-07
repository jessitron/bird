function describeSizing(window) {

  return function(element) {
    var description = "Element "
    if (element.className) {
      description += "." + element.className;
    }
    if (element.id) {
      description += "#" + element.id;
    }
    description += ":"

    var style = window.getComputedStyle(element);

    description += " height=" + style.height;
    description += " width=" + style.width;

    return description;
  }
}


window.onload = () => {
  console.log('hello');
  describe = describeSizing(window);

  const container = document.querySelector('.container');
  console.log(describe(container));
  const imageContainer = container.querySelector('.imageContainer')
  console.log(describe(imageContainer));
  const img = container.querySelector('img');
  console.log(describe(img));
  const speakLabel = container.querySelector('label#speak')
  let lastScale = 1;
  let translateX = 0;
  let translateY = 0;

   imageStyle = window.getComputedStyle(img);
   halfHeight = parseInt(imageStyle.height, 10) / 2;
   halfWidth = parseInt(imageStyle.width, 10) / 2;

  const speakLabelYPct = 120 / halfHeight;
  const speakLabelXPct = 660 / halfWidth;
  speakLabel.style.top = "20%";
  speakLabel.style.left = "50.3%";

  container.addEventListener('mousedown', ev => {
    console.log(ev);
    translateY = halfHeight - ev.offsetY;
    translateX = halfWidth - ev.offsetX;

    lastScale *= 2;

    maxTranslateY = (lastScale - 1) * halfHeight / lastScale
    if (translateY > maxTranslateY)
    {
      translateY = maxTranslateY
    }
    if (translateY < (0 - maxTranslateY))
    {
      translateY = 0 - maxTranslateY
    }

     maxTranslateX = (lastScale - 1) * halfWidth / lastScale
    if (translateX > maxTranslateX)
    {
      translateX = maxTranslateX
    }
    if (translateX < (0 - maxTranslateX))
    {
      translateX = 0 - maxTranslateX
    }

    // const ( imageX, imageY ) = (
    //   ev.offsetX * lastScale,
    //   ev.offsetY * lastScale
    // );


    imageContainer.style.transform = `scale(${lastScale}) translateX(${translateX}px) translateY(${translateY}px)`;

    // ev.target.style.transformOrigin = `${ev.offsetX}px ${ev.offsetY}px`;
  });
}
