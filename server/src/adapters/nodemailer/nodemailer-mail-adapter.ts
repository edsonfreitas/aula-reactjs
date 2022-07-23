import { MailAdapter, SendMailData } from "../mail-adapter.";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d25420fa4dd180",
      pass: "60b961d406b598"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({ subject, body}: SendMailData){
        await transport.sendMail({
          from: "Equipe Feedget <oi@feedget.com>",
          to: "Edson Arruda <testeapp@aplicacao.com>",
          subject,
          html:body,
      })
    };
}