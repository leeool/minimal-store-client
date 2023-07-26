import React from "react"
import { Container, Form } from "./Register.styled"
import BlackHighlight from "@components/BlackHighlight"
import Input from "@components/Forms/Input"
import useRegisterStore from "./useRegisterStore"
import { Button } from "@components/Button"
import { ArrowLeftIcon, ArrowRightIcon } from "@primer/octicons-react"
import { Controller, useForm } from "react-hook-form"
import ButtonIcon from "@components/Button/ButtonIcon"
import cpfMask from "@helpers/cpfMask"
import useSignUp from "@mutations/useSignUp"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

const Register = () => {
  const stage = useRegisterStore((state) => state.stage)

  const stages = {
    one: <StageOne />,
    two: <StageTwo />
  }

  return (
    <Container>
      <BlackHighlight.Root>
        <BlackHighlight.Text variant="title">
          Economize seu tempo. Crie sua conta.
        </BlackHighlight.Text>
        <BlackHighlight.Text variant="subtitle">
          Explore as tendências do minimalismo
        </BlackHighlight.Text>
      </BlackHighlight.Root>
      {stages[stage]}
      <Link to={"/entrar"}>Já possuo uma conta</Link>
    </Container>
  )
}

const StageOne = () => {
  const setEmail = useRegisterStore((state) => state.setEmail)
  const setPassword = useRegisterStore((state) => state.setPassword)
  const email = useRegisterStore((state) => state.email)
  const password = useRegisterStore((state) => state.password)
  const setStage = useRegisterStore((state) => state.setStage)
  const { handleSubmit, register } = useForm()

  const handleNext = handleSubmit((data) => {
    const { email, password, passwordConfirm } = data

    if (!email || !password || !passwordConfirm) return
    else if (password !== passwordConfirm) return alert("Senhas não coincidem")

    setEmail(email)
    setPassword(password)

    setStage("two")
  })

  return (
    <Form onSubmit={handleNext}>
      <Input.Root>
        <Input.Label htmlFor="email">Email</Input.Label>
        <Input.Base
          id="email"
          type="email"
          autoFocus
          defaultValue={email}
          {...register("email", { required: true })}
        />
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor="password">Senha</Input.Label>
        <Input.Base
          id="password"
          type="password"
          defaultValue={password}
          {...register("password", { required: true })}
        />
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor="password-confirm">Confirme a Senha</Input.Label>
        <Input.Base
          id="password-confirm"
          type="password"
          defaultValue={password}
          {...register("passwordConfirm", { required: true })}
        />
      </Input.Root>
      <Button.Root>
        Próximo
        <Button.Icon>
          <ArrowRightIcon />
        </Button.Icon>
      </Button.Root>
    </Form>
  )
}

const StageTwo = () => {
  const setStage = useRegisterStore((state) => state.setStage)
  const email = useRegisterStore((state) => state.email)
  const password = useRegisterStore((state) => state.password)

  const name = useRegisterStore((state) => state.name)
  const cpf = useRegisterStore((state) => state.cpf)
  const address = useRegisterStore((state) => state.address)

  const setName = useRegisterStore((state) => state.setName)
  const setCpf = useRegisterStore((state) => state.setCpf)
  const setAddress = useRegisterStore((state) => state.setAddress)
  const { handleSubmit, register } = useForm()

  const mutation = useSignUp()
  const nav = useNavigate()

  const handleRegister = handleSubmit((data) => {
    const { name, cpf, address } = data

    if (!name || !cpf || !address) return

    setName(name)
    setCpf(cpf)
    setAddress(address)

    mutation.mutate(
      {
        name,
        cpf: cpf.replace(/\D/g, ""),
        address,
        email,
        password
      },
      {
        onSuccess: () => {
          nav("/")
        }
      }
    )
  })

  return (
    <>
      <Button.Root onClick={() => setStage("one")} type="button">
        <ButtonIcon>
          <ArrowLeftIcon />
        </ButtonIcon>
      </Button.Root>
      <Form onSubmit={handleRegister}>
        <Input.Root>
          <Input.Label htmlFor="name">Nome completo</Input.Label>
          <Input.Base
            id="name"
            autoFocus
            type="text"
            defaultValue={name}
            {...register("name", {
              required: true,
              onChange: (e) => setName(e.target.value)
            })}
          />
        </Input.Root>
        <Input.Root>
          <Input.Label htmlFor="cpf">CPF</Input.Label>
          <Input.Base
            id="cpf"
            defaultValue={cpf}
            {...register("cpf", {
              required: true,
              minLength: 14,
              maxLength: 14
            })}
            onChange={({ target }) => {
              const cleanedValue = target.value
                .replace(/\D/g, "")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                .replace(/(-\d{2})\d+?$/, "$1")

              setCpf(cleanedValue)
              return cleanedValue
            }}
            value={cpf}
          />
        </Input.Root>
        <Input.Root>
          <Input.Label htmlFor="address">Endereço</Input.Label>
          <Input.Base
            id="address"
            type="text"
            defaultValue={address}
            {...register("address", {
              required: true,
              onChange: (e) => setAddress(e.target.value)
            })}
          />
        </Input.Root>
        <Button.Root>
          Criar conta
          <Button.Icon>
            <ArrowRightIcon />
          </Button.Icon>
        </Button.Root>
      </Form>
    </>
  )
}

export default Register
