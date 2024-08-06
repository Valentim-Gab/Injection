import { Env } from '@/environment/env'
import { ImageEntity } from '@/interfaces/image-entity'

export class ImageService {
  private apiUrl = process.env.API_URL ?? Env.API_URL

  async getAll(): Promise<ImageEntity[] | null> {
    try {
      const res = await fetch(`${this.apiUrl}/image`, {
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

  async getAllByUserId(id: number): Promise<ImageEntity[] | null> {
    try {
      const res = await fetch(`${this.apiUrl}/image/user/${id}`, {
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

  async getById(id: number): Promise<ImageEntity | null> {
    try {
      const res = await fetch(`${this.apiUrl}/image/${id}`, {
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

  async search(value: string, userId: number): Promise<ImageEntity[] | null> {
    const url = new URL(`${this.apiUrl}/image/search/${userId}`)
    url.searchParams.append('input', value)

    try {
      const res = await fetch(url, {
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
