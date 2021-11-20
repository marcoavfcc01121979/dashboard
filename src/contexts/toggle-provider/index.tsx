import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from 'react'
import { usePersistedState } from '../../hooks/usePersistedState'

type Scheme = 'light' | 'dark'

export interface IThemeToggleContext {
  scheme: Scheme
  setColorScheme: (scheme: Scheme) => void
  toggleColorScheme: () => void
}

const ThemeToggleContext = createContext<IThemeToggleContext>({
  scheme: 'light',
  setColorScheme: () => false, // {}
  toggleColorScheme: () => false, // {}
})

export const useThemeToggle = () => {
  const context = useContext(ThemeToggleContext)
  return context
}

export default function ThemeToggleProvider({
  children,
  initialSchema = 'light',
}: PropsWithChildren<{ initialSchema: Scheme }>) {
  const [schema, setSchema] = usePersistedState(
    '@app/colorScheme',
    initialSchema
  )

  const toggleColorScheme = useCallback(() => {
    setSchema(schema === 'light' ? 'dark' : 'light')
  }, [schema, setSchema])

  return (
    <ThemeToggleContext.Provider
      value={{
        scheme: schema,
        setColorScheme: setSchema,
        toggleColorScheme,
      }}
    >
      {children}
    </ThemeToggleContext.Provider>
  )
}
