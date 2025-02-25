'use client';

import Image from "next/image";
import ArrowRight from '@assets/Icons/arrow-right.svg';
import { useRouter } from "next/navigation";

export default function ConciergeChat() {
  const router = useRouter();

  return(
    <div className="bg-[#1E1E1E] pt-[65px] px-[20px] h-screen">
      <div onClick={() => router.back()} className="pb-[24px]">
        <Image
          src={ArrowRight}
          width={12}
          height={8}
          style={{width: 'auto', height: 'auto'}}
          className="rotate-180 cursor-pointer"
          alt="arrow-right"
        />
      </div>
      <div>
        <div className="font-semibold text-[26px] leading-[30px] text-white pb-4">Concierge Chat</div>
        <div className="space-y-2">
          <div className="text-white font-normal text-[16px] leading-6 px-4 py-2 bg-[#303030] rounded-lg">
            <div className="pb-4">Hello Roger. Here are your next flight details:</div>
            <div>Flight: <b>X555 Delta Airlines</b></div>
            <div>Departure: <b>16:00 PM</b></div>
            <div>Airport: <b>San Francisco</b></div>
            <div>Arrives: <b>18:10 PM</b></div>
          </div>
          <div className="text-[#898888] font-normal text-[16px] leading-5 px-4 py-2 bg-[#303030] rounded-lg w-fit">
            Open Airline App
          </div>
        </div>
      </div>
    </div>
  )
}
