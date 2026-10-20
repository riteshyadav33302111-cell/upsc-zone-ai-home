// CSS module declarations for @fontsource and global CSS
declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare module '@fontsource/*' {
  const content: unknown
  export default content
}
