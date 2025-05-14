import { useProperties } from "../context/PropertiesProvider";

function BalataneAnterior() {
  const {
    gardan,
    bolandiKafHalghe,
    kam,
    ba,
    fasin,
    Bsin,
    sin,
    dorba,
    arzShan,
    kar,
    Jkar,
    scale,
  } = useProperties();
  return (
    <>
      {/* گردن */} /////////
      <path
        d={`
             M210,${70 + (gardan / 5 + 0.5) * scale}
             Q${210 + (gardan / 5 - 0.5) * scale},${
          70 + (gardan / 5 + 0.5) * scale
        }
             ${210 + (gardan / 5 - 0.5) * scale},70
           `}
        fill="none"
        stroke="cyan"
        strokeWidth="1"
      />
      {/* دیوار چپ */} //////////
      {/* شانه */}
      <line
        x1="210"
        y1="70"
        x2="210"
        y2={5 * scale + 70}
        stroke="green"
        strokeWidth="1"
      />
      {/* سینه */}
      <line
        x1="210"
        y1={70 + 5 * scale}
        x2="210"
        y2={70 + (2 + bolandiKafHalghe) * scale}
        stroke="black"
        strokeWidth="1"
      />
      {/* سینه تا کمر */}
      <line
        x1="210"
        y1={70 + (2 + bolandiKafHalghe) * scale}
        x2="210"
        y2={70 + (2 + kam) * scale}
        stroke="black"
        strokeWidth="1"
      />
      {/* کمر تا باسن */}
      <line
        x1="210"
        y1={70 + (2 + kam) * scale}
        x2="210"
        y2={70 + (2 + kam + ba) * scale}
        stroke="black"
        strokeWidth="1"
      />
      {/*  سر شانه */} /////////////////
      {/* افقی */}
      <line
        x1={210 + (gardan / 5 - 0.5) * scale}
        y1="70"
        x2={210 + (gardan / 5 - 2.5 + sin / 10) * scale}
        y2="70"
        stroke="pink"
        strokeWidth="1"
      />
      <line
        x1={210 + (gardan / 5 - 2.5 + sin / 10) * scale}
        y1="70"
        x2={210 + (gardan / 5 - 2.5 + sin / 10 + arzShan) * scale}
        y2={6.5 * scale + 70}
        stroke="blue"
        strokeWidth="1"
      />
      {/* پنس */} /////////////////
      {/* گردنی */}
      <line
        x1={210 + (gardan / 5 - 0.5) * scale}
        y1="70"
        x2={210 + (fasin / 2) * scale}
        y2={70 + Bsin * scale}
        stroke="green"
        strokeWidth="1"
      />
      {/* سرشانه ای */}
      <line
        x1={210 + (gardan / 5 - 2.5 + sin / 10) * scale}
        y1="70"
        x2={210 + (fasin / 2) * scale}
        y2={70 + Bsin * scale}
        stroke="green"
        strokeWidth="1"
      />
      {/*  عمود دیوار راست */} //////////
      <line
        x1={210 + (sin / 4 + 1) * scale}
        y1={70 + (2 + bolandiKafHalghe) * scale}
        x2={210 + (sin / 4 - 0.5) * scale}
        y2={70 + (2 + kam) * scale}
        stroke="blue"
        strokeWidth="1"
      />
      <line
        x1={210 + (sin / 4 - 0.5) * scale}
        y1={70 + (2 + kam) * scale}
        x2={210 + (dorba / 4 + 1) * scale}
        y2={70 + (2 + kam + ba) * scale}
        stroke="blue"
        strokeWidth="1"
      />
      {/* شانه خط */}
      {/*<line
           x1="210"
           y1={6.5 * scale + 70}
           x2={210 + (sin / 4) * scale}
           y2={6.5 * scale + 70}
           stroke="gray"
           strokeWidth="1"
         />*/}
      {/* سینه خط */}
      <line
        x1="210"
        y1={70 + (2 + bolandiKafHalghe) * scale}
        x2={210 + (sin / 4 + 1) * scale}
        y2={70 + (2 + bolandiKafHalghe) * scale}
        stroke="orange"
        strokeWidth="1"
      />
      {/* کارور خط */}
      <line
        x1="210"
        y1={70 + (2 + bolandiKafHalghe) * scale}
        x2={210 + (Jkar + sin / 20 - 0.5) * scale}
        y2={70 + (2 + bolandiKafHalghe) * scale}
        stroke="red"
        strokeWidth="1"
      />
      {/* خط کمر */}
      <line
        x1="210"
        y1={70 + (2 + kam) * scale}
        x2={210 + (sin / 4 - 0.5) * scale}
        y2={70 + (2 + kam) * scale}
        stroke="red"
        strokeWidth="1"
      />
      {/* خط باسن */}
      <line
        x1="210"
        y1={70 + (2 + kam + ba) * scale}
        x2={210 + (dorba / 4 + 1) * scale}
        y2={70 + (2 + kam + ba) * scale}
        stroke="pink"
        strokeWidth="1"
      />
      {/*ساسون */} //////////
      {/* عمود */}
      {/* <line
          x1={210 + ((kar + 0.5) / 2) * scale}
          y1={70 + (2 + bolandiKafHalghe) * scale}
          x2={210 + ((kar + 0.5) / 2) * scale}
          y2={70 + (2 + kam + ba) * scale}
          stroke="black"
          strokeWidth="1"
        /> */}
      {/* راست */}
      <line
        x1={210 + (fasin / 2) * scale}
        y1={70 + Bsin * scale}
        x2={210 + (fasin / 2 + 1.5) * scale}
        y2={70 + (2 + kam) * scale}
        stroke="blue"
        strokeWidth="1"
      />
      <line
        x1={210 + (fasin / 2 + 1.5) * scale}
        y1={70 + (2 + kam) * scale}
        x2={210 + (fasin / 2) * scale}
        y2={70 + (2 + kam + ba - 6) * scale}
        stroke="blue"
        strokeWidth="1"
      />
      {/* چپ */}
      <line
        x1={210 + (fasin / 2) * scale}
        y1={70 + Bsin * scale}
        x2={210 + (fasin / 2 - 1.5) * scale}
        y2={70 + (2 + kam) * scale}
        stroke="blue"
        strokeWidth="1"
      />
      <line
        x1={210 + (fasin / 2 - 1.5) * scale}
        y1={70 + (2 + kam) * scale}
        x2={210 + (fasin / 2) * scale}
        y2={70 + (2 + kam + ba - 6) * scale}
        stroke="blue"
        strokeWidth="1"
      />
      {/* دیوار راست باید عوض شه!! */} ////////////////////////
      {/* <line
           x1={210 + (halghe + kar - (2 * azSin) / 4) * scale}
           y1={(kam + ba) * scale + 210}
           x2={210 + (halghe + kar - (2 * azSin) / 4) * scale}
           y2={kam * scale + 210}
           stroke="orange"
           strokeWidth="2"
         /> */}
      {/*  کج دیوار راست */} //////////
      {/* <line
           x1={210 + (halghe + kar - (2 * azSin) / 4) * scale}
           y1={kam * scale + 210}
           x2={210 + (halghe + kar + (4 * azSin) / 4) * scale}
           y2="210"
           stroke="cyan"
           strokeWidth="1"
         /> */}
      {/* حلق آستین  */} //////////////
      {/* عمود */}
      <line
        x1={210 + (Jkar + sin / 20 - 0.5) * scale}
        y1={6.5 * scale + 70}
        x2={210 + (Jkar + sin / 20 - 0.5) * scale}
        y2={70 + (2 + bolandiKafHalghe) * scale}
        stroke="cyan"
        strokeWidth="1"
      />
      <path
        d={`
     M${210 + (gardan / 5 - 2.5 + sin / 10 + arzShan) * scale},${
          6.5 * scale + 70
        }
     Q${210 + (Jkar + sin / 20 - 0.5) * scale},${
          70 + (((bolandiKafHalghe - 2.5) * 2) / 3) * scale
        }
     ${210 + (Jkar + sin / 20 - 0.5) * scale},${
          70 + (((bolandiKafHalghe + 2.5) * 2) / 3) * scale
        }
   `}
        stroke="gray"
        fill="none"
        strokeWidth="1"
      />
      <path
        d={`
     M${210 + (Jkar + sin / 20 - 0.5) * scale},${
          70 + (((bolandiKafHalghe + 2.5) * 2) / 3) * scale
        }
     Q${210 + (Jkar + sin / 20 - 0.5) * scale},${
          70 + (((bolandiKafHalghe + 6) * 5) / 6) * scale
        }
     ${210 + (sin / 4 + 1) * scale},${70 + (2 + bolandiKafHalghe) * scale}
   `}
        stroke="green"
        fill="none"
        strokeWidth="1"
      />
    </>
  );
}

export default BalataneAnterior;
