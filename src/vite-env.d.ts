/// <reference types="vite/client" />

// CSS and font declarations for @fontsource and global stylesheets
declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare module '@fontsource/*' {
  const content: unknown
  export default content
}

declare module '@fontsource/fraunces/*' { const content: unknown; export default content }
declare module '@fontsource/manrope/*' { const content: unknown; export default content }
declare module '@fontsource/jetbrains-mono/*' { const content: unknown; export default content }
declare module '@fontsource/caveat/*' { const content: unknown; export default content }
declare module '@fontsource/noto-sans/*' { const content: unknown; export default content }
declare module '@fontsource/noto-serif/*' { const content: unknown; export default content }
