import styled from 'styled-components'
import avatar from '@material-ui/core/Avatar';
import button from '@material-ui/core/Button';

export const Div = styled.div`
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center
`

export const Avatar = styled(avatar)`
    margin: 1rem;
    background-color: black;
`

export const Form = styled.form`
    width: 100%;
    margin-top: 1rem
`

export const Button = styled(button)`
    margin: 3rem 0rem 2rem;
`