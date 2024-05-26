import User from "../models/user.js";
import generateToken from "../utils/generateToken.js";

// @desc    login
// @route   post /api/login

export const loginContoller = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    const tokens = generateToken(findUser);

    let loginDetails = {
      user: findUser,
      tocken: {
        token_type: "Bearer",
        expires_in: 1296000,
        access_token: tokens.accessToken,
        refresh_token: tokens.refreshToken,
      },
    };
    res.status(200).json({
      data: loginDetails,
      status: true,
      message: "user find successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};
