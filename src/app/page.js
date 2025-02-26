"use client"

import Image from "next/image";
import forestImage from "../assets/Images/beautiful-waterfall.webp";
import { useRouter } from "next/navigation";
import { Button, Input } from "antd";
import AppLogo from "@components/AppLogo/page";
import { useState } from "react";

export default function Main() {
  const router = useRouter();
  const [searchPlace, setSearchPlace] = useState("");

  const navigateToSignInPage = () => {
    var place = ""
    if (searchPlace) {
      place = `location=${searchPlace}`
    }
    router.push(`/booking_details?${place}`)
  }
  return (
    <div className="grid relative">
      <div className="flex justify-center items-center flex-col px-5">
        <AppLogo />
        <Input
          placeholder="Where would you like to stay?"
          className="like-to-stay !rounded-full w-full !h-[40px]"
          onChange={(e) => setSearchPlace(e.target.value)}
        />
        <div className="font-semibold pt-[168px] text-[19px] text-white">Stay With US</div>
        <div className="!font-[14px] pt-[4px] text-white">Join for benefits, stay for rewards.</div>
        <Button
          className="w-[150px] !h-[40px] mt-[16px] text-[14px] !rounded-full font-semibold"
          onClick={() => navigateToSignInPage()}
        >Book Now</Button>
      </div>
      <Image
        src={forestImage}
        style={{objectFit:"cover"}}
        className="h-screen absolute -z-20 bg-black"
        alt="Picture of the author"
      />
      <div className="h-screen absolute -z-10 bg-black w-full opacity-40"></div>
    </div>
  );
}
