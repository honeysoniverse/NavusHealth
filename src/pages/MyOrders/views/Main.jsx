/* eslint-disable max-len */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  VStack, Text, Spinner, useBreakpointValue, Image, useStyleConfig, Box, HStack, Button, Icon, Collapse, FormLabel, Link,

} from '@chakra-ui/react';
import moment from 'moment';
import { FaAngleDown } from 'react-icons/fa';
import { useFetchOrders } from '../hooks';
import { useUserStore } from '../../../store/user';
import { pathNames } from '../../../config/pathNames';
import { useAppStateStore } from '../../../store/appState';
import ProfileWrapper from '../../../components/FormComponents/PagesWrapper/ProfileWrapper';
import { colors } from '../../../resources/colors';
import { images } from '../../../resources/assets';

const Main = () => {
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });
  const { isLoading, orders } = useFetchOrders();
  const { setRedirectFromAuth } = useAppStateStore();
  const navigation = useNavigate();
  const { isEmailVerified } = useUserStore();
  useEffect(() => {
    if (!isEmailVerified) {
      setRedirectFromAuth(window.location.pathname);
      navigation(pathNames.checkmail);
    }

  }, []);
  const title = {
    base: '21', sm: '28', md: '32', lg: '32', xl: '36',
  };
  const head = {
    base: '12', sm: '12', md: '14', lg: '14', xl: '16',
  };
  const dataText = {
    base: '10', sm: '10', md: '12', lg: '12', xl: '14',
  };
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  const buttonStyles = useStyleConfig('Button', { variant: 'ghost' });
  const buttonStyles2 = useStyleConfig('Button', { variant: 'verification' });
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
          marginBottom="30px"
        >
          My Orders
        </Text>
        {isLoading && <Spinner />}
        {!isLoading && (
          <>{orders.length < 1 && <Box
            width={isMdBreakpoint ? "400px" : "80vw"}
            height={isMdBreakpoint ? "200px" : "100px"}
            borderWidth="1px"
            borderRadius="10px"
            borderColor={colors.altoGray}
            padding="2px"
            background={colors.altoGray}
            display="flex"
            alignItems="center"
            justifyContent="center"
          ><Text fontSize={head} fontWeight="600">No orders found</Text></Box>}
            {isMdBreakpoint && orders.map((order) => {
              return <Collapse startingHeight="200px" in={show} isOpen={handleToggle} style={{ marginBottom: "50px" }}>
                <Box
                  width={isMdBreakpoint ? "800px" : "100vw"}
                  height={isMdBreakpoint ? "400px" : "150px"}
                  borderWidth="1px"
                  borderRadius="10px"
                  borderColor={colors.altoGray}
                  padding="2px"
                  background={colors.white}
                >
                  <HStack marginTop="50px" marginBottom="50px" display="flex"
                    justifyContent="space-around"
                    alignItems="center">
                    <Image style={{ borderRadius: "12px" }} fallback={<Spinner />} alt="product_img" width={isMdBreakpoint ? "100px" : "50px"} src={order.details.testProduct.productImage} />
                    <VStack display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                      <FormLabel fontSize={head}>
                        Product
                      </FormLabel>
                      <Text fontSize={dataText} color={colors.azureRadianceBlue}>
                        {order.details.testProduct.productName}
                      </Text>
                    </VStack>
                    <VStack display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                      <FormLabel fontSize={head}>
                        Order Date
                      </FormLabel>
                      <Text fontSize={dataText} color={colors.azureRadianceBlue}>
                        {moment(order.details.createdAt).format('ddd, MMM Do YY')}
                      </Text>
                    </VStack>
                    <VStack display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                      <FormLabel fontSize={head}>
                        Status
                      </FormLabel>
                      <Text fontSize={dataText} color={colors.azureRadianceBlue}>
                        {order.orderStatusName}
                      </Text>
                    </VStack>
                    <Button __css={buttonStyles}
                      onClick={handleToggle}>
                      <Icon as={FaAngleDown} color={colors.codGray} />
                    </Button>
                  </HStack>
                  <div style={{ marginLeft: "5%", marginTop: "50px", marginBottom: "50px", height: "1px", width: "90%", background: colors.altoGray }} />
                  <HStack display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
                    <HStack display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" flex={1}>
                      <VStack fontSize={head} fontWeight="500" color={colors.gray} height="120px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around">
                        <Text>
                          1.
                        </Text>
                        <Text>
                          2.
                        </Text>
                        <Text>
                          3.
                        </Text>
                      </VStack>
                      <VStack fontSize={head} fontWeight="500" color={colors.gray} height="120px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around">
                        <Image src={images.testOrdered} />
                        <Image src={images.labProcessing} />
                        <Image src={images.reportReady} />

                      </VStack>
                      <VStack fontSize={head} fontWeight="500" color={colors.gray} height="120px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around">
                        <Text>
                          Test Ordered
                        </Text>
                        <Text>
                          Lab Processing
                        </Text>
                        <Text>
                          Report Ready
                        </Text>
                      </VStack>
                    </HStack>
                    <HStack display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" flex={1}>
                      <VStack fontSize={head} fontWeight="500" color={colors.gray} height="120px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around">
                        <Image src={order.orderStatusName === 'Test Ordered' || 'Lab Processing' || 'Result Ready' ? images.checkIcon : ''} />
                        <Image src={order.orderStatusName === 'Lab Processing' || 'Result Ready' ? images.checkIcon : ''} />
                        <Image src={order.orderStatusName === 'Report Ready' ? images.checkIcon : ''} />
                      </VStack>
                    </HStack>
                    <HStack display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" flex={1}>
                      {order.orderStatusName === 'Report Ready' && <VStack fontSize={head} fontWeight="500" color={colors.gray} height="120px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around">
                        <Text>
                          What's next
                        </Text>
                        <Link href={order.details.clinicalDocument.clinicalDocumentFilePath}>
                          <Button __css={buttonStyles2} fontSize={dataText} style={{ width: "200px" }}>
                            Download Results
                          </Button>
                        </Link>
                      </VStack>}
                    </HStack>
                  </HStack>
                </Box>
              </Collapse>
            })}
            {!isMdBreakpoint && orders.map((order) => {
              return <Collapse startingHeight="100px" in={show} isOpen={handleToggle} style={{ marginBottom: "30px" }}>
                <Box
                  width={isMdBreakpoint ? "800px" : "100vw"}
                  height={isMdBreakpoint ? "400px" : "350px"}
                  borderWidth="1px"
                  borderRadius="10px"
                  borderColor={colors.altoGray}
                  padding="2px"
                  background={colors.white}
                >
                  <HStack marginTop="25px" display="flex"
                    justifyContent="space-around"
                    alignItems="center">
                    <Image style={{ borderRadius: "12px" }} fallback={<Spinner />} alt="product_img" width={isMdBreakpoint ? "100px" : "50px"} src={order.details.testProduct.productImage} />
                    <VStack display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                      <Text fontSize={head} fontWeight="600" color={colors.codGray}>
                        {order.details.testProduct.productName}
                      </Text>
                      <Text fontSize={dataText} color={colors.gray}>
                        <span textColor={colors.codGray}>Ordered:</span> {moment(order.details.createdAt).format('ddd, MMM Do YY')}
                      </Text>
                    </VStack>
                    <VStack display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                      <Text fontSize={head} fontWeight="600" color={colors.codGray}>
                        Status
                      </Text>
                      <Text fontSize={dataText} fontWeight="600" color={colors.azureRadianceBlue}>
                        {order.orderStatusName}
                      </Text>
                    </VStack>
                    <Button __css={buttonStyles}
                      onClick={handleToggle}>
                      <Icon as={FaAngleDown} color={colors.codGray} />
                    </Button>
                  </HStack>
                  <div style={{ marginLeft: "5%", marginTop: "25px", marginBottom: "25px", height: "1px", width: "90%", background: colors.altoGray }} />

                  <HStack display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
                    <HStack display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" flex={1}>
                      <VStack fontSize={head} fontWeight="500" color={colors.gray} height="120px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around">
                        <Text>
                          1.
                        </Text>
                        <Text>
                          2.
                        </Text>
                        <Text>
                          3.
                        </Text>
                      </VStack>
                      <VStack fontSize={head} fontWeight="500" color={colors.gray} height="120px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around">
                        <Image src={images.testOrdered} />
                        <Image src={images.labProcessing} />
                        <Image src={images.reportReady} />

                      </VStack>
                      <VStack fontSize={head} fontWeight="500" color={colors.gray} height="120px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around">
                        <Text>
                          Test Ordered
                        </Text>
                        <Text>
                          Lab Processing
                        </Text>
                        <Text>
                          Report Ready
                        </Text>
                      </VStack>
                    </HStack>
                    <HStack display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" flex={1}>
                      <VStack fontSize={head} fontWeight="500" color={colors.gray} height="120px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around">
                        <Image src={order.orderStatusName === 'Test Ordered' || 'Lab Processing' || 'Result Ready' ? images.checkIcon : ''} />
                        <Image src={order.orderStatusName === 'Lab Processing' || 'Result Ready' ? images.checkIcon : ''} />
                        <Image src={order.orderStatusName === 'Report Ready' ? images.checkIcon : ''} />
                      </VStack>
                    </HStack>

                  </HStack>
                  {order.orderStatusName === 'Report Ready' && <VStack fontSize={head} fontWeight="600" color={colors.gray} marginTop="25px" height="60px" display="flex" flexDirection="column" alignItems="center" justifyContent="space-around">
                    <Text>
                      What's next
                    </Text>
                    <Link href={order.details.clinicalDocument.clinicalDocumentFilePath}>
                      <Button __css={buttonStyles2} fontSize={dataText} style={{ width: "200px" }}>
                        Download Results
                      </Button>
                    </Link>
                  </VStack>}
                </Box>
              </Collapse>
            })}

          </>
        )}
      </VStack>
    </ProfileWrapper>
  );
};

export default Main;
