import { useEffect } from 'react';
import {
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import MobileMenu from '../MobileMenu/MobileMenu';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
    if (isMdBreakpoint) onClose();
  }, [isMdBreakpoint, onClose]);

  return (
    <>
      {isMdBreakpoint && <DesktopHeader />}
      {!isMdBreakpoint && <MobileHeader onToggle={onToggle} />}
      {!isMdBreakpoint && (
      // sliding menu - home, account, schedule test
      <MobileMenu
        isOpen={isOpen}
        onToggle={onToggle}
      />
      )}
    </>
  );
};

export default Header;
