const EndZone = ({ position, text }) => (
  <div
    className={`w-full h-[12vh] bg-[#4C8C4A] absolute text-slate-100 font-bold flex items-center justify-center ${position}`}
  >
    {text}
  </div>
);

export default EndZone;
