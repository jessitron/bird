window.onload = () => {
  console.log('hello');

  const imageContainer = document.querySelector('.container');
  const img = imageContainer.querySelector('.imageContainer');
  const speakLabel = imageContainer.querySelector('label#speak')
  let lastScale = 1;
  let translateX = 0;
  let translateY = 0;

   containerStyle = window.getComputedStyle(imageContainer);
   halfHeight = parseInt(containerStyle.height, 10) / 2;
   halfWidth = parseInt(containerStyle.width, 10) / 2;

   const speakLabelYPct = 120 / halfHeight;
   const speakLabelXPct = 660 / halfWidth;
  speakLabel.style.top = "120px";
  speakLabel.style.left = "660px";


  window.addEventListener('resize', ev => {
      console.log("resize detected!!")
         containerStyle = window.getComputedStyle(imageContainer);
   halfHeight = parseInt(containerStyle.height, 10) / 2;
   halfWidth = parseInt(containerStyle.width, 10) / 2;

     speakLabel.style.top = `${speakLabelYPct * halfHeight}px`;
  speakLabel.style.left = `${speakLabelXPct * halfWidth}px`;
  });

  imageContainer.addEventListener('mousedown', ev => {
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


    img.style.transform = `scale(${lastScale}) translateX(${translateX}px) translateY(${translateY}px)`;

    // ev.target.style.transformOrigin = `${ev.offsetX}px ${ev.offsetY}px`;
  });
}
