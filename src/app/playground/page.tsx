import AreaChart from "@/components/area-chart";
import HorizontalBarChart from "@/components/horizontal-bar-chart";
import MultiAxisLineChart from "@/components/multi-axis-line-chart";
import VerticalBarChart from "@/components/vertical-bar-chart";
import React from "react";

export default function PlaygroundPage() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <VerticalBarChart />
        </Card>
        <Card>
          <HorizontalBarChart />
        </Card>
        <Card>
          <AreaChart />
        </Card>
        <Card>
          <MultiAxisLineChart />
        </Card>
      </div>
    </>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl ring-1 ring-gray-200 shadow">
      <div className=" px-8 py-6">{children}</div>
    </div>
  );
}
