import { ReactNode } from "react"

type ButtonPropsType = {
   children: ReactNode
   type: "light" | "dark" | "accent"
}

const Button = ({
   children, type
}: ButtonPropsType) => {
  return (
    <div className={`h-14 w-14 text-white grid place-content-center
         rounded-full select-none cursor-default
         target:opacity-80
         text-${type==="light"?"black":"white"}
         bg-${type==="light"?"gray-300":type==="dark"?"gray-600":"amber-500"}`}>
      <h1 className="pb-1 pr- text-3xl">{children}</h1>
    </div>
  )
}

export default Button