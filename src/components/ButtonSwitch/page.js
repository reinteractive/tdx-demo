import { Button } from "antd"

export default function ButtonSwitch({title, switches = [], onPress, selectedValue}) {
  const buttonActiveCss = "!bg-[#BD9315] text-[#1E1E1E] hover:!text-black !font-semibold !border-[#BD9315]";
  const buttonInActiveCss = "!border !border-[#666666] !bg-transparent !font-medium !text-[#898888]";

  return(
    <div>
      {
        title &&
          <div className="text-[#929292] font-medium text-[13px] leading-[13px] pb-2">{title}</div>
      }
      <div className="flex  gap-4">
        {
          switches.map((switchInfo) => {
            return(
              <Button
                key={switchInfo.value}
                className={`${(selectedValue || switches[0].value) === switchInfo.value ? buttonActiveCss : buttonInActiveCss} !font-semibold !text-[13px] !leading-[14px]`}
                onClick={() => onPress && onPress(switchInfo.value)}
              >{switchInfo.title}</Button>
            )
          })
        }
      </div>
    </div>
  )
}