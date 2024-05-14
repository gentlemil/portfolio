export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/user/dashboard', '/user/messages', '/user/projects'],
}
