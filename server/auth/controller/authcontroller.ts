import { Request, Response } from "express";
import * as EmailValidator from "email-validator";
import bycrypt from "bcrypt";
import { error } from "console";

export class AuthController {
  static async signup(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin");
    res.header("Access-Control-Allow-Headers");

    let { username, useremail, userpassword } = req.body;

    let isValidated = await EmailValidator.validate(useremail);
    if (!isValidated)
      return res.status(201).send({
        authentication: "false",
        data: "Invalid Email",
      });
    else {
      let salt = await bycrypt.genSalt(10);
      await bycrypt.hash(
        userpassword,
        salt,
        (error: any, hashedPassword: any) => {
          if (error)
            return res.status(202).send({
              authentication: "false",
              data: "Something Went Wrong",
            });

          res.send(hashedPassword);
        }
      );
    }
  }
}
