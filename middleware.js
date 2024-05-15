export { default } from 'next-auth/middleware'

export const config = {
  matcher: [
    '/user/dashboard',
    '/user/messages',
    '/user/participations/add',
    '/user/projects/add',
    '/user/projects',
  ],
}
