import React from "react";
import { useProperties } from "./context/PropertiesProvider";

export default function PropertiesPanel() {
  const {
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
    rawdorkam,
    setRawdorKam,
  } = useProperties();

  return (
    <div className="inputs">
      <label>دور کمر</label>
      <input
        placeholder="دور کمر"
        value={rawdorkam}
        onChange={(e) => setRawdorKam(+e.target.value)}
      />
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
  );
}
