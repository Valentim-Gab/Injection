import { Env } from '@/environment/env'
import { Member } from '@/interfaces/member'
import { MemberService } from './member-service'

export class LoginService {
  private apiUrl = process.env.API_URL ?? Env.API_URL
  private idLoggedMock = 2
  private memberService = new MemberService

  async login(email: string, password: string): Promise<Member | null> {
    try {
      const body = {
        email: email,
        password: password,
      }

      console.log(body)

      const res = await fetch(`${this.apiUrl}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        cache: 'no-cache',
      })

      if (!res || !res.ok) {
        return null
      }

      return await res.json()
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async getLoggedUserMock(): Promise<Member | null> {
    return await this.memberService.getById(this.idLoggedMock)
  }
}
