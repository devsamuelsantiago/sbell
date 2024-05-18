"use client";

import { useState } from "react";
import { Switch } from "./ui/switch";

export default function AlarmCard({
  title,
  hour,
  min,
  when,
  active,
}: {
  title: string;
  hour: string;
  min: string;
  when: string;
  active: boolean;
}) {
  const [isAlarmActive, setIsAlarmActive] = useState<boolean>(active);
  return (
    <div className="flex p-6 bg-zinc-900 h-28 border rounded-lg">
      <div className="flex justify-between items-center w-full">
        <h1 className="flex flex-col jutify-center  text-zinc-400 gap-1">
          <h1 className="text-lg">{title}</h1>
          <div className="text-5xl">
            <span className="font-semibold">{hour}</span>
            <span>:</span>
            <span className="font-semibold">{min}</span>
          </div>
        </h1>
        <div className="flex items-center gap-8">
          <span className="text-zinc-400">{when}</span>
          <Switch
            className="scale-125"
            checked={isAlarmActive}
            onCheckedChange={() => {
              setIsAlarmActive(!isAlarmActive);
            }}
          />
        </div>
      </div>
    </div>
  );
}
