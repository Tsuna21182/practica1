import { useEffect, useState } from "react";

function useContadorControl() {
  const [count, setCount] = useState(0);
  const [historial, setHistorial] = useState<number[]>(() => {
    const history = localStorage.getItem("historial");
    return history ? JSON.parse(history) : [];
  });

  const historialCambios = (newValue: number) => {
    setCount(newValue);
    setHistorial((prev) => [...prev, newValue]);
  };

  useEffect(() => {
    localStorage.setItem("historial", JSON.stringify(historial));
  }, [historial]);

  return {
    count,
    historialCambios,
    historial,
  };
}

export default useContadorControl;
