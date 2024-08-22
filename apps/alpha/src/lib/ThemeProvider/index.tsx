import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';


export default function ThemeProvider ({children}: {children: React.ReactNode}) {
  return <>
  <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
  </>
}