import PropTypes from 'prop-types';
import { useBreakpointValue } from '@chakra-ui/react';
import { InlineWidget } from 'react-calendly';
import { useFormDataStore } from '../../../store/formData';
import { useUserStore } from '../../../store/user';

const Scheduling = ({ url }) => {
  const { user } = useUserStore();
  const { data } = useFormDataStore();
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });

  return (
    <InlineWidget
      url={url}
      styles={{
        // height: {base: '300px', sm: '350px', md: '600px', lg: '800px', xl: '900px'},
        // width: {base: '300px', sm: '350px', md: '600px', lg: '800px', xl: '900px'},
        height: isMdBreakpoint ? '800px' : '100vh',
        width: isMdBreakpoint ? '800px' : '100vw',
      }}
      prefill={{
        name: `${data.firstName} ${data.lastName}`,
        email: user.email,
        customAnswers: {
          a1: `${data.phoneNumber}`,
          a2: '2',
          a3: '3',
          a4: '4',
          a5: '5',
          a6: '6',
          a7: '7',
          a8: '8',
          a9: '9',
          a10: '0',
        },
        date: new Date(Date.now() + 86400000),
      }}
      pageSettings={{
        backgroundColor: 'ffffff',
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
        primaryColor: '00a2ff',
        textColor: '4d5055',
      }}
    />
  );
};

Scheduling.defaultProps = {
  url: '',
};

Scheduling.propTypes = {
  url: PropTypes.string,
};

export default Scheduling;
