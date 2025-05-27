import { useRoutes } from "react-router-dom"
import routes from "../src/route"


export default function App() {
  const router = useRoutes(routes)
  return (
    <>
    {router}
    </>
  )
}
