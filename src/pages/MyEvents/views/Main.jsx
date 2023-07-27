/* eslint-disable max-len */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQrcode } from 'react-icons/fa';
import {
  VStack, Text, Spinner, HStack, FormLabel, Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
  useDisclosure,
  Icon,
  Link,
} from '@chakra-ui/react';
import moment from 'moment';
import { useGetEvents } from '../hooks';
import { colors } from '../../../resources/colors';
import ProfileWrapper from '../../../components/FormComponents/PagesWrapper/ProfileWrapper';
import QRCodePreview from '../../Register/components/QRCodePreview';
import { useAppStateStore } from '../../../store/appState';
import { pathNames } from '../../../config/pathNames';
import { useUserStore } from '../../../store/user';

const Main = () => {
  const { setRedirectFromAuth } = useAppStateStore();
  const navigation = useNavigate();
  const { isEmailVerified } = useUserStore();
  const [qr, setQr] = useState();
  // const [reload, setReload] = useState(false);
  const { isLoading, events } = useGetEvents();
  const { onOpen, isOpen, onClose } = useDisclosure();
  // const buttonStyles = useStyleConfig('Button', { variant: 'ghost' });
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });
  const title = {
    base: '21', sm: '28', md: '32', lg: '32', xl: '36',
  };
  const head = {
    base: '12', sm: '14', md: '14', lg: '18', xl: '18',
  };
  const dataText = {
    base: '10', sm: '12', md: '12', lg: '14', xl: '14',
  };
  useEffect(() => {
    if (!isEmailVerified) {
      setRedirectFromAuth(window.location.pathname);
      navigation(pathNames.checkmail);
    }
  }, []);
//   useEffect(()=> {
//     isLoading &&
// {    const timer = setTimeout(()=>window.location.reload(), 5000);
// } 
//     return () => !isLoading && clearTimeout(timer)
//   },[isLoading])

  return (
    <ProfileWrapper>
      <VStack display="flex" alignItems="center" justifyContent="flex-end" width={isMdBreakpoint ? '60%' : '100%'} marginLeft={isMdBreakpoint ? '300px' : '0px'}>
        <Text
          fontSize={title}
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="700"
          textColor={colors.azureRadianceBlue}
          marginBottom="50px"
        >
          My Events
        </Text>
        { isLoading && <Spinner />}
        {!isLoading
          && (
            <>
              <HStack display="flex" justifyContent="space-between" alignItems="center" width="100%" marginLeft="300px" color={colors.codGray} marginBottom={5} bg={colors.altoGray} borderRadius="12px" padding="0px 8px">
                <FormLabel marginTop="6px" flex={1} textAlign="center" fontSize={head}>QR Code</FormLabel>
                <FormLabel flex={1} textAlign="center" fontSize={head}>Event Date</FormLabel>
                <FormLabel flex={1} textAlign="center" fontSize={head}>Event Time</FormLabel>
                <FormLabel flex={1} textAlign="center" fontSize={head}>Location/Link</FormLabel>
              </HStack>
              {events.map((event) => {
                const start = event.startTime ? event.startTime : null;
                const end = event.endTime ? event.endTime : null;
                // const time = `${dateFormat(start, isoTime)} - ${dateFormat(end, isoTime)}`
                return (
                  <HStack
                    key={event.id}
                    display="flex"
                    justifyContent="stretch"
                    alignItems="center"
                    width="100%"
                    borderBottom={`1px solid ${colors.gray}`}
                    marginBottom={3}
                    padding="0px 8px"
                  >
                    <Button variant="ghost" width="2em" flex={1} textAlign="left" fontSize={dataText} onClick={() => { onOpen(); setQr(event.registrationId); }}><Icon as={FaQrcode} color={colors.gray} boxSize="2em" /></Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay
                        bg="none"
                        backdropFilter="none"
                        backdropInvert="none"
                        backdropBlur="none"
                        dropShadow="none"
                      />
                      <ModalContent>
                        <ModalCloseButton />
                        <ModalBody display="flex" justifyContent="center" alignItems="center">
                          <QRCodePreview value={qr} />
                        </ModalBody>
                      </ModalContent>
                    </Modal>
                    <Text flex={1} textAlign="center" fontSize={dataText} style={{ color: colors.gray }}>
                      {/* eslint-disable react/jsx-one-expression-per-line */}
                      {/* {start ? dateFormat(start, 'dddd, mmmm dS yyyy') : ''} */}
                      {start ? moment(start).format('ddd, MMM Do YY') : 'Not Available'}
                    </Text>
                    <Text flex={1} textAlign="center" fontSize={dataText} style={{ color: colors.gray }}>
                      {/* eslint-disable react/jsx-one-expression-per-line */}
                      {start ? moment(start).format('hh:mm A') : 'Not Available'} - {end ? moment(end).format('hh:mm A') : ''}
                    </Text>
                    {event.meetingLink &&
                      <Link flex={1} textAlign="center" isExternal href={event.meetingLink ? event.meetingLink : ''} color={colors.gray} fontSize={dataText}>Click Here</Link>
                    }
                    {event.eventLocation &&
                      <Text flex={1} textAlign="center">{event.eventLocation}</Text>
                    }
                    {!event.meetingLink && !event.eventLocation &&
                      <Text flex={1} textAlign="center">No Info</Text>
                    }
                  </HStack>
                );
              })}
            </>
          )}
      </VStack>
    </ProfileWrapper>
  );
};

export default Main;
