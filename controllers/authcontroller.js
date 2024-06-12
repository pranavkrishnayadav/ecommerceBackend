import userModule from "../models/userModule.js";

export const registerController = async (req, res) => {
  try {
    const { u_name, u_pwd, u_u_email, u_addr, u_u_contact } = req.body;

    const user = await userModule.create({
      u_name,
      u_pwd,
      u_u_email,
      u_addr,
      u_u_contact,
    });
    res.status(201).json({
      status: "Success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      message: error.meassage,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { u_u_email, u_pwd } = req.body;
    const user = await userModule.findOne({ u_u_email });

    if (!user) {
      res.status(404).json({
        status: "Failed",
        message: "User Doesn't Exist",
      });
    }

    //Compare Password

    if (u_pwd != user.u_pwd) {
      return res.status(400).json({
        status: "Failed",
        meassge: "Password Doesn't Match",
      });
    }

    return res.status(201).json({
      status: "Success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err.message,
    });
  }
};


