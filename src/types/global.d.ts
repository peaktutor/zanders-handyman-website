// Global type declarations for Cornerstone Developing

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        [key: string]: any
        page_path?: string
        page_title?: string
        page_location?: string
        send_to?: string
        event_category?: string
        event_label?: string
        value?: number
        currency?: string
      }
    ) => void
    dataLayer?: any[]
    fbq?: (command: string, eventName: string, parameters?: any) => void
    _linkedin_partner_id?: string
    _linkedin_data_partner_ids?: string[]
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      NEXT_PUBLIC_SITE_URL: string
      NEXT_PUBLIC_GA_ID?: string
      NEXT_PUBLIC_FB_PIXEL_ID?: string
      NEXT_PUBLIC_LINKEDIN_PARTNER_ID?: string
      NEXT_PUBLIC_GOOGLE_VERIFICATION?: string
      NEXT_PUBLIC_YANDEX_VERIFICATION?: string
      NEXT_PUBLIC_BING_VERIFICATION?: string
      EMAIL_SERVICE_API_KEY?: string
      EMAIL_FROM?: string
      EMAIL_TO?: string
      DATABASE_URL?: string
      AWS_ACCESS_KEY_ID?: string
      AWS_SECRET_ACCESS_KEY?: string
      AWS_REGION?: string
      AWS_S3_BUCKET?: string
      WEBHOOK_SECRET?: string
    }
  }
}

// Module declarations for packages that might not have types
declare module 'clsx' {
  type ClassValue = string | number | boolean | undefined | null | { [key: string]: any } | ClassValue[]
  function clsx(...inputs: ClassValue[]): string
  export = clsx
}

declare module 'tailwind-merge' {
  function twMerge(...inputs: string[]): string
  export { twMerge }
}

// Extend Performance interface
interface Performance {
  now(): number
  mark(name: string): void
  measure(name: string, startMark?: string, endMark?: string): void
}

// React component type helpers
export type ComponentWithChildren<T = {}> = T & {
  children: React.ReactNode
}

export type ComponentWithOptionalChildren<T = {}> = T & {
  children?: React.ReactNode
}

export type PropsWithClassName<T = {}> = T & {
  className?: string
}

export type PropsWithId<T = {}> = T & {
  id?: string
}

// Common utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

// Export empty object to make this a module
export {}