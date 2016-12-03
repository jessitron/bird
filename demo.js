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
    translateY = (ev.offsetY - translateY) + halfHeight;
    translateX = (ev.offsetX - translateX) + halfWidth;

    // const ( imageX, imageY ) = (
    //   ev.offsetX * lastScale,
    //   ev.offsetY * lastScale
    // );

    // lastScale += 0.5;
    img.style.transform = `scale(${lastScale}) translateX(${translateX}px) translateY(${translateY}px)`;
    // ev.target.style.transformOrigin = `${ev.offsetX}px ${ev.offsetY}px`;
  });
}
