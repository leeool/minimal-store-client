import React from "react"
import {
  Categories,
  CategoriesButton,
  Container
} from "./HeaderCategories.styled"
import { Button } from "@components/Button"
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@primer/octicons-react"

const HeaderCategories = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [leftButtonVisible, setLeftButtonVisible] = React.useState(false)
  const [rightButtonVisible, setRightButtonVisible] = React.useState(true)

  const handleClick = (event: React.MouseEvent) => {
    if (!ref.current) return

    const dir = (event.currentTarget as HTMLButtonElement).dataset.dir

    const scrollLeft = ref.current.scrollLeft

    if (dir === "left") {
      ref.current.scrollTo({ left: scrollLeft - 200, behavior: "smooth" })
    } else if (dir === "right") {
      ref.current.scrollTo({ left: scrollLeft + 200, behavior: "smooth" })
    }
  }

  const handleScroll = () => {
    if (!ref.current) return

    const scrollLeft = ref.current.scrollLeft

    const isMaxScrollLeft = scrollLeft === 0
    const isMaxScrollRight =
      scrollLeft === ref.current.scrollWidth - ref.current.clientWidth

    if (isMaxScrollLeft) {
      setRightButtonVisible(true)
      setLeftButtonVisible(false)
    } else if (isMaxScrollRight) {
      setRightButtonVisible(false)
      setLeftButtonVisible(true)
    } else {
      // middle
      setLeftButtonVisible(true)
      setRightButtonVisible(true)
    }
  }

  React.useEffect(() => {
    if (!ref.current) return

    ref.current.addEventListener("scroll", handleScroll)

    return () => {
      ref.current?.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Container>
      <CategoriesButton
        onClick={handleClick}
        data-dir="left"
        data-hidden={!leftButtonVisible}
      >
        <ChevronLeftIcon />
      </CategoriesButton>
      <Categories ref={ref}>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
        <Button.Root variant="secondary" size="sm">
          Categorias
        </Button.Root>
      </Categories>
      <CategoriesButton
        onClick={handleClick}
        data-dir="right"
        data-hidden={!rightButtonVisible}
      >
        <ChevronRightIcon />
      </CategoriesButton>
    </Container>
  )
}

export default HeaderCategories
