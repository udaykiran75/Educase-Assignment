
import styled from 'styled-components'

export const SettingsContainer = styled.div`
    min-height: 100vh;          
    background-color: #F7F8F9;   
    display: flex;               
    justify-content: center;     
    font-family: 'Rubik', sans-serif;
`
export const SettingsCard = styled.div`
    width: 100%;                     
    max-width: 448px;               
    border-radius: 6px;         
    box-shadow: 0 2px 2px 0 #bfbfbf; 
`
export const Heading = styled.h2`
    font-weight: lighter;         
    color: #1f2937;              
    margin-bottom: 16px;         
    background-color: #ffffff;   
    padding-top: 20px;        
    padding-bottom: 20px;
    padding-left: 22px;      
    padding-right: 22px;
    margin-top: 0px;
`
export const AccountCard = styled.div`
    display: flex;                
    align-items: flex-start;      
    gap: 16px;                    
    padding-bottom: 16px;         
    padding-left: 20px;        
    padding-right: 20px;
`
export const ProfileImg = styled.img`
    width: 80px;                
    height: 80px;               
    border-radius: 9999px;      
    object-fit: cover;          
`
export const IconDiv = styled.div`
    position: absolute; 
    bottom: 0;                                
    right: 0;                      
    background-color: #7c3aed;     
    border-radius: 9999px;          
    padding: 4px;
    padding-bottom: 2px;              
    color: #ffffff;                 
    font-size: 12px; 
`
export const ProfileCard = styled.div`
    position: relative;
`
export const UserName = styled.h3`
    font-size: 16px;             
    font-weight: 600;            
    color: #111827;
    line-height: 1.5px;
`
export const UserEmail = styled.p`
    font-size: 14px;    
    color: #4B5563; 
`
export const Description = styled.p`
    margin-top: 16px;            
    font-size: 16px;             
    color: #374151;              
    line-height: 1.625;          
    padding-left: 20px;      
    padding-right: 20px;
`
export const HorizontalLine = styled.hr`
    border-top: 1px dashed #D1D5DB;  
    margin-top: 24px;              
    margin-bottom: 24px; 
`
export const Horizontal = styled.hr`
    border-top: 1px dashed #D1D5DB;  
    margin-top: 60vh;                
    margin-bottom: 60vh;  
`
