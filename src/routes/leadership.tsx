import { createFileRoute, redirect } from '@tanstack/react-router'

// The old Leadership page has been split into Our Founders and Our Team.
// Anyone visiting an old /leadership link is sent to Our Founders.
export const Route = createFileRoute('/leadership')({
  beforeLoad: () => {
    throw redirect({ to: '/our-founders' })
  },
})
