import { createFileRoute, redirect } from '@tanstack/react-router'

// The Mission & Vision page has been replaced by About Us.
// Anyone visiting an old /mission-and-vision link is sent to About Us.
export const Route = createFileRoute('/mission-and-vision')({
  beforeLoad: () => {
    throw redirect({ to: '/about' })
  },
})
