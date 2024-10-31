import { AccountModel } from '@/domain/models/account'

export interface LoadAccountByToken {
  load: (accessToken: string, rolew?: string) => Promise<AccountModel>
}
