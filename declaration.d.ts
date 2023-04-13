declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.scss?inline' {
  import { CSSResult } from 'lit'
  const styles: CSSResult
  export default styles
}
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.gif'
