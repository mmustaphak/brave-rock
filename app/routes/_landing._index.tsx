import { CiMap } from "react-icons/ci";
import Pitch from "~/components/Pitch";

export default function _index() {
  const pitches = [
    { name: "Brave rock Park PITCH A", to: "pitch-a" },
    { name: "Brave rock Park PITCH B", to: "pitch-b" },
  ];
  const renderedPitches = pitches.map((pitch) => <Pitch {...pitch} />);
  return (
    <>
      <div className="px-6 py-20 container">
        <p className="font-bold text-3xl">Discover Premier Football Arenas</p>
        <p className="max-w-140">
          Professional-grade pitches, verified facilities, and instant booking at your fingertips.
        </p>
      </div>
      <hr />
      <div className=" p-6">
        <p className="font-bold text-2xl">Available Arenas</p>
        <div className="flex justify-between">
          <p className="text-muted-foreground">Showing 24 top-rated facilities near you</p>
          <div className="text-green flex gap-x-1 items-center">
            <span className="font-semibold">View on Map</span>
            <CiMap strokeWidth={2} />
          </div>
        </div>
        <div className="mt-4 flex gap-x-4 flex-wrap">{renderedPitches}</div>
      </div>
    </>
  );
}
