import jwt from "jsonwebtoken";
import sanitizedConfig from "../../config.js";

const generateToken = (id) => {

  const accessTokenData = {
    userId: id,
  };
  const accessToken = jwt.sign(accessTokenData, sanitizedConfig.JWT_SECRET, {
    expiresIn: "15m",
  });

  // Generate refresh token
  const refreshTokenData = {
    userId: id,
  };
  const refreshToken = jwt.sign(refreshTokenData, sanitizedConfig.JWT_SECRET, {
    expiresIn: "30d",
  });

  return {
    accessToken,
    refreshToken,
  };
};

export default generateToken;
