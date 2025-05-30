import { useProperties } from "../context/PropertiesProvider";
import { downloadImage } from "../services/downloadImage";

function SleeveTork() {
  const { wist, bazou, bSleeve, scale } = useProperties();
  const Jfa = (bazou / 10) * 1.5;
  const Pfa = (bazou + 4) / 5;
  const Pfa2 = (bazou + 4) % 10;
  const BigDiam =
    (((bSleeve * 4) / 5) ** 2 + ((bazou + 4 - wist) / 2) ** 2) ** (1 / 2);
  const GhaedeKoochak = ((bazou + 4 - wist) / 2) * (wist / (2 * BigDiam));
  const wistX = GhaedeKoochak ** 2 / (wist / 2);
  const wistY = ((wist / 2 - wistX) * wistX) ** (1 / 2);
  console.log(bazou, Jfa, Pfa2);
  return (
    <>
      <svg
        width="350"
        height="500"
        style={{ background: "#f9f9f9", border: "1px solid #ccc" }}
        id="mySvg104"
      >
        {/* چپ */}
        <line
          x1="70"
          y1="70"
          x2="70"
          y2={70 + bSleeve * scale}
          stroke="gray"
          strokeWidth="1"
        />
        {/* راست */}
        <line
          x1={70 + (bazou + 4) * scale}
          y1="70"
          x2={70 + (bazou + 4) * scale}
          y2={70 + bSleeve * scale}
          stroke="gray"
          strokeWidth="1"
        />
        {/* وسط */}
        <line
          x1={70 + ((bazou + 4) / 2) * scale}
          y1="70"
          x2={70 + ((bazou + 4) / 2) * scale}
          y2={70 + bSleeve * scale}
          stroke="gray"
          strokeWidth="1"
        />
        {/* مچ */}
        <line
          x1="70"
          y1={70 + bSleeve * scale}
          x2={70 + (bazou + 4) * scale}
          y2={70 + bSleeve * scale}
          stroke="gray"
          strokeWidth="1"
        />
        {/* حلق آستین */}
        <line
          x1="70"
          y1={70 + (bSleeve / 5) * scale}
          x2={70 + (bazou + 4) * scale}
          y2={70 + (bSleeve / 5) * scale}
          stroke="red"
          strokeWidth="1"
        />
        {/* انحنا جلو */}
        <path
          d={`
             M${70 + ((bazou + 4) / 2) * scale},${70 - 1 * scale}
             Q${70 + ((bazou + 4) / 2 + Jfa) * scale},${70}
             ${70 + (((bazou + 4) * 3) / 4) * scale},${
            70 + ((bSleeve / 5 + 1) / 2) * scale
          }`}
          fill="none"
          stroke="cyan"
          strokeWidth="1"
        />
        <path
          d={`
             M${70 + (((bazou + 4) * 3) / 4) * scale},${
            70 + ((bSleeve / 5 + 1) / 2) * scale
          }
             Q${70 + (((bazou + 4) * 6.7) / 8) * scale},${
            70 + (bSleeve / 5) * scale
          }
             ${70 + (bazou + 4) * scale},${70 + (bSleeve / 5) * scale}
           `}
          fill="none"
          stroke="cyan"
          strokeWidth="1"
        />
        {/* انحنا پشت */}
        <path
          d={`
             M${70 + ((bazou + 4) / 2) * scale},${70 - 1 * scale}
             Q${70 + ((bazou + 4) / 2 - Pfa) * scale},${70}
             ${70 + ((bazou + 4) / 4) * scale - Pfa / 2 + Pfa2 / 2},${
            70 + ((bSleeve / 5 + 1) / 2) * scale
          }
           `}
          fill="none"
          stroke="green"
          strokeWidth="1"
        />
        <path
          d={`
             M${70 + ((bazou + 4) / 4) * scale - Pfa / 2 + Pfa2 / 2},${
            70 + ((bSleeve / 5 + 1) / 2) * scale
          }
             Q${70 + ((bazou + 4) / 6 - Pfa / 4 + Pfa2 / 4) * scale},${
            70 + (bSleeve / 5) * scale
          }
             ${70},${70 + (bSleeve / 5) * scale}
           `}
          fill="none"
          stroke="green"
          strokeWidth="1"
        />
        {/* آستین چپ */}
        <line
          x1="70"
          y1={70 + (bSleeve / 5) * scale}
          x2={70 + ((bazou + 4) / 2 - wist / 2) * scale}
          y2={70 + bSleeve * scale}
          stroke="black"
          strokeWidth="1"
        />
        <line
          x1={70 + ((bazou + 4) / 2 - wist / 2) * scale}
          y1={70 + bSleeve * scale}
          x2={70 + ((bazou + 4) / 2 - wist / 2 + wistX) * scale}
          y2={70 + (bSleeve + wistY) * scale}
          stroke="green"
          strokeWidth="1"
        />
        <line
          x1={70 + ((bazou + 4) / 2 - wist / 4) * scale}
          y1={70 + bSleeve * scale}
          x2={70 + ((bazou + 4) / 2 - wist / 2 + wistX) * scale}
          y2={70 + (bSleeve + wistY) * scale}
          stroke="green"
          strokeWidth="1"
        />
        {/* آستین راست  */}
        <line
          x1={70 + (bazou + 4) * scale}
          y1={70 + (bSleeve / 5) * scale}
          x2={70 + ((bazou + 4) / 2 + wist / 2) * scale}
          y2={70 + bSleeve * scale}
          stroke="black"
          strokeWidth="1"
        />
        <line
          x1={70 + ((bazou + 4) / 2 + wist / 2) * scale}
          y1={70 + bSleeve * scale}
          x2={70 + ((bazou + 4) / 2 + wist / 2 - wistX) * scale}
          y2={70 + (bSleeve + wistY) * scale}
          stroke="green"
          strokeWidth="1"
        />
        <line
          x1={70 + ((bazou + 4) / 2 + wist / 4) * scale}
          y1={70 + bSleeve * scale}
          x2={70 + ((bazou + 4) / 2 + wist / 2 - wistX) * scale}
          y2={70 + (bSleeve + wistY) * scale}
          stroke="green"
          strokeWidth="1"
        />
      </svg>
      <canvas id="canvas104" style={{ display: "none" }}></canvas>
      <button onClick={() => downloadImage(104)}>دانلود تصویر</button>
    </>
  );
}

export default SleeveTork;
