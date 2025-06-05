import {FaCamera} from 'react-icons/fa'
import {
  SettingsContainer,
  SettingsCard,
  Heading,
  AccountCard,
  ProfileImg,
  IconDiv,
  ProfileCard,
  UserName,
  UserEmail,
  Description,
  HorizontalLine,
  Horizontal,
} from './styledComponents'

const Settings = () => (
  <SettingsContainer>
    <SettingsCard>
      <Heading>Account Settings</Heading>
      <AccountCard>
        <ProfileCard>
          <ProfileImg
            src="https://res.cloudinary.com/dwooeznfv/image/upload/v1749127534/Ellipse_114_2x_q8a51s.jpg"
            alt="User"
          />
          <IconDiv>
            <FaCamera size={12} />
          </IconDiv>
        </ProfileCard>
        <div>
          <UserName>Marry Doe</UserName>
          <UserEmail>Marry@Gmail.Com</UserEmail>
        </div>
      </AccountCard>
      <Description>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </Description>
      <HorizontalLine />
      <Horizontal />
    </SettingsCard>
  </SettingsContainer>
)
export default Settings