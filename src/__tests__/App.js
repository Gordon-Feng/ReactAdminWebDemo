import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import App from '../App';

describe('<App/>', () => {
    test('should show Login component for /login router', () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['/login']}>
                <App/>
            </MemoryRouter>
        )
        fireEvent.click(getByTestId('login'))
        expect(getByTestId('login-page')).toBeInTheDocument();
    })
    test('should show SchoolManage component for /school-manage router', () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={['/school-manage']}>
                <App/>
            </MemoryRouter>
        )
        fireEvent.click(getByTestId('school-manage'))
        expect(getByTestId('school-manage-page')).toBeInTheDocument();
    })
})