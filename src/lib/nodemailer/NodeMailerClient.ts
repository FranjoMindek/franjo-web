import nodemailer, {Transporter} from 'nodemailer';
import SMTPTransport from "nodemailer/lib/smtp-transport";

export default class NodeMailerClient {
  private static instance: NodeMailerClient;

  private readonly _email: string;
  private readonly _transporter: Transporter<SMTPTransport.SentMessageInfo>;

  private constructor() {
    const gmailEmail = process.env.GMAIL_EMAIL;
    if (!gmailEmail) throw new Error("Gmail Email is undefined!");
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    if (!gmailAppPassword) throw new Error("Gmail Password is undefined!");

    this._email = gmailEmail;
    this._transporter = nodemailer.createTransport(
      {
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
          user: gmailEmail,
          pass: gmailAppPassword,
        }
      }
    );
  }

  public static getInstance(): NodeMailerClient {
    if (!NodeMailerClient.instance) {
      NodeMailerClient.instance = new NodeMailerClient();
    }

    return NodeMailerClient.instance;
  }

  public async sendMessageAsync(name: string, email: string, body: string) {
    const text = `
    Name: ${name}
    Email: ${email}
    
    Body: ${body}`;

    const message = {
      from: this._email,
      to: this._email,
      subject: `[FWEB] Contact by ${email}`,
      text
    };

    try {
      await this._transporter.sendMail(message);
    } catch (e) {
      console.log(e);
    }
  }
}
