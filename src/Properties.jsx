import React, { createContext, useContext, useEffect, useState } from "react";

const propertiesContext = createContext(null);

export default function Properties() {
  //   کارور پشت نصف!
  const [rawkar, setRawKar] = useState(17.5);
  const [kar, setKar] = useState(17.5);
  //   کارور جلو نصف!
  const [rawJkar, setRawJKar] = useState(17.5);
  const [Jkar, setJKar] = useState(17.5);
  // بلندی پشت تا کمر
  const [rawkam, setRawKam] = useState(40.5);
  const [kam, setKam] = useState(40.5);
  // دور کمر
  //   const [rawdorkam, setRawdorKam] = useState(80);
  //   const [dorkam, setdorKam] = useState(80);
  // بلندی باسن
  const [rawba, setRawBa] = useState(20.5);
  const [ba, setBa] = useState(20.5);
  // دور باسن
  const [rawdorba, setRawdorBa] = useState(102);
  const [dorba, setdorBa] = useState(102);
  //   سینه
  const [rawSin, setRawSin] = useState(96);
  const [sin, setSin] = useState(96);
  //   سینه فاصله
  const [rawfaSin, setRawfaSin] = useState(20.5);
  const [fasin, setfaSin] = useState(20.5);
  //   آزادی سینه
  const [rawAzSin, setRawAzSin] = useState(2);
  const [azSin, setAzSin] = useState(2);
  // ارتفاع سینه
  const [rawHsin, setRawHsin] = useState(26.4);
  const [Hsin, setHsin] = useState(26.4);
  // سر شانه
  const [rawshan, setRawShan] = useState(12.8);
  const [shan, setShan] = useState(12.8);
  // دور گردن
  const [rawgardan, setRawgardan] = useState(36.5);
  const [gardan, setgardan] = useState(36.5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setKar(rawkar * 2);
      setJKar(rawJkar * 2);
      //   setdorKam(rawdorkam * 2);
      setKam(rawkam * 2);
      setBa(rawba * 2);
      setdorBa(rawdorba * 2);
      setSin(rawSin * 2);
      setfaSin(rawfaSin * 2);
      setAzSin(rawAzSin * 2);
      setHsin(rawHsin * 2);
      setShan(rawshan * 2);
      setgardan(rawgardan * 2);
    }, 1000);

    return () => clearTimeout(timeout); // اگر سریع تایپ شد، تایمر قبلی لغو بشه
  }, [
    rawgardan,
    // rawdorkam,
    rawHsin,
    rawkar,
    rawJkar,
    rawkam,
    rawAzSin,
    rawdorba,
    rawba,
    rawSin,
    rawfaSin,
    rawshan,
  ]);
  const scale = azSin / 2;
  // بلندی کف حلقه
  const bolandiKafHalghe =
    sin / 10 + 10.5 + azSin > 27 ? 27 : sin / 10 + 10.5 + azSin;

  console.log(bolandiKafHalghe);
  const arzShan = Math.sqrt(shan ** 2 - (5 * scale) ** 2);

  const Bsin =
    Math.sqrt(Hsin ** 2 - ((fasin / 2 - gardan / 5 + 0.5) * scale) ** 2) <
    bolandiKafHalghe
      ? bolandiKafHalghe
      : Math.sqrt(Hsin ** 2 - ((fasin / 2 - gardan / 5 + 0.5) * scale) ** 2);

  console.log(Bsin);
  return (
    <propertiesContext.Provider
      value={{
        bolandiKafHalghe,
        arzShan,
        Bsin,
        kar,
        Jkar,
        kam,
        ba,
        dorba,
        sin,
        fasin,
        azSin,
        Hsin,
        shan,
        gardan,
        scale,
      }}
    >
      <div className="inputs">
        {/* <label>دور کمر</label>
        <input
          placeholder="دور کمر"
          value={rawdorkam}
          onChange={(e) => setRawdorKam(+e.target.value)}
        /> */}
        <label>"سرشانه"</label>
        <input
          placeholder="سرشانه"
          value={rawshan}
          onChange={(e) => setRawShan(+e.target.value)}
        />
        <label>دور گردن</label>
        <input
          placeholder="دور گردن"
          value={rawgardan}
          onChange={(e) => setRawgardan(+e.target.value)}
        />
        <label>"دور سینه"</label>
        <input
          placeholder="دور سینه"
          value={rawSin}
          onChange={(e) => setRawSin(+e.target.value)}
        />
        <label>"فاصله سینه"</label>
        <input
          placeholder="فاصله سینه"
          value={rawfaSin}
          onChange={(e) => setRawfaSin(+e.target.value)}
        />
        <label>آزادی سینه</label>
        <input
          placeholder="آزادی سینه"
          value={rawAzSin}
          onChange={(e) => setRawAzSin(+e.target.value)}
        />
        <label>بلندی سینه</label>
        <input
          placeholder="بلندی سینه"
          value={rawHsin}
          onChange={(e) => setRawHsin(+e.target.value)}
        />
        <label>"کارور پشت"</label>
        <input
          placeholder="کارور پشت"
          value={rawkar}
          onChange={(e) => setRawKar(+e.target.value)}
        />
        <label>"کارور جلو"</label>
        <input
          placeholder="کارور جلو"
          value={rawJkar}
          onChange={(e) => setRawJKar(+e.target.value)}
        />
        <label>"بالاتنه پشت"</label>
        <input
          placeholder="بالاتنه پشت"
          value={rawkam}
          onChange={(e) => setRawKam(+e.target.value)}
        />
        <label>"بلندی باسن"</label>
        <input
          placeholder="بلندی باسن"
          value={rawba}
          onChange={(e) => setRawBa(+e.target.value)}
        />
        <label>"دور باسن"</label>
        <input
          placeholder="دور باسن"
          value={rawdorba}
          onChange={(e) => setRawdorBa(+e.target.value)}
        />
      </div>
    </propertiesContext.Provider>
  );
}

export const useProperties = () => useContext(propertiesContext);
