
import {useState} from 'react'
import {withRouter} from 'react-router-dom'

import {
  SignupContainer,
  SignupCard,
  SignupTitle,
  InputContainer,
  LabelElement,
  InputElement,
  SpanEl,
  LabelText,
  RadioInputsDiv,
  RadioLabel,
  RadioInput,
  CreateButton,
} from './styledComponents'

const Signup = prop => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  })

  const handleChange = event => {
    const {name, value} = event.target
    setForm(prevState => ({...prevState, [name]: value}))
  }

  const handleSubmit = () => {
    const {history} = prop
    history.push('/Signin')
  }

  const isFormValid =
    form.fullName && form.phone && form.email && form.password && form.isAgency

  return (
    <SignupContainer>
      <SignupCard>
        <SignupTitle>Create your PopX account</SignupTitle>

        {/* Full Name Input */}
        <InputContainer>
          <LabelElement htmlFor="fullName">
            Full Name<SpanEl>*</SpanEl>
          </LabelElement>
          <InputElement
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </InputContainer>

        {/* Phone Number Input */}
        <InputContainer>
          <LabelElement htmlFor="phoneNumber">
            Phone number<SpanEl>*</SpanEl>
          </LabelElement>
          <InputElement
            id="phoneNumber"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </InputContainer>

        {/* Email Input */}
        <InputContainer>
          <LabelElement htmlFor="email">
            Email address<SpanEl>*</SpanEl>
          </LabelElement>
          <InputElement
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </InputContainer>

        {/* Password Input */}
        <InputContainer>
          <LabelElement htmlFor="password">
            Password<SpanEl>*</SpanEl>
          </LabelElement>
          <InputElement
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </InputContainer>

        {/* Company Name (Optional) */}
        <InputContainer>
          <LabelElement htmlFor="company">
            Company Name<SpanEl>*</SpanEl>
          </LabelElement>
          <InputElement
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Enter company name"
          />
        </InputContainer>

        {/* Are you an agency */}
        <InputContainer>
          <LabelText>
            Are you an Agency?<SpanEl>*</SpanEl>
          </LabelText>
          <RadioInputsDiv>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === 'yes'}
                onChange={handleChange}
              />
              <span>Yes</span>
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === 'no'}
                onChange={handleChange}
              />
              <span>No</span>
            </RadioLabel>
          </RadioInputsDiv>
        </InputContainer>
      </SignupCard>

      <SignupCard>
        <CreateButton
          onClick={handleSubmit}
          disabled={!isFormValid}
          isFormValid={isFormValid}
          type="button"
        >
          Create Account
        </CreateButton>
      </SignupCard>
    </SignupContainer>
  )
}
export default withRouter(Signup)
