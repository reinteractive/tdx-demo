"use client";

import HotelAddress from "@/components/HotelAddress/page";
import ReservationStatus from "@/components/ReservationStatus/page";
import { Button, Divider } from "antd";
import { useRouter } from "next/navigation";
import ConciergeService from "./concierge_service";

export default function CheckIn() {
  const router = useRouter();

  return(
    <div className="bg-[#1E1E1E] pt-[65px] px-[20px]">
      <ReservationStatus
        status="Your room is ready"
        description="Your room based on your last stay with us. Premium King Suite."
      />
      <div className="pt-3">
        <HotelAddress withMap={false} />
      </div>
      <Button onClick={() => router.push('get_digital_key')} className='w-full text-[14px] leading-[22px] !mt-4 !bg-white !text-black !py-[8px] !font-semibold !rounded-full' type="primary" htmlType="submit">
        Check-in and Get Digital Key
      </Button>

      <Divider style={{ borderColor: '#484848' }}></Divider>
      <ConciergeService />
    </div>
  )
}