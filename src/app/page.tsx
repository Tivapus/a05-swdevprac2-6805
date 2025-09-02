"use client";

import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="flex flex-wrap justify-center gap-6 p-5">
        <Card venueName="The Bloom Pavilion" imgSrc="/images/bloom.jpg"/>
        <Card venueName="Spark Space" imgSrc="/images/sparkspace.jpg"/>
        <Card venueName="The Grand Table" imgSrc="/images/grandtable.jpg"/>
      </div>
    </div>
  );
}
