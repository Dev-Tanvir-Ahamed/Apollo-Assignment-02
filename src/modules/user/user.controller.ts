import { Request, Response } from 'express';
import { userValidationSchema } from './student.validation';
import { userServices } from './students.services';

const createUser = async (req: Request, res: Response) => {
  const userData = req.body;

  try {
    const zodParseData = userValidationSchema.parse(userData);

    const result = await userServices.createUserIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'user created succesfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'failed',
      data: error,
    });
  }
};

// Retrieve all users
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserIntoDB();

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'failed to retrieve all users',
      data: error,
    });
  }
};

// get a user by id

const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params;

    const result = await userServices.getUserById(parseInt(userId.userId));

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'failed to user by id',
      data: error,
    });
  }
};

// delete a user by id

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params;

    const result = await userServices.deleteUser(parseInt(userId.userId));

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'user not found',
      error: {
        code: 404,
        description: 'user not found',
      },
    });
  }
};

const udatdeUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params;
    const updatedUser = await userServices.updateUser(
      parseInt(userId.userId),
      req.body,
    );

    return res.json({
      success: true,
      message: 'User updated successfully!',
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'user not found',
      error: {
        code: 404,
        description: 'user not found',
      },
    });
  }
};

export const userController = {
  createUser,
  getAllUser,
  getUserById,
  deleteUserById,
  udatdeUser,
};
