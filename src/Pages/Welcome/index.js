
import {withRouter} from 'react-router-dom'
import {
  WelcomeContainer,
  WelcomeCard,
  WelHeading,
  WelDescription,
  CreateButton,
  LoginButton,
} from './styledComponents'

const Welcome = props => {
  const onClickedCreateBtn = () => {
    const {history} = props
    history.push('/Signup')
  }

  const onClickedLoginBtn = () => {
    const {history} = props
    history.push('/Signin')
  }

  return (
    <WelcomeContainer>
      <WelcomeCard>
        <WelHeading>Welcome to PopX</WelHeading>
        <WelDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </WelDescription>
        <CreateButton type="button" onClick={onClickedCreateBtn}>
          Create Account
        </CreateButton>
        <LoginButton type="button" onClick={onClickedLoginBtn}>
          Already Registered? Login
        </LoginButton>
      </WelcomeCard>
    </WelcomeContainer>
  )
}
export default withRouter(Welcome)
