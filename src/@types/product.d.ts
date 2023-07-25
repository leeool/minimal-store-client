interface IProduct {
  id: string
  name: string
  slug: string
  price: number
  description: string
  images: string[]
  category: ICategory
}
