import { LucideIcon } from 'lucide-react';
import React from 'react'

type CardIconProps = {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function CardIcon({ icon: Icon, title, description }: CardIconProps) {
  return (
    <div className="flex flex-col text-default bg-tertiary items-start gap-2 rounded-2xl border border-default-tertiary p-6">
      <Icon className='icon-brand size-10'/>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
