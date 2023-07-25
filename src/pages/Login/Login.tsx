import React from "react"
import { Container, Form } from "./Login.styled"
import BlackHighlight from "@components/BlackHighlight"
import Input from "@components/Forms/Input"
import { Button } from "@components/Button"
import { ArrowRightIcon } from "@primer/octicons-react"
import { useForm } from "react-hook-form"
import useSignIn from "@mutations/useSignIn"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

const Login = () => {
  const { handleSubmit, register } = useForm()
  const mutation = useSignIn()
  const nav = useNavigate()

  const handleLogin = handleSubmit((data) => {
    const { email, password } = data

    if (!email || !password) return

    mutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          nav("/")
        }
      }
    )

    console.log({ email, password })
  })

  return (
    <Container>
      <BlackHighlight.Root>
        <BlackHighlight.Text variant="title">
          Login minimalista, uso prático.
        </BlackHighlight.Text>
        <BlackHighlight.Text variant="subtitle">
          Menos obstáculos, mais funcionalidade
        </BlackHighlight.Text>
      </BlackHighlight.Root>
      <Form onSubmit={handleLogin}>
        <Input.Root>
          <Input.Label htmlFor="email">Email</Input.Label>
          <Input.Base
            type="email"
            autoFocus
            id="email"
            {...register("email", { required: true })}
          />
        </Input.Root>
        <Input.Root>
          <Input.Label htmlFor="password">Senha</Input.Label>
          <Input.Base
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
        </Input.Root>
        <Button.Root>
          Entrar
          <Button.Icon>
            <ArrowRightIcon />
          </Button.Icon>
        </Button.Root>
      </Form>
      <Link to={"/entrar/registrar"}>Ainda não tenho uma conta</Link>
    </Container>
  )
}

export default Login
