export const components = [
  {
    type: 'InputField',
    label: 'First Name',
    placeholder: 'John',
    isRequired: true,
    // column to write in database
    valueId: 'firstName',
  },
  {
    type: 'EmailInputField',
    label: 'Email Address',
    placeholder: 'johndoe@gmail.com',
    // column to write in database
    valueId: 'email',
  },
  {
    type: 'PhoneNumberInputField',
    label: 'Phone Number',
    placeholder: '+3333333333',
    // column to write in database
    valueId: 'phoneNumber',
  },
  {
    type: 'DateInputField',
    label: 'Date of Birth',
    placeholder: 'DD-MM-YYYY',
    // column to write in database
    valueId: 'dateOfBirth',
  },
  {
    type: 'Text',
    value: 'This is some text description.',
    // values which could modify text look
    props: {
      alignText: 'center', // left, right
      fontSize: '16px', // font size
      fontWeight: 'bold', // bold, italic
      fontColor: '#ffff', // which ever color
    },
  },
  {
    type: 'FileUpload',
    label: 'Upload your TCNJ Paws ID',
    // column to write in database
    // not sure how this works
    valueId: 'fileUrlNjPawsId',
  },
  {
    type: 'Dropdown',
    label: 'State',
    values: [
      {
        id: 1,
        label: 'Alabama',
        code: 'AL',
        FIPS: '01',
      },
      {
        id: 2,
        label: 'Alaska',
        code: 'AK',
        FIPS: '02',
      },
    ],
    // column to write in database
    // not sure how this works
    valueId: 'state',
  },
  {
    // can be discussed
    type: 'Image',
    props: {
      src: '/logo.png', // or external url
      height: '100px',
      width: '200px',
    },
  },
];
