import { useProperties } from "../context/PropertiesProvider";
import { downloadImage } from "../services/downloadImage";

function PosteriorTork() {
  const {
    gardan,
    bolandiKafHalghe,
    kam,
    dorkam,
    ba,
    fasin,
    Bsin,
    sin,
    dorba,
    arzShan,
    kshan,
    kar,
    Jkar,
    scale,
    poshtTire,
  } = useProperties();

  const durKar =
    (2 * scale * (bolandiKafHalghe - 10 * scale)) / (kam - 3 * scale);
  const durSin =
    (2 * scale * (bolandiKafHalghe - 3 * scale)) / (kam - 3 * scale);

  const gKafHalgh = sin / 16 + 1 * scale;
  return (
    <>
      <svg
        width="250"
        height="500"
        style={{ background: "#f9f9f9", border: "1px solid #ccc" }}
        id="mySvg102"
      >
        {/* گردن */} /////////
        <path
          d={`
             M70,${70 + 5 * scale}
             Q${70 + (((gardan / 5 - 0.5) * 2) / 3) * scale},${70 + 5 * scale}
             ${70 + (gardan / 5 - 0.5) * scale},70
           `}
          fill="none"
          stroke="cyan"
          strokeWidth="1"
        />
        {/* دیوار چپ */} //////////
        {/* شانه */}
        <line
          x1="70"
          y1="70"
          x2="70"
          y2={5 * scale + 70}
          stroke="gray"
          strokeWidth="1"
        />
        {/* سینه */}
        <line
          x1="70"
          y1={70 + 5 * scale}
          x2="70"
          y2={70 + (5 + bolandiKafHalghe) * scale}
          stroke="gray"
          strokeWidth="1"
        />
        {/* سینه تا کمر */}
        <line
          x1="70"
          y1={70 + (5 + bolandiKafHalghe) * scale}
          x2="70"
          y2={70 + (5 + kam) * scale}
          stroke="gray"
          strokeWidth="1"
        />
        {/* کمر تا باسن */}
        <line
          x1="70"
          y1={70 + (5 + kam) * scale}
          x2="70"
          y2={70 + (5 + kam + ba) * scale}
          stroke="gray"
          strokeWidth="1"
        />
        {/*  سر شانه */} /////////////////
        <line
          x1={70 + (gardan / 5 - 0.5) * scale}
          y1={70}
          x2={70 + (gardan / 5 - 0.5 + arzShan) * scale}
          y2={5 * scale + 70}
          stroke="blue"
          strokeWidth="1"
        />
        {/* حلق آستین */}
        <line
          x1={70 + (gardan / 5 - 0.5 + arzShan) * scale}
          y1={5 * scale + 70}
          x2={70 + (kar + 0.5 + durKar) * scale}
          y2={70 + (5 + bolandiKafHalghe - 7) * scale}
          stroke="blue"
          strokeWidth="1"
        />
        <path
          d={`
     M${70 + (kar + 0.5 + durKar) * scale},${
            70 + (5 + bolandiKafHalghe - 7) * scale
          }
     Q${70 + (kar + 0.5 + durKar) * scale},${
            70 + (bolandiKafHalghe + 5) * scale
          }
     ${70 + (poshtTire + durSin + gKafHalgh) * scale},${
            70 + (5 + bolandiKafHalghe) * scale
          }
   `}
          stroke="green"
          fill="none"
          strokeWidth="1"
        />
        {/* شانه خط */}
        <line
          x1="70"
          y1={5 * scale + 70}
          x2={70 + (gardan / 5 - 0.5 + arzShan) * scale}
          y2={5 * scale + 70}
          stroke="orange"
          strokeWidth="1"
        />
        {/* کارور خط */}
        <line
          x1={70 + durKar * scale}
          y1={70 + (5 + bolandiKafHalghe - 7) * scale}
          x2={70 + (kar + 0.5 + durKar) * scale}
          y2={70 + (5 + bolandiKafHalghe - 7) * scale}
          stroke="red"
          strokeWidth="1"
        />
        {/* سینه خط */}
        <line
          x1={70 + durSin}
          y1={70 + (5 + bolandiKafHalghe) * scale}
          x2={70 + (poshtTire + durSin) * scale}
          y2={70 + (5 + bolandiKafHalghe) * scale}
          stroke="orange"
          strokeWidth="1"
        />
        {/* کف حلقه خط */}
        <line
          x1={70 + (poshtTire + durSin) * scale}
          y1={70 + (5 + bolandiKafHalghe) * scale}
          x2={70 + (poshtTire + durSin + gKafHalgh) * scale}
          y2={70 + (5 + bolandiKafHalghe) * scale}
          stroke="blue"
          strokeWidth="1"
        />
        {/* خط کمر */}
        <line
          x1={70 + 2 * scale}
          y1={70 + (5 + kam) * scale}
          x2={70 + (dorkam / 4 + 4.5) * scale}
          y2={70 + (5 + kam) * scale}
          stroke="red"
          strokeWidth="1"
        />
        {/* خط باسن */}
        <line
          x1={70 + 2 * scale}
          y1={70 + (5 + kam + ba) * scale}
          x2={70 + (dorba / 4 + 2 - 0.5) * scale}
          y2={70 + (5 + kam + ba) * scale}
          stroke="pink"
          strokeWidth="1"
        />
        {/* دیوار راست */}
        <line
          x1={70 + (poshtTire + durSin + gKafHalgh) * scale}
          y1={70 + (5 + bolandiKafHalghe) * scale}
          x2={70 + (dorkam / 4 + 4.5) * scale}
          y2={70 + (5 + kam) * scale}
          stroke="green"
          strokeWidth="1"
        />
        <line
          x1={70 + (dorkam / 4 + 4.5) * scale}
          y1={70 + (5 + kam) * scale}
          x2={70 + (dorba / 4 + 2 - 0.5) * scale}
          y2={70 + (5 + kam + ba) * scale}
          stroke="green"
          strokeWidth="1"
        />
        {/*ساسون */} //////////
        {/*عمود */}
        <line
          x1={70 + (gardan / 5 - 0.5 + arzShan / 2) * scale}
          y1={5 * scale + 70}
          //   y1={70 + (5 + bolandiKafHalghe) * scale}
          x2={70 + (gardan / 5 - 0.5 + arzShan / 2) * scale}
          y2={70 + (5 + kam + ba) * scale}
          //   y2={70 + (2 + kam + ba) * scale}
          stroke="gray"
          strokeWidth="1"
        />
        {/* راست */}
        <line
          x1={70 + (gardan / 5 - 0.5 + arzShan / 2) * scale}
          y1={70 + (5 + bolandiKafHalghe) * scale}
          x2={70 + (gardan / 5 - 0.5 + arzShan / 2 + 1.5) * scale}
          y2={70 + (5 + kam) * scale}
          stroke="blue"
          strokeWidth="1"
        />
        <line
          x1={70 + (gardan / 5 - 0.5 + arzShan / 2 + 1.5) * scale}
          y1={70 + (5 + kam) * scale}
          x2={70 + (gardan / 5 - 0.5 + arzShan / 2) * scale}
          y2={70 + (2 + kam + ba) * scale}
          stroke="blue"
          strokeWidth="1"
        />
        {/* چپ */}
        <line
          x1={70 + (gardan / 5 - 0.5 + arzShan / 2) * scale}
          y1={70 + (5 + bolandiKafHalghe) * scale}
          x2={70 + (gardan / 5 - 0.5 + arzShan / 2 - 1.5) * scale}
          y2={70 + (5 + kam) * scale}
          stroke="blue"
          strokeWidth="1"
        />
        <line
          x1={70 + (gardan / 5 - 0.5 + arzShan / 2 - 1.5) * scale}
          y1={70 + (5 + kam) * scale}
          x2={70 + (gardan / 5 - 0.5 + arzShan / 2) * scale}
          y2={70 + (2 + kam + ba) * scale}
          stroke="blue"
          strokeWidth="1"
        />
        {/* دور ریز */}
        <line
          x1="70"
          y1={70 + 8 * scale}
          x2={70 + 2 * scale}
          y2={70 + (5 + kam) * scale}
          stroke="black"
          strokeWidth="1"
        />
        <line
          x1={70 + 2 * scale}
          y1={70 + (5 + kam) * scale}
          x2={70 + 2 * scale}
          y2={70 + (5 + kam + ba) * scale}
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </>
  );
}

export default PosteriorTork;
