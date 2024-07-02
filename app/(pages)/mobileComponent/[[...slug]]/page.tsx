import React from "react";
import CarouselMui from "@/components/carousel/carousel";
import Prodoct from "./list";

export default function Page() {
  return (
    <div>
      <CarouselMui />
      <Prodoct />
      <CarouselMui />
    </div>
  );
}
