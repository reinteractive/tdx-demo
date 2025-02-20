import Image from "next/image";
import CityStylineImage from '@assets/Images/city-skyline-with-green-palm-trees-foreground-city-skyline-with-clouds-blue-sky.png';

export default function ReservationStatus({status, description}) {
  return(
    <div>
      <div className="font-semibold text-[26px] leading-[30px] text-white">{status}</div>
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
        <div className='text-[16px] leading-[24px] font-normal text-white'>{description}</div>
      </div>
    </div>
  )
}