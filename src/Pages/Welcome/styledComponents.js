import styled from 'styled-components'

export const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    min-height: 100vh;
    background-color: #F7F8F9;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 40px;
    padding-bottom: 40px;
    font-family: 'Rubik', sans-serif;
`
export const WelcomeCard = styled.div`
    width: 100%;
    max-width: 384px;
    text-align: left;
`
export const WelHeading = styled.h1`
    font-size: 30px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 8px;
`
export const WelDescription = styled.p`
    font-size: 17px;
    color: #6B7280;
    margin-bottom: 24px;
    width: 66.666667%;
`
export const CreateButton = styled.button`
    width: 100%;
    background-color: #6C25FF;
    color: #ffffff;
    padding-top: 12px;         
    padding-bottom: 12px;
    border: none;      
    border-radius: 6px;        
    margin-bottom: 12px;       
    font-weight: 750;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        background-color: #6d28d9;
    }
`
export const LoginButton = styled.button`
    width: 100%;
    background-color: #e9d5ff;
    color: #5b21b6;
    font-weight: 750;
    padding-top: 12px;
    padding-bottom: 12px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        background-color: #d8b4fe;
    }
`