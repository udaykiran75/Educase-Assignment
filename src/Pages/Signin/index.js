
import {useState} from 'react'
import {withRouter} from 'react-router-dom'

import {
  SigninDiv,
  SigninCard,
  SigninTitle,
  SigninDescrip,
  InputContainer,
  EmailLabel,
  EmailInput,
  PasswordLabel,
  PasswordInput,
  LoginButton,
} from './styledComponents'

const Signin = prop => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    const {history} = prop
    history.push('/Account')
  }

  const isFormValid = email !== '' && password !== ''

  return (
    <SigninDiv>
      <SigninCard>
        <SigninTitle>Signin to your PopX account</SigninTitle>
        <SigninDescrip>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </SigninDescrip>

        <InputContainer>
          <EmailLabel htmlFor="email">Email Address</EmailLabel>
          <EmailInput
            type="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <PasswordLabel htmlFor="password">Password</PasswordLabel>
          <PasswordInput
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </InputContainer>

        <LoginButton
          type="button"
          onClick={handleSubmit}
          isFormValid={isFormValid}
          disabled={!isFormValid}
        >
          Login
        </LoginButton>
      </SigninCard>
    </SigninDiv>
  )
}
export default withRouter(Signin)
