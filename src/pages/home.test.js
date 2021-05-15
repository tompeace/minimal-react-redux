import userEvent from '@testing-library/user-event'
import { render, screen } from "./lib/test-utils"
import HomePage from './home'

describe("Home Page", () => {
  it('Should render correctly', () => {
    render(<HomePage />)
  })
  
  it('Should increase count on button click', () => {
    render(<HomePage />)

    const button = screen.getByRole('button', { name: /increase/i })
    const count = screen.getByTestId('count')
    
    userEvent.click(button)
    userEvent.click(button)
    userEvent.click(button)

    expect(count).toHaveTextContent("3")
  })
})