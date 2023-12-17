import { TUser } from './user.interface';
import UserModel from './user.model';

const createUserIntoDB = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserIntoDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getUserById = async (userId: number) => {
  const result = await UserModel.findOne({ userId });
  return result;
};

const deleteUser = async (userId: number) => {
  const result = await UserModel.updateOne({ userId }, { isDeleted: true });
  return result;
};

const updateUser = async (userId: number, updateData: any) => {
  const updatedData = await UserModel.findOne({ userId });
  if (!updatedData) {
    throw new Error('User not found.');
  }

  updatedData.set(updateData);
  await updatedData.save();
  return updatedData;
};
export const userServices = {
  createUserIntoDB,
  getAllUserIntoDB,
  getUserById,
  deleteUser,
  updateUser,
};
