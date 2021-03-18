import { VFC } from 'react'

type Props = {
  title: string
  description: string
  keywords?: string
}

const component: VFC<Props> = ({ title, description, keywords }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
  </>
)

export default component
