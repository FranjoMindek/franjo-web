import {NextResponse} from "next/server";
import NodeMailerClient from "@/lib/nodemailer/NodeMailerClient";
import {z} from "zod";
import {fromZodError} from "zod-validation-error";
import {redirect} from "next/navigation";

const sendEmailSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is too short'),
  email: z
    .string()
    .email('Please provide a valid email')
    .min(1, 'Email is too short'),
  body: z
    .string()
    .min(1, 'Body is too short'),
});

export async function POST(request: Request) {
  const formData = await request.formData();

  const res = await sendEmailSchema.safeParseAsync(Object.fromEntries(formData));
  if (!res.success) {
    const validationError = fromZodError(res.error);
    return new Response(validationError.toString(), {status: 400})
  }

  const name = res.data.name;
  const email = res.data.email;
  const body = res.data.body;

  await NodeMailerClient.getInstance().sendMessageAsync(name, email ,body);

  return new Response("Ok", {status: 200});
}
