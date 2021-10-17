import { IMailProvider, IMessage } from '../IMailProvider'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import Mail from 'nodemailer/lib/mailer'

dotenv.config()


export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport(process.env.BYPASS)
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.address
      },
      from: {
        name: message.from.name,
        address: message.from.address
      },
      subject: message.subject,
      html: message.body
    })
  }
}