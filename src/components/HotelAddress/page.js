import Image from "next/image";
import DirectionIcon from '@assets/Icons/icon_map.svg';

export default function HotelAddress({withMap=true}) {
  return(
    <div>
      <div className='flex flex-row justify-between items-center'>
        <div className='text-[16px] leading-[22px] font-medium text-white'>761 Post Street <br />San Francisco, CA, USA, 94109</div>
        <Image
          src={DirectionIcon}
          className='cursor-pointer'
          alt="direction-icon"
        />
      </div>
      <div className='pt-4 text-[16px] leading-[16px] font-medium text-[#BD9315] cursor-pointer'>+ 1 (415) 346-3800</div>
      {
        withMap &&
        <div className='pt-4'>
          <iframe
            width="100%"
            loading="lazy"
            allowFullScreen
            className='rounded-md'
            src="https://www.openstreetmap.org/export/embed.html?bbox=-122.519,37.704,-122.355,37.833&layer=mapnik"
          ></iframe>
        </div>
      }
    </div>
  )
}