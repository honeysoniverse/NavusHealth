import {
  Text, Link, Box, HStack, VStack,
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-named-default
import { default as InputField } from './FormComponents/FormInput/FormInput';
// eslint-disable-next-line import/no-cycle
import FormPage from './FormComponents/FormPage/FormPage';
import PhoneInputField from './FormComponents/PhoneInputField/PhoneInputField';
import EmailInputField from './FormComponents/EmailInputField/EmailInputField';
import Dropdown from './FormComponents/Dropdown/Dropdown';
import DateTimePicker from './FormComponents/DateTimePicker/DateTimePicker';
import Form from './FormComponents/Form/Form';
import AnimatedBox from './FormComponents/AnimatedBox/AnimatedBox';
import PagesWrapper from './FormComponents/PagesWrapper/PagesWrapper';
import Signature from './FormComponents/Signature/Signature';
import FileUpload from './FormComponents/FileUpload/FileUpload';
import ExtendedImage from './FormComponents/ExtendedImage/ExtendedImage';
import Question from './FormComponents/Question/Question';
import InsurancePlanDropdown from './FormComponents/Dropdown/predefined/InsurancePlanDropdown/InsurancePlanDropdown';
import UsStateDropdown from './FormComponents/Dropdown/predefined/UsStateDropdown/UsStateDropdown';
import RaceDropdown from './FormComponents/Dropdown/predefined/RaceDropdown/RaceDropdown';
import CountryDropdown from './FormComponents/Dropdown/predefined/CountryDropdown/CountryDropdown';
import EthnicityDropdown from './FormComponents/Dropdown/predefined/EthnicityDropdown/EthnicityDropdown';
import AddressInputField from './FormComponents/AddressInputField/AddressInputField';
import Scheduling from './FormComponents/Scheduling/Scheduling';
import TravelDateTimePicker from './FormComponents/TravelDateTimePicker/TravelDateTimePicker'

export const inputComponents = {
  InputField,
  PhoneInputField,
  EmailInputField,
  Dropdown,
  DateTimePicker,
  Signature,
  FileUpload,
  Question,
  AddressInputField,
  TravelDateTimePicker,
};

export const components = {
  ...inputComponents,
  Form,
  PagesWrapper,
  FormPage,
  Text,
  Image: ExtendedImage,
  Link,
  AnimatedBox,
  Box,
  HStack,
  VStack,
  InsurancePlanDropdown,
  UsStateDropdown,
  RaceDropdown,
  EthnicityDropdown,
  Scheduling,
  CountryDropdown,
};
