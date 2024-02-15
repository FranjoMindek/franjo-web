import NodeMailerClient from "@/lib/nodemailer/NodeMailerClient";
import {z} from "zod";
import {fromZodError} from "zod-validation-error";

const sendEmailSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is too short'),
  email: z
    .string()
    .email('Please provide a valid email')
    .min(1, 'Email is too short'),
  message: z
    .string()
    .min(1, 'Body is too short'),
});

export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();

  const res = await sendEmailSchema.safeParseAsync(Object.fromEntries(formData));
  if (!res.success) {
    const validationError = fromZodError(res.error);
    return new Response(validationError.toString(), {status: 400})
  }

  const name = res.data.name;
  const email = res.data.email;
  const message = res.data.message;

  await NodeMailerClient.getInstance().sendMessageAsync(name, email, message);

  return new Response("Ok", {status: 200});
}
