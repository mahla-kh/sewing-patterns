import { useProperties } from "../context/PropertiesProvider";

function AnteriorTork() {
  const {
    gardan,
    bolandiKafHalghe,
    kam,
    dorkam,
    ba,
    fasin,
    Hsin,
    sin,
    dorba,
    shan,
    kshan,
    kar,
    Jkar,
    scale,
    poshtTire,
  } = useProperties();

  //   طول سرشانه سمت گردن
  const sarGT = ((sin / 10 + 1.5 - gardan / 5) ** 2 + 1) ** (1 / 2);
  const arzShan = Math.sqrt((shan - sarGT) ** 2 - (3 * scale) ** 2);
  console.log(sarGT, arzShan);

  const pancX =
    (((Hsin + sin / 20) * (sin / 20) ** 2 * (Hsin - sin / 20)) ** (1 / 2) * 2) /
    Hsin;

  const pancY = ((sin / 10) ** 2 - pancX ** 2) ** 1 / 2;
  const gKafHalgh = sin / 16 - 1 * scale;
  return (
    <>
      <svg
        width="250"
        height="500"
        style={{ background: "#f9f9f9", border: "1px solid #ccc" }}
        id="mySvg103"
      >
        {/* گردن */} /////////
        <path
          d={`
             M70,${70 + (gardan / 5 + 0.5) * scale}
             Q${70 + (gardan / 5 - 0.5) * scale},${
            70 + (gardan / 5 + 0.5) * scale
          }
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
        {/* شانه خط */}
        <line
          x1="70"
          y1={70}
          x2={70 + (gardan / 5 - 0.5 + arzShan) * scale}
          y2={70}
          stroke="orange"
          strokeWidth="1"
        />
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
          x1={70}
          y1={70 + (5 + bolandiKafHalghe - 7) * scale}
          x2={70 + (sin / 4 - 4) * scale}
          //   x2={70 + Jkar * scale}
          y2={70 + (5 + bolandiKafHalghe - 7) * scale}
          stroke="gray"
          strokeWidth="1"
        />
        {/* سینه خط */}
        <line
          x1={70}
          y1={70 + (5 + bolandiKafHalghe) * scale}
          x2={70 + (sin / 4 + 2) * scale}
          y2={70 + (5 + bolandiKafHalghe) * scale}
          stroke="orange"
          strokeWidth="1"
        />
        {/* کف حلقه خط */}
        <line
          x1={70 + (sin / 4 - 4) * scale}
          y1={70 + (5 + bolandiKafHalghe) * scale}
          x2={70 + (sin / 4 - 4 + gKafHalgh) * scale}
          y2={70 + (5 + bolandiKafHalghe) * scale}
          stroke="blue"
          strokeWidth="1"
        />
        {/* خط کمر */}
        <line
          x1={70}
          y1={70 + (5 + kam) * scale}
          x2={70 + (dorkam / 4 + 1.5) * scale}
          y2={70 + (5 + kam) * scale}
          stroke="red"
          strokeWidth="1"
        />
        {/* خط باسن */}
        <line
          x1={70}
          y1={70 + (5 + kam + ba) * scale}
          x2={70 + (dorba / 4 + 2 + 1.5) * scale}
          y2={70 + (5 + kam + ba) * scale}
          stroke="pink"
          strokeWidth="1"
        />
        {/* حلق آستین */}
        <line
          x1={70 + (sin / 10 + 1 + arzShan) * scale + pancX}
          y1={70 + pancY * scale}
          x2={70 + (sin / 4 - 4) * scale}
          y2={70 + (5 + bolandiKafHalghe - 7) * scale}
          stroke="blue"
          strokeWidth="1"
        />
        <path
          d={`
     M${70 + (sin / 4 - 4) * scale},${70 + (5 + bolandiKafHalghe - 7) * scale}
     Q${70 + (sin / 4 - 4 + (gKafHalgh * 1) / 4) * scale},${
            70 + (bolandiKafHalghe + 5) * scale
          }
     ${70 + (sin / 4 - 4 + gKafHalgh) * scale},${
            70 + (5 + bolandiKafHalghe) * scale
          }
   `}
          stroke="green"
          fill="none"
          strokeWidth="1"
        />
        {/*ساسون */} //////////
        {/*عمود */}
        <line
          x1={70 + (sin / 10 + 1) * scale}
          y1={70}
          //   y1={70 + (5 + bolandiKafHalghe) * scale}
          x2={70 + (sin / 10 + 1) * scale}
          y2={70 + (5 + kam + ba) * scale}
          //   y2={70 + (2 + kam + ba) * scale}
          stroke="gray"
          strokeWidth="1"
        />
        {/* راست */}
        <line
          x1={70 + (sin / 10 + 1) * scale}
          y1={70 + Hsin * scale}
          x2={70 + (sin / 10 + 1 + 1) * scale}
          y2={70 + (5 + kam) * scale}
          stroke="blue"
          strokeWidth="1"
        />
        <line
          x1={70 + (sin / 10 + 1 + 1) * scale}
          y1={70 + (5 + kam) * scale}
          x2={70 + (sin / 10 + 1) * scale}
          y2={70 + (5 + kam + (ba * 3) / 5) * scale}
          stroke="blue"
          strokeWidth="1"
        />
        {/* چپ */}
        <line
          x1={70 + (sin / 10 + 1) * scale}
          y1={70 + Hsin * scale}
          x2={70 + (sin / 10 + 1 - 1) * scale}
          y2={70 + (5 + kam) * scale}
          stroke="blue"
          strokeWidth="1"
        />
        <line
          x1={70 + (sin / 10 + 1 - 1) * scale}
          y1={70 + (5 + kam) * scale}
          x2={70 + (sin / 10 + 1) * scale}
          y2={70 + (5 + kam + (ba * 3) / 5) * scale}
          stroke="blue"
          strokeWidth="1"
        />
        {/* دیوار راست */}
        <line
          x1={70 + (sin / 4 - 4 + gKafHalgh) * scale}
          y1={70 + (5 + bolandiKafHalghe) * scale}
          x2={70 + (dorkam / 4 + 1.5) * scale}
          y2={70 + (5 + kam) * scale}
          stroke="gray"
          strokeWidth="1"
        />
        <line
          x1={70 + (dorkam / 4 + 1.5) * scale}
          y1={70 + (5 + kam) * scale}
          x2={70 + (dorba / 4 + 2 + 1.5) * scale}
          y2={70 + (5 + kam + ba) * scale}
          stroke="gray"
          strokeWidth="1"
        />
        {/* پنس گردنی */}
        <line
          x1={70 + (gardan / 5 - 0.5) * scale}
          y1="70"
          //   y1={70 + (5 + bolandiKafHalghe) * scale}
          x2={70 + (sin / 10 + 1) * scale}
          y2={70 + 1 * scale}
          //   y2={70 + (2 + kam + ba) * scale}
          stroke="gray"
          strokeWidth="1"
        />
        {/* شانه بعد پنس گردنی */}
        <line
          x1={70 + (sin / 10 + 1) * scale + pancX}
          y1={70 + 1 * scale}
          //   y1={70 + (5 + bolandiKafHalghe) * scale}
          x2={70 + (sin / 10 + 1 + arzShan) * scale + pancX}
          y2={70 + pancY * scale}
          //   y2={70 + (2 + kam + ba) * scale}
          stroke="red"
          strokeWidth="1"
        />
        {/* پنس */} /////////////////
        {/* گردنی */}
        <line
          x1={70 + (sin / 10 + 1) * scale}
          y1={70 + 1 * scale}
          x2={70 + (sin / 10 + 1) * scale}
          y2={70 + Hsin * scale}
          stroke="green"
          strokeWidth="1"
        />
        {/* سرشانه ای */}
        <line
          x1={70 + (sin / 10 + 1) * scale + pancX}
          y1={70 + 1 * scale}
          x2={70 + (sin / 10 + 1) * scale}
          y2={70 + Hsin * scale}
          stroke="green"
          strokeWidth="1"
        />
      </svg>
    </>
  );
}

export default AnteriorTork;
