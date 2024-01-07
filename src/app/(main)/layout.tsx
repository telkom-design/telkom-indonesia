// This layout is not used, all content is on sites directory.

import { redirect } from 'next/navigation'

export default async function RootLayout() {
  redirect('/sites')
}