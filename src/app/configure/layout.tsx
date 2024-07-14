import MaxWidthrapper from "@/components/MaxWidthrapper"
import Steps from "@/components/steps"
import { ReactNode } from "react"

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <MaxWidthrapper className="flex-1 flex flex-col ">
            <Steps />
            {children}
        </MaxWidthrapper>
    )
}

export default Layout