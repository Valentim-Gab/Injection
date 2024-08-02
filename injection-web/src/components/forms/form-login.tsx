'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { LoginService } from '@/services/login-service'
import { useEffect } from 'react'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  username: z.string().min(1, {
    message: 'Campo obrigatório',
  }),
  password: z.string().min(1, {
    message: 'Campo obrigatório',
  }),
})

export function FormLogin() {
  const loginService = new LoginService()
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!values) {
      return
    }

    const data = await loginService.login(values.username, values.password)

    if (!data) {
      toast({
        variant: 'destructive',
        title: 'Falha ao logar',
        description: 'Email ou senha incorretos',
      })

      return
    }

    toast({
      variant: 'success',
      title: 'Logado com sucesso!',
    })

    router.push(`/membro/${data.id}`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[400px] pb-10 border-b-white border-b-[1px] 2xl:max-w-[448px]"
      >
        <div className="flex items-center justify-center">
          <hr className="w-full border-white" />
          <span className="flex justify-center items-center border-[1px] border-white rounded-full min-h-[100px] min-w-[100px] sm:min-h-[120px] sm:min-w-[120px]">
            <i className="icon-[solar--user-outline] w-12 h-12 text-white sm:h-[60px] sm:w-[60px]"></i>
          </span>
          <hr className="w-full border-white" />
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="mt-6 lg:mt-8">
              <div className="flex items-center justify-center border-[1px] border-white rounded">
                <span className="flex justify-center items-center min-w-12 min-w-h-10 2xl:min-w-14 2xl:min-h-12">
                  <i className="icon-[solar--user-outline] w-6 h-6 2xl:w-8 2xl:h-8"></i>
                </span>
                <FormControl>
                  <div className="flex items-center bg-white h-10 w-full 2xl:h-12">
                    <input
                      placeholder="Email"
                      type="text"
                      {...field}
                      className="focus:outline-none text-black bg-transparent pl-4 h-full w-full 2xl:text-lg"
                    />
                  </div>
                </FormControl>
              </div>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-4 lg:mt-6">
              <div className="flex items-center justify-center border-[1px] border-white rounded">
                <span className="flex justify-center items-center min-w-12 min-h-10 2xl:min-w-14 2xl:min-h-12">
                  <i className="icon-[solar--lock-keyhole-minimalistic-linear] w-6 h-6 2xl:w-8 2xl:h-8"></i>
                </span>
                <FormControl>
                  <div className="flex items-center bg-white h-10 w-full 2xl:h-12">
                    <input
                      placeholder="Senha"
                      type="password"
                      {...field}
                      className="focus:outline-none text-black bg-transparent pl-4 h-full w-full 2xl:text-lg"
                    />
                  </div>
                </FormControl>
              </div>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full rounded uppercase mt-6 text-base lg:mt-8 2xl:text-lg"
        >
          Login
        </Button>
        <div className="flex justify-between mt-10">
          <span className="flex items-center justify-center gap-2">
            <input type="checkbox" name="remember" id="remeber" />
            <label
              htmlFor="remember"
              className="text-white text-sm 2xl:text-base"
            >
              Lembrar-me
            </label>
          </span>
          <a href="#" className="text-muted-foreground text-sm 2xl:text-base">
            Esqueceu a senha?
          </a>
        </div>
      </form>
    </Form>
  )
}
