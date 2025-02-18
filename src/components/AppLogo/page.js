import Image from "next/image";
import MainLogo from "@assets/Logos/logo.svg";

export default function AppLogo() {
  return(
     <Image
        src={MainLogo}
        width={106}
        className="pt-[69px] pb-[24px]"
        alt="app-logo"
      />
  )
}