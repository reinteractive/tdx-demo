import ButtonSwitch from "@/components/ButtonSwitch/page";
import { Button, Divider } from "antd";
import ConciergeServiceChat from "@assets/Icons/chat.svg"
import { useState } from "react";
import Image from "next/image";

export default function ConciergeService() {
  const [bookUber, setBookUber] = useState("yes");
  const [wakeupCall, setWakeupCall] = useState("");
  const [bevrage, setBevrage] = useState("");
  const [food, setFood] = useState("");
  const [pillow, setPillow] = useState("");
  const bookUberSwitchDetail = [{value: 'yes', title: 'Yes'}, {value: 'no', title: 'Cancel'}];
  const wakeUpCallSwitchDetail = [{value: '6am', title: '06:00 AM'}, {value: '7:30am', title: '07:30 AM'}, {value: 'other_time', title: 'Other time'}];
  const bevrageSwitchDetail = [{value: 'stella_artios', title: '2 x Bottles Stella Artois'}, {value: 'other_bevrages', title: 'Other beverages'}];
  const foodSwitchDetail = [{value: 'steak_medium_rare', title: '1 x Steak, Medium Rare'}, {value: 'other_food', title: 'Other food'}];
  const pillowSwitchDetail = [{value: '1_hard_pillow', title: '1 x Hard Pillow'}, {value: 'other_pillows', title: 'Other pillows'}];


  return(
    <div>
      <div className="font-semibold text-white text-[26px] leading-[30px] pb-2">Concierge Service</div>
      <div className="font-regular text-white text-[14px] leading-[18px] pb-4">Would you like us to book an Uber for you?</div>
      <div className="pb-2">
        <ButtonSwitch
          switches={bookUberSwitchDetail}
          onPress={(value) => setBookUber(value)}
          selectedValue={bookUber}
        />
      </div>

      {
        bookUber === 'yes' &&
          <div>
            <div className="p-4 bg-[#303030] flex flex-col gap-4 rounded-[4px]">
              <div>
                <div className="text-[#929292] font-medium font-[13px] leading-[13px]">PICKUP TIME</div>
                <div className="font-regular text-[14px] leading-[16px] text-white pt-2">13:50 PM</div>
              </div>
              <div>
                <div className="text-[#929292] font-medium font-[13px] leading-[13px]">FROM</div>
                <div className="font-regular text-[14px] leading-[16px] text-white pt-2">San Francisco Airport</div>
              </div>
              <div>
                <div className="text-[#929292] font-medium font-[13px] leading-[13px]">TO</div>
                <div className="font-regular text-[14px] leading-[16px] text-white pt-2">761 Post Street, San Francisco, CA, 94109</div>
              </div>
            </div>
          </div>
      }
      <Divider style={{ borderColor: '#484848' }}></Divider>
      <div className="pb-6">
        <div className="font-regular text-[14px] leading-[18px] pb-4 text-white">Based on your previous stays, we have arranged these for you. Deselect the option if you don’t require it.</div>
        <div className="space-y-4">
          <ButtonSwitch
            title="WAKE-UP CALL"
            switches={wakeUpCallSwitchDetail}
            onPress={(value) => setWakeupCall(value)}
            selectedValue={wakeupCall}
          />

          <ButtonSwitch
            title="BEVRAGES"
            switches={bevrageSwitchDetail}
            onPress={(value) => setBevrage(value)}
            selectedValue={bevrage}
          />

          <ButtonSwitch
            title="FOOD"
            switches={foodSwitchDetail}
            onPress={(value) => setFood(value)}
            selectedValue={food}
          />

          <ButtonSwitch
            title="PILLOWS"
            switches={pillowSwitchDetail}
            onPress={(value) => setPillow(value)}
            selectedValue={pillow}
          />
          <div className="cursor-pointer flex justify-end">
            <Image
              src={ConciergeServiceChat}
              style={{witdth: 'auto', height: 'auto'}}
              alt="concierge-chat"
            />
          </div>
        </div>

      </div>
    </div>
  )
}