"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowRight from '@assets/Icons/arrow-right.svg';
import CheckIn from '@assets/Images/check_in.png';
import { Divider, Input } from "antd";
import './check-in.scss';
import StayInformation from "@/components/StayInformation/page";

export default function GetDigitalKey() {
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
      <div className="py-4 space-y-2">
        <div className="font-semibold text-[26px] leading-[30px] text-white">Your Digital Door Key</div>
        <div className="font-regular text-white text-[14px] leading-[22px] pb-4">Hold your phone near the door handle and it will unlock for you.</div>
        <div className="flex justify-center items-center">
          <Image
            src={CheckIn}
            priority
            style={{width: '205px', height: '205px'}}
            alt="check-in"
          />
        </div>
      </div>
      <div>
        <Divider style={{ borderColor: '#484848' }}></Divider>
        <div className="font-regular text-white text-center text-[14px] leading-[22px] pb-4">You can also unlock the door using this pin:</div>
        <div className="check-in-otp flex justify-center">
          <Input.OTP
            length={4}
            variant="filled"
            onChange={() => router.push('/concierge_chat')}
          />
        </div>
        <Divider style={{ borderColor: '#484848' }}></Divider>
      </div>
      <StayInformation />
      <Divider style={{ borderColor: '#484848' }}></Divider>
    </div>
  )
}
