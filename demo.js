window.onload = () => {
  console.log('hello');

  const imageContainer = document.querySelector('.imageContainer');
  const img = imageContainer.querySelector('img');
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
    console.log(`I would like to translate it by ${translateY} but the image is only ${maxTranslateY} biggish`)
    if (translateY > maxTranslateY)
    {
      translateY = maxTranslateY
    }

    // const ( imageX, imageY ) = (
    //   ev.offsetX * lastScale,
    //   ev.offsetY * lastScale
    // );


    img.style.transform = `scale(${lastScale}) translateX(${translateX}px) translateY(${translateY}px)`;
    // ev.target.style.transformOrigin = `${ev.offsetX}px ${ev.offsetY}px`;
  });
}
