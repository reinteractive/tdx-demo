'use client';

import HotelAddress from "@/components/HotelAddress/page";
import { Button, Divider } from "antd";
import { useRouter } from "next/navigation";
import ReservationStatus from "@/components/ReservationStatus/page";


export default function BookingSuccess() {
  const router = useRouter();

  const navigateToCheckInPage = () => {
    router.push('/check_in')
  }

  return(
    <div className="bg-[#1E1E1E] h-screen pt-[65px] relative">
      <div className="px-6">
        <ReservationStatus
          status="Your all booked!"
          description="Your room based on your last stay with us. Premium King Suite."
        />
        <div className="pt-5">
          <div className="font-medium text-[13px] leading-[13px] text-[#929292] pb-2">STAY INFORMATION</div>
          <div className="font-normal text-[14px] leading-6 text-white flex flex-col gap-2">
            <div>6 - 7 Mar 2025 (1 Nights)</div>
            <div>1 Room, 1 Guest</div>
            <div>Deluxe Queen, Premium King Suite, City view</div>
          </div>
        </div>
        <Divider style={{ borderColor: '#484848' }}></Divider>
        <HotelAddress />
        <Divider style={{ borderColor: '#484848' }}></Divider>

      </div>
      <div className='absolute bottom-0 left-0 w-full !mb-0'>
        <div className='bg-[#303030] pt-[24px] pb-[41px] px-[16px]'>
          <Button onClick={() => navigateToCheckInPage()} className='w-full !bg-white !text-black !py-[8px] !font-semibold !rounded-full' type="primary" htmlType="submit">
            Check In
          </Button>
        </div>
      </div>
    </div>
  )
}
