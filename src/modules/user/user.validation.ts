import { array, boolean, number, object, string } from 'zod';

const fullNameValidationSchema = object({
  firstName: string().min(1).max(15),
  lastName: string(),
});

const addressValidationSchema = object({
  street: string(),
  city: string(),
  country: string(),
});

const orderValidationSchema = object({
  productName: string(),
  price: number(),
  quantity: number(),
});

export const userValidationSchema = object({
  userId: number(),
  username: string(),
  password: string(),
  fullName: fullNameValidationSchema,
  age: number(),
  email: string().email(),
  isActive: boolean(),
  isDeleted: boolean(),
  hobbies: array(string()),
  address: addressValidationSchema,
  orders: array(orderValidationSchema),
});
