import { useEffect, useState } from "react";

function useContadorControl() {
  const [count, setCount] = useState(() => {
    const contador = localStorage.getItem("contador");
    return contador ? JSON.parse(contador) : 0;
  });
  const [historial, setHistorial] = useState<number[]>(() => {
    const history = localStorage.getItem("historial");
    return history ? JSON.parse(history) : [];
  });

  const [step, setStep] = useState(1);

  const [isLocked, setIsLocked] = useState(false);

  const historialCambios = (newValue: number) => {
    setCount(newValue);
    setHistorial((prev) => {
      const updated = [...prev, newValue];

      return updated.slice(-10);
    });
  };

  useEffect(() => {
    localStorage.setItem("historial", JSON.stringify(historial));
    localStorage.setItem("contador", JSON.stringify(count));
  }, [historial, count]);

  return {
    count,
    historial,
    step,
    setStep,
    isLocked,
    setIsLocked,
    historialCambios,
  };
}

export default useContadorControl;
