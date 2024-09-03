"use client";

import ButtonAdd from "@/components/ui/User/Buttons/actions/ButtonAdd";
import { createCookie } from "@/app/actions/cookies";

type ElementComponentSelectProps = {
  componentType: string;
  componentId: number;
};

export default function ButtonAddComponentSelect({
  componentType,
  componentId,
}: ElementComponentSelectProps) {

  async function handleButtonAdd() {
    createCookie(componentType, componentId);
  }

  return (
    <ButtonAdd
      onClick={handleButtonAdd}
      defaultLogo={true}
    />
  );
}
