import CardButton from "./CardButton";
import Image from "next/image";

export default function Card({ image, live, source, liveLink, sourceLink }) {
  return (
    <div className="flex-1 w-[25rem] p-2 rounded-lg shadow-xl md:basis-1/3  dark:bg-slate-700">
      <Image
        src={image}
        alt="project screenshot"
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
      />
      <div className="flex justify-center gap-5 py-5">
        <CardButton href={liveLink} name={live} />
        <CardButton href={sourceLink} name={source} />
      </div>
    </div>
  );
}
