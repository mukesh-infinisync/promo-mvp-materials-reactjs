import { useLocation } from "react-router"
import { motion } from "framer-motion"
import { PageInDevelopment } from "@/components/PageInDevelopment"
import { PageNotFound } from "@/components/PageNotFound"

interface DevGuardProps {
  allowedRoutes: string[]
}

export const DevGuard: React.FC<DevGuardProps> = ({ allowedRoutes }) => {
  const location = useLocation()
  const currentPath = location.pathname

  const isAllowed = allowedRoutes.includes(currentPath)

  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {isAllowed ? <PageInDevelopment path={currentPath} /> : <PageNotFound />}
    </motion.div>
  )
}
