import Image from "next/image";
import CityStylineImage from '@assets/Images/city-skyline-with-green-palm-trees-foreground-city-skyline-with-clouds-blue-sky.png';
import HotelAddress from "@/components/HotelAddress/page";
import { Button, Divider } from "antd";


export default function BookingSuccess() {
  return(
    <div className="bg-[#1E1E1E] h-screen pt-[65px] relative">
      <div className="px-6">
        <div className="font-semibold text-[26px] leading-[30px] text-white">Your all booked!</div>
        <div className="pt-4 flex gap-6">
          <Image
            width={56}
            height={56}
            priority
            style={{width: 56, height: 56}}
            className="rounded-md"
            src={CityStylineImage}
            alt="city-styleline-image"
          />
          <div className='text-[16px] leading-[24px] font-normal text-white'>Your room based on your last stay with us. Premium King Suite.</div>
        </div>
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
          <Button className='w-full !bg-white !text-black !py-[8px] !font-semibold !rounded-full' type="primary" htmlType="submit">
            Check In
          </Button>
        </div>
      </div>
    </div>
  )
}
