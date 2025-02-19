"use client";

import Image from "next/image";
import ArrowRight from '@assets/Icons/arrow-right.svg';
import BookingDetailsForm from "./form";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function BookingDetails() {
  const router = useRouter();

  return(
    <Suspense>
      <div className="bg-[#1E1E1E] h-screen booking-details relative">
        <div className="pt-[65px] px-[20px]">
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
          <BookingDetailsForm />
        </div>
      </div>
    </Suspense>
  )
}