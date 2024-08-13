"use client"
import { Analytics } from "@vercel/analytics/react"

const VercelAnalytics = () => {
  return <Analytics mode="production" />
}

export default VercelAnalytics
