interface Group5Props {
  className?: string;
}

const Group5 = ({ className }: Group5Props) => {
  return (
    <div className={`relative w-[337px] h-[62px] ${className ?? ""}`.trim()}>
      {/* Rectangle 14 */}
      <div className="absolute w-[337px] h-[62px] bg-[#34ab3b] rounded-[50px]" />
      {/* SYNC */}
      <p className="absolute top-[13px] left-[135px] text-2xl font-bold text-center text-white tracking-[0.200em]">
        SYNC
      </p>
    </div>
  );
};

export default Group5;
