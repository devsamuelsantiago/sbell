import AlarmCard from "@/components/alarm-card";
import { ScrollArea } from "@/components/ui/scroll-area";

const alarms = [
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
  {
    title: "Alarme 1",
    hour: "08",
    min: "00",
    when: "Dias úteis",
    active: true,
  },
];

export default function Home() {
  return (
    <main className="p-8">
      <div className="max-h-screen w-full">
        <ScrollArea className="mx-auto w-[80%] max-w-lg max-h-[600px]">
          <div className="flex flex-col gap-4">
            {alarms.map((alarm) => (
              <AlarmCard
                key={alarm.title}
                title={alarm.title}
                hour={alarm.hour}
                min={alarm.min}
                when={alarm.when}
                active={alarm.active}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </main>
  );
}
