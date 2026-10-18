import { FC } from 'react'

type Props = {
  children: React.ReactNode
}

const Wrapper: FC<Props> = ({ children }) => {
  return <div className="mx-auto w-[1247px] max-w-[90%]">{children}</div>
}

export default Wrapper
