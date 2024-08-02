import { Env } from "@/environment/env"
import { Member } from "@/interfaces/member"

export class MemberService {
  private apiUrl = process.env.API_URL ?? Env.API_URL

  async getAll(): Promise<Member[] | null> {
    try {
      const res = await fetch(`${this.apiUrl}/user`, {
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

  async getById(id: number): Promise<Member | null> {
    try {
      const res = await fetch(`${this.apiUrl}/user/${id}`, {
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

  async search(value: string): Promise<Member[] | null> {
    try {
      const res = await fetch(`${this.apiUrl}/user/search/${value}`, {
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
}
