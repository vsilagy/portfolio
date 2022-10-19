import Image from "next/image";
import building from "../public/building.png";

export default function Resume() {
  return (
    <div className="max-w-screen-md mx-auto ">
      <Image src={building} layout="responsive" />
    </div>
  );
}
