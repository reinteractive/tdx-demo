'use client';

import HotelRoom from '@assets/Images/close-up-bed-with-black-cushion.png';
import Image from 'next/image';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import HotelAddress from '@components/HotelAddress/page';

export default function BookingConfirmation() {
  const router = useRouter();

  const navigateToBookingSuccessPage = () => {
    router.push('/booking_success')
  }

  return(
    <div className='bg-[#1E1E1E] h-full relative'>
      <Image
        src={HotelRoom}
        priority
        alt="hotel-room"
      />
      <div className='px-6 pt-4'>
        <div className='text-[26px] leading-[30px] font-semibold text-white'>Your room based on your last stay with us. Premium King Suite.</div>
        <div className='pt-6'>
          <HotelAddress />
        </div>
      </div>
      <div className='bg-[#303030] absolute bottom-0 w-full p-6 flex justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <div className='font-medium text-[13px] leading-[13px] text-[#929292]'>FROM</div>
          <div>
            <span className='font-medium text-[22px] leading-[14px] pr-2'>$340</span><span className='text-[13px] leading-[14px] font-[400]'>USD / Night</span>
          </div>
        </div>
        <Button
          className="w-[130px] !h-[38px] text-[14px] !rounded-full !font-semibold leading-[22px]"
          onClick={() => navigateToBookingSuccessPage()}
        >Select Room</Button>
      </div>
    </div>
  )
}