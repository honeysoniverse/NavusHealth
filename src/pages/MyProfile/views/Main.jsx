// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   VStack, Text, Spinner, HStack, Input, FormLabel, FormControl, useBreakpointValue,
// } from '@chakra-ui/react';
// import { useFetchUser } from '../hooks';
// import { colors } from '../../../resources/colors';
// import ProfileWrapper from '../../../components/FormComponents/PagesWrapper/ProfileWrapper';
// import PhoneInputField from '../../../components/FormComponents/PhoneInputField/PhoneInputField';
// import { useUserStore } from '../../../store/user';
// import { pathNames } from '../../../config/pathNames';
// import { useAppStateStore } from '../../../store/appState';

// const Main = () => {
//   const isMdBreakpoint = useBreakpointValue({ base: false, md: true });
//   const { user, isLoading } = useFetchUser();
//   console.log(user)
//   const { setRedirectFromAuth } = useAppStateStore();
//   const navigation = useNavigate();
//   const { isEmailVerified } = useUserStore();
//   const title = {
//     base: '24', sm: '32', md: '36', lg: '42', xl: '44',
//   };
//   useEffect(() => {
//     if (!isEmailVerified) {
//       setRedirectFromAuth(window.location.pathname);
//       navigation(pathNames.checkmail);
//     }
//   }, []);

//   return (
//     <ProfileWrapper display="flex" alignItems="center" justifyContent="center" width="100%" marginLeft="300px">
//       <Text
//         fontSize={title}
//         flex="1"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         marginLeft={isMdBreakpoint ? '300px' : '0px'}
//         fontWeight="700"
//         textColor={colors.azureRadianceBlue}
//         marginBottom={isMdBreakpoint ? '200px' : '150px'}
//       >
//         My Profile
//       </Text>
//       {isLoading && <Spinner />}
//       {!isLoading
//         && (
//           <>
//             {/* eslint-disable-next-line max-len */}
//             <VStack display="flex" alignItems="center" justifyContent="flex-end" width={isMdBreakpoint ? '60%' : '100%'} marginTop="200px">
//               {/* eslint-disable-next-line max-len */}
//               <FormControl height="95px" display="flex" justifyContent="flex-end" alignitems="center" flexDirection="column" marginLeft={isMdBreakpoint ? '300px' : '0px'} marginTop="60px">
//                 <HStack display="flex" justifyContent="flex-start" alignitems="center" flexDirection="row">
//                   <FormLabel
//                     fontSize={
//                       {
//                         base: '8', sx: '9', sm: '10', md: '12', lg: '14', xl: '16',
//                       }
//                     }
//                     fontWeight="500"
//                     lineHeight="14px"
//                     textColor={colors.codGray}
//                     flex="1"
//                   >
//                     First Name
//                   </FormLabel>
//                   <FormLabel
//                     fontSize={
//                       {
//                         base: '8', sx: '9', sm: '10', md: '12', lg: '14', xl: '16',
//                       }
//                     }
//                     fontWeight="500"
//                     lineHeight="14px"
//                     textColor={colors.codGray}
//                     flex="1"
//                   >
//                     Last Name
//                   </FormLabel>
//                 </HStack>
//                 <HStack marginBottom={3}>
//                   <Input
//                     value={user.firstName}
//                     borderWidth="1px"
//                     borderRadius={12}
//                     height="50px"
//                     bg={colors.alabasterGray}
//                     textColor={colors.black}
//                     readOnly
//                   />
//                   <Input
//                     value={user.lastName}
//                     borderWidth="1px"
//                     borderRadius={12}
//                     height="50px"
//                     bg={colors.alabasterGray}
//                     textColor={colors.black}
//                     readOnly
//                   />
//                 </HStack>
//                 <HStack display="flex" justifyContent="flex-start" alignitems="center" flexDirection="row">
//                   <FormLabel
//                     fontSize={
//                       {
//                         base: '8', sx: '9', sm: '10', md: '12', lg: '14', xl: '16',
//                       }
//                     }
//                     fontWeight="500"
//                     lineHeight="14px"
//                     textColor={colors.codGray}
//                     flex="1"
//                   >
//                     Email
//                   </FormLabel>
//                   <FormLabel
//                     fontSize={
//                       {
//                         base: '8', sx: '9', sm: '10', md: '12', lg: '14', xl: '16',
//                       }
//                     }
//                     fontWeight="500"
//                     lineHeight="14px"
//                     textColor={colors.codGray}
//                     flex="1"
//                   >
//                     Date of Birth
//                   </FormLabel>
//                 </HStack>
//                 <HStack>
//                   <Input
//                     readOnly
//                     value={user.email}
//                     borderWidth="1px"
//                     borderRadius={12}
//                     height="50px"
//                     bg={colors.alabasterGray}
//                     textColor={colors.black}
//                   />
//                   <Input
//                     value={user.birthday}
//                     readOnly
//                     borderWidth="1px"
//                     borderRadius={12}
//                     height="50px"
//                     bg={colors.alabasterGray}
//                     textColor={colors.black}
//                   />
//                 </HStack>
//                 <FormLabel
//                   fontSize={
//                     {
//                       base: '8', sx: '9', sm: '10', md: '12', lg: '14', xl: '16',
//                     }
//                   }
//                   fontWeight="500"
//                   lineHeight="14px"
//                   textColor={colors.codGray}
//                   flex="1"
//                   marginTop={3}
//                 >
//                   Phone Number
//                 </FormLabel>
//                 <PhoneInputField />
//               </FormControl>
//             </VStack>
//           </>
//         )}
//     </ProfileWrapper>
//   );
// };

// export default Main;
