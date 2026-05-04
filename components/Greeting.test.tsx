import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Greeting from './Greeting'

//Ein Beispielhafter Test für vitest
test('zeigt den korrekten Namen an', () => {
  render(<Greeting name="test" />)
  
  // queryByText gibt null zurück, wenn nichts gefunden wird (getBy würde einen Fehler werfen)
  const element = screen.queryByText(/Hallo, test/i)
  
  // Wir prüfen einfach, ob das Element existiert
  expect(element).not.toBeNull()
})