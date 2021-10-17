import { MailTrapMailProvider } from '../../providers/implementations/MailTrapMailProvider'
import { PostgresUserRepository } from '../../repositories/implementations/PostgresUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUserRepository = new PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailTrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
