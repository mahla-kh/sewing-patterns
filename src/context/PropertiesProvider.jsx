import React, { createContext, useContext, useEffect, useState } from "react";

const propertiesContext = createContext(null);

export function PropertiesProvider({ children }) {
  const [rawkar, setRawKar] = useState(17.5);
  const [kar, setKar] = useState(17.5);
  const [rawJkar, setRawJKar] = useState(17.5);
  const [Jkar, setJKar] = useState(17.5);
  const [rawkam, setRawKam] = useState(40.5);
  const [kam, setKam] = useState(40.5);
  const [rawba, setRawBa] = useState(20.5);
  const [ba, setBa] = useState(20.5);
  const [rawdorba, setRawdorBa] = useState(102);
  const [dorba, setdorBa] = useState(102);
  const [rawSin, setRawSin] = useState(96);
  const [sin, setSin] = useState(96);
  const [rawfaSin, setRawfaSin] = useState(20.5);
  const [fasin, setfaSin] = useState(20.5);
  const [rawAzSin, setRawAzSin] = useState(3);
  const [azSin, setAzSin] = useState(3);
  const [rawHsin, setRawHsin] = useState(26.4);
  const [Hsin, setHsin] = useState(26.4);
  const [rawshan, setRawShan] = useState(12.8);
  const [shan, setShan] = useState(12.8);
  const [rawgardan, setRawgardan] = useState(36.5);
  const [gardan, setgardan] = useState(36.5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setKar(rawkar * 2);
      setJKar(rawJkar * 2);
      setKam(rawkam * 2);
      setBa(rawba * 2);
      setdorBa(rawdorba * 2);
      setSin(rawSin * 2);
      setfaSin(rawfaSin * 2);
      setAzSin(rawAzSin * 2);
      setHsin(rawHsin * 2);
      setShan(rawshan * 2);
      setgardan(rawgardan * 2);
    }, 500);

    return () => clearTimeout(timeout);
  }, [
    rawkar,
    rawJkar,
    rawkam,
    rawba,
    rawdorba,
    rawSin,
    rawfaSin,
    rawAzSin,
    rawHsin,
    rawshan,
    rawgardan,
  ]);

  const scale = azSin / 2;
  const bolandiKafHalghe =
    sin / 10 + 10.5 + azSin > 27 * scale ? 27 * scale : sin / 10 + 10.5 + azSin;

  const arzShan = Math.sqrt(shan ** 2 - (5 * scale) ** 2);

  const Bsin =
    Math.sqrt(Hsin ** 2 - ((fasin / 2 - gardan / 5 + 0.5) * scale) ** 2) <
    bolandiKafHalghe
      ? bolandiKafHalghe
      : Math.sqrt(Hsin ** 2 - ((fasin / 2 - gardan / 5 + 0.5) * scale) ** 2);

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
        // Raw inputs for the form
        rawkar,
        setRawKar,
        rawJkar,
        setRawJKar,
        rawkam,
        setRawKam,
        rawba,
        setRawBa,
        rawdorba,
        setRawdorBa,
        rawSin,
        setRawSin,
        rawfaSin,
        setRawfaSin,
        rawAzSin,
        setRawAzSin,
        rawHsin,
        setRawHsin,
        rawshan,
        setRawShan,
        rawgardan,
        setRawgardan,
      }}
    >
      {children}
    </propertiesContext.Provider>
  );
}

export const useProperties = () => useContext(propertiesContext);
