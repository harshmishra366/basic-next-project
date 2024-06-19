import StickyRole from "@/components/StickyRole";
import FeatureCourses from "@/components/featureCourses";
import Herosection from "@/components/herocomponent";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <TracingBeam>
      <Herosection/>
      < FeatureCourses />
      < StickyRole />
      </TracingBeam>
    </main>
  );
}
