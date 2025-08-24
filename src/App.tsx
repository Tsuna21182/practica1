import Btn from "./components/Btn";
import useContadorControl from "./state/useContadorControl";

function App() {
  const {
    count,
    historialCambios,
    historial,
    step,
    setStep,
    isLocked,
    setIsLocked,
  } = useContadorControl();

  return (
    <>
      <h1 className="mt-10 text-4xl font-black text-center">Contador Pro</h1>
      <section className="flex flex-col items-center justify-center mt-10">
        <div className="p-5 space-y-5 bg-white shadow-lg rounded-2xl">
          <h3 className="text-3xl">
            El contador va en: <span className="font-bold">{count}</span>
          </h3>

          <div className="flex gap-3">
            <label className="text-lg">
              Step:{" "}
              <input
                type="number"
                value={step}
                disabled={isLocked}
                onChange={(e) => setStep(Number(e.target.value))}
                className="px-2 py-1 border rounded-md"
              />
            </label>
          </div>

          <div className="flex gap-5">
            <Btn
              name={"Incrementar"}
              className={"bg-sky-500 hover:bg-sky-700 text-white"}
              onClick={() => historialCambios(count + step)}
              disabled={isLocked}
            />
            <Btn
              name={"Decrementar"}
              className={"bg-red-500 hover:bg-red-700 text-white"}
              onClick={() => historialCambios(count - step)}
              disabled={isLocked}
            />
            <Btn
              name={"Reset"}
              className={"bg-orange-500 hover:bg-orange-700 text-white"}
              onClick={() => historialCambios(0)}
              disabled={isLocked}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-lg">
              <input
                type="checkbox"
                checked={isLocked}
                onChange={() => setIsLocked(!isLocked)}
              />
              Bloquear controles
            </label>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-10">
        <div className="p-5 space-y-5 bg-white shadow-lg rounded-2xl">
          <h3 className="text-3xl font-semibold">Historial de Cambios</h3>
          {historial.length > 0 ? (
            <ul className="list-disc list-inside">
              {historial.map((item, index) => (
                <li className="text-lg" key={index}>
                  El contador cambio a:{" "}
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xl">Sin historial de momento</p>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
