import { PropsWithChildren } from "react"

export type TitleProps = {
  classname?: string
}

const Title = (props: PropsWithChildren<TitleProps>) => {
  return (
    <div>
      <h1 className={`text-left text-[24px] font-semibold ${props.classname}`}>{props.children}</h1>
    </div>
  )
}

export default Title
