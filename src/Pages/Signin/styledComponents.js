
import styled from 'styled-components'

export const SigninDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #F7F8F9;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 40px;
    padding-bottom: 40px;
    font-family: 'Rubik', sans-serif; 
`
export const SigninCard = styled.div`
    width: 100%;
    max-width: 384px;
`
export const SigninTitle = styled.h1`
    font-size: 30px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 8px;
    width: 66.666667%;
`
export const SigninDescrip = styled.p`
    font-size: 18px;
    color: #6B7280;
    margin-bottom: 24px;
    width: 66.666667%;
`
export const InputContainer = styled.div`
    margin-bottom: 16px;
`
export const EmailLabel = styled.label`
    font-size: 15px;       
    font-weight: 500;
    color: #7c3aed;             
    position: relative;
    background-color: #f9fafb;
    padding-left: 8px;
    padding-right: 8px;
    top: 14px;
    left: 8px;
`
export const EmailInput = styled.input`
    margin-top: 4px;
    width: 100%;
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: 1px solid #D1D5DB;
    border-radius: 6px;
    outline: none;
    font-family: 'Rubik', sans-serif;
    background-color: transparent;
    
    &:focus{
        box-shadow: 0 0 0 2px #8b5cf6;
    }
`
export const PasswordLabel = styled.label`
    font-size: 15px;       
    font-weight: 500;
    color: #7c3aed;             
    position: relative;
    background-color: #f9fafb;
    padding-left: 8px;
    padding-right: 8px;
    top: 14px;
    left: 8px;
`
export const PasswordInput = styled.input`
    margin-top: 4px;
    width: 100%;
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: 1px solid #D1D5DB;
    border-radius: 6px;
    outline: none;
    font-family: 'Rubik', sans-serif;
    background-color: transparent;
    
    &:focus{
        box-shadow: 0 0 0 2px #8b5cf6;
    }
`
export const LoginButton = styled.button`
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    font-size: 15px;
    margin-top: 10px;
    transition: background-color 0.2s ease-in-out;
    color: #ffffff;

    background-color: ${({isFormValid}) =>
      isFormValid ? '#7c3aed' : '#cbcbcb'};
    cursor: ${({isFormValid}) => (isFormValid ? 'pointer' : 'not-allowed')};

    &:hover {
        background-color: ${({isFormValid}) =>
          isFormValid ? '#6d28d9' : '#d1d5db'};
    }
`
