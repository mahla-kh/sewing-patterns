export function downloadImage() {
  const svg = document.getElementById("mySvg");
  const svgData = new XMLSerializer().serializeToString(svg);
  const svgBlob = new Blob([svgData], {
    type: "image/svg+xml;charset=utf-8",
  });
  const url = URL.createObjectURL(svgBlob);

  const image = new Image();
  image.onload = function () {
    const canvas = document.getElementById("canvas");
    const scale = 3;

    canvas.width = svg.clientWidth * scale;
    canvas.height = svg.clientHeight * scale;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    URL.revokeObjectURL(url);

    // دانلود به عنوان PNG
    const imgURL = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = imgURL;
    a.download = "output.png";
    a.click();
  };
  image.src = url;
}
