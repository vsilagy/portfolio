import Image from "next/image";
import building from "../public/building.png";

export default function About() {
  return (
    <div className="max-w-screen-lg mx-auto ">
      <Image src={building} layout="responsive" />
    </div>
  );
}
