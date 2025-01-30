import { Button } from "@/components/ui/button"
// import { Link } from "lucide-react"
import Link from "next/link"

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click <Link href="/documents/123">&nbsp;here&nbsp;</Link> to go to a document id
    </div>
  )
}


export default Home  