import { Calendar, Clock, MapPin, Users } from "lucide-react";

import { cn } from "@/lib/utils";

import { IconList } from "@/components/icon-list";

type EventAttributesProps = {
  className?: string;
  iconColor?: string;
};

export function EventAttributes({ className, iconColor }: EventAttributesProps) {
  return (
    <IconList className={cn("space-y-4", className)}>
      <IconList.Item classname={cn(iconColor)} icon={Users}>
        Evento presencial aa
      </IconList.Item>
      <IconList.Item classname={cn(iconColor)} icon={Calendar}>
        05 a 07 de agosto de 2025
      </IconList.Item>
      <IconList.Item classname={cn(iconColor)} icon={MapPin}>
        Distrito Anhembi, Expo 2, Avenida Olavo Fontoura, 1209 – Santana, São Paulo/SP - 02012-021
      </IconList.Item>
      <IconList.Item classname={cn(iconColor)} icon={Clock}>
        05 e 06/08: 10h às 18h <br /> 07/08: 10h às 17h
      </IconList.Item>
    </IconList>
  );
}
