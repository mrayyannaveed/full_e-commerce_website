function SectionName(props: any) {
  return (
    <div>
      <div>
        <div className="flex items-center w-40 justify-between mb-4">
          <div className="h-10 w-5 bg-[#DB4444] rounded "></div>
          <p className="text-[#DB4444] text-base font-semibold">{props.name}</p>
        </div>
        <span className="text-black text-4xl font-semibold leading-[48px]">
          {props.head}
        </span>
      </div>
    </div>
  );
}

export default SectionName;
