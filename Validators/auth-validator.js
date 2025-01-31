const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 chars." })
    .max(255, { message: "Name must be less than 255 chars" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must be at least of 3 chars." })
    .max(255, { message: "email must be less than 255 chars" }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(3, { message: "phone number must be at least of 3 chars." })
    .max(25, { message: "phone number must be less than 25 chars" }),
  password: z
    .string({ required_error: "password is required" })

    .min(6, { message: "password must be at least of 3 chars." })
    .max(20, { message: "password must be less than 20 chars" }),
});

module.exports = signupSchema;