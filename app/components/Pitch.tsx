import { MdGrass, MdOutlineGroups, MdOutlineWbSunny } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
import { Link } from "react-router";
import stadium from "../images/stadium.png";

export default function Pitch({ name, to }: { name: string; to: string }) {
  return (
    <Link to={`bookings/${to}`}>
      <div className="text-muted-foreground rounded-md w-fit max-w-100 font-inter overflow-clip bg-white border  border-[#BCCBB9]">
        <img src={stadium} />
        <div className="p-4">
          <p className="font-semibold text-xl text-black font-sans">{name}</p>
          <div className="flex items-start mt-2">
            <RiMapPin2Line />
            <p className="text-sm">Behind old ministry of woman affairs, Gombe state</p>
          </div>
          <div className="flex gap-x-3 text-sm mt-2">
            <div className="gap-x-1 rounded-sm py-1 px-2 flex items-center bg-[#ECEEF0] text-muted-foreground font-medium">
              <MdGrass />
              <p>Synthetic</p>
            </div>
            <div className="gap-x-1 rounded-sm py-1 px-2 flex items-center bg-[#ECEEF0] text-muted-foreground font-medium">
              <MdOutlineGroups />
              <p>5-a-side</p>
            </div>
            <div className="gap-x-1 rounded-sm py-1 px-2 flex items-center bg-[#ECEEF0] text-muted-foreground font-medium">
              <MdOutlineWbSunny />
              <p>Pro Lights</p>
            </div>
          </div>
          <hr className="mt-6" />
          <div className="mt-4 flex items-center justify-between">
            <p>
              Starting from <br />
              <span className="text-green font-semibold text-xl">NGN/15000</span>/team
            </p>
            <p className="bg-green text-[#001b0b] py-2 px-4 font-semibold rounded-lg">Book Now</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
