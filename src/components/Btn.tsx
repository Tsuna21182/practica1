type BtnProps = {
  name: string;
  className: string;
  onClick: () => void;
  disabled?: boolean;
};

function Btn({ name, className, onClick, disabled }: BtnProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-3 text-xl transition-colors duration-300 rounded-lg cursor-pointer disabled:opacity-40  ${className}`}
    >
      {name}
    </button>
  );
}

export default Btn;
