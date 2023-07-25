import React from "react"
import { Container, Paragraph } from "./ProductPageImages.styled"
import { motion } from "framer-motion"
import Product from "@components/Product"

interface Props {
  images: string[]
}

const ProductPageImages = ({ images }: Props) => {
  const [imageActive, setImageActive] = React.useState(0)

  const handleImages = (e: React.MouseEvent) => {
    const target = e.currentTarget

    if (target instanceof HTMLSpanElement) {
      setImageActive(Number(target.dataset.index))
    }
  }

  return (
    <Container>
      {" "}
      {images.map((image, index) => (
        <motion.span
          onClick={handleImages}
          data-index={index}
          className={imageActive === index ? "active" : ""}
          layout
          key={index}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.4, stiffness: 100 }
          }}
        >
          <Product.Image src={image} />
        </motion.span>
      ))}
      <Paragraph>Créditos: OPENAI</Paragraph>
    </Container>
  )
}

export default ProductPageImages
