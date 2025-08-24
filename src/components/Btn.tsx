type BtnProps = {
  name: string;
  className: string;
  onClick: () => void;
};

function Btn({ name, className, onClick }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className={`p-3 text-xl transition-colors duration-300 rounded-lg cursor-pointer ${className}`}
    >
      {name}
    </button>
  );
}

export default Btn;
