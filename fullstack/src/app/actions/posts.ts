'use server';

import { ComponentType } from "@/api/componentType";
import { formCreateComponentType as form } from "@/forms/schemas/SchemasComponentType";


export async function postCreateComponentType(data: FormData) {
  const name = data.get('name') as string;
  const description = data.get('description') as string;
  const order = parseInt(data.get('order') as string, 10);

  const parsedData = form.formSchema.safeParse({ name, description, order});

  if(!parsedData.success) {
    return { success: false, errors: parsedData.error.flatten()};
  }

  console.log('Form data:', parsedData.data);
  ComponentType.createComponentType(parsedData.data);
  return {
    success: true,
  }
}