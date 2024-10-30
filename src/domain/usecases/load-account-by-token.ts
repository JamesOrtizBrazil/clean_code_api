import { AccountModel } from '../models/account'

export interface LoadAccountByToken {
  load: (accessToken: string, rolew?: string) => Promise<AccountModel>
}
