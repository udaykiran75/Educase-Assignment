import styled from 'styled-components'

export const SignupContainer = styled.div`
    display: flex;              
    flex-direction: column;
    justify-content: space-between;   
    align-items: center;   
    padding-top: 40px;           
    padding-bottom: 40px;
    align-items: center;        
    min-height: 100vh;           
    background-color: #F7F8F9;   
    padding-left: 24px;          
    padding-right: 24px;
    font-family: 'Rubik', sans-serif;
`
export const SignupCard = styled.div`
    width: 100%;          
    max-width: 384px;    
`
export const SignupTitle = styled.h1`
    font-size: 30px;      
    font-weight: 700;
    color: #111827;           
    margin-bottom: 8px;       
    width: 60%;
`
export const InputContainer = styled.div`
    margin-bottom: 16px;
`
export const LabelElement = styled.label`
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
export const InputElement = styled.input`
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
export const SpanEl = styled.span`
    color: #ef4444;
`
export const LabelText = styled.p`
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 8px;
`
export const RadioInputsDiv = styled.div`
    display: flex;
    gap: 24px; 
`
export const RadioLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`
export const RadioInput = styled.input`
    accent-color: #7c3aed;
`
export const CreateButton = styled.button`
    width: 100%;
    padding: 13px 0; 
    font-weight: 600;
    border-radius: 6px; 
    font-size: 15px;
    transition: background-color 0.3s ease;
    color: white;
    border: none;
    cursor: pointer;

    background-color: ${props => (props.isFormValid ? '#7c3aed' : '#d1d5db')};
    cursor: ${props => (props.isFormValid ? 'pointer' : 'not-allowed')};

    &:hover {
        background-color: ${props =>
          props.isFormValid ? '#6d28d9' : '#d1d5db'};
    }

`