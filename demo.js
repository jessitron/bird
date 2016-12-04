window.onload = () => {
  console.log('hello');

  const imageContainer = document.querySelector('.container');
  const img = imageContainer.querySelector('.imageContainer');
  let lastScale = 1;
  let translateX = 0;
  let translateY = 0;

  const containerStyle = window.getComputedStyle(imageContainer);
  const halfHeight = parseInt(containerStyle.height, 10) / 2;
  const halfWidth = parseInt(containerStyle.width, 10) / 2;

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
