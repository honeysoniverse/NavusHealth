import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  VStack, Text, Box, Image, Button,
} from '@chakra-ui/react';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import { colors } from '../../../resources/colors';
import { useFetchUser } from '../../MyProfile/hooks';
import { pathNames } from '../../../config/pathNames';
import { useUserStore } from '../../../store/user';

const Main = () => {
  const navigate = useNavigate();
  const {
    setIsEmailVerified,
  } = useUserStore();
  const { user, isUserDataLoading } =  useFetchUser();
  useEffect(()=>{
    if(user.email_verified === true) {setIsEmailVerified(true); navigate(pathNames.myprofile)}
  },[])
const handleOnClick = () => {
  window.location.reload();}
// useEffect(()=> user.email_verified === true && navigate(`${pathNames.register}/myprofile`),[])

return(
    <ContentWrapper>
      <VStack alignItems="center" marginTop={10}>
         <Box
         data-test-id="1729dc44"
         background={colors.altoGray}
         padding={8}
         rounded={12}
         minWidth="sm"
         display="flex"
         justifyContent="center"
         alignItems="center"
         flexDirection="column"
       >
         <Image src="/assets/logo.png" style={{width:'200px', textAlign:"center", marginBottom:"16px"}}/>
         <Text padding={1}>Your account has not yet been verified.</Text>
         <Text padding={1}>Please check your inbox for verification email.</Text>
         <Text padding={1} marginBottom="16px">After verifying, Click here</Text>
         <Button isLoading={isUserDataLoading} onClick={handleOnClick}>Click Here</Button>

       </Box>
      </VStack>
    </ContentWrapper>
  );}

export default Main;
