/* eslint-disable max-len */
export const testMockResponse = {
  id: 'test',
  type: 'Form',
  formId: 1,
  clientId: 1,
  eventId: 1,
  children: [
    {
      id: 'page_wrapper',
      type: 'PagesWrapper',
      children: [
        {
          id: 'form_page_1',
          type: 'FormPage',
          children: [
            {
              id: 'page_title',
              type: 'Text',
              children: 'Components showcase flow',
              props: {
                variant: 'pageTitle',
              },
            },
            {
              id: 'page_title',
              type: 'Text',
              children: 'This is form info page.',
              props: {
                variant: 'heading1',
              },
            },
            {
              id: 'page_title',
              type: 'Text',
              children:
                'Must be first page, because moving on next page, we require user to be authenticated.',
              props: {
                variant: 'heading2',
              },
            },
          ],
        },
        {
          id: 'form_page_1',
          type: 'FormPage',
          children: [
            {
              type: 'AddressInputField',
              props: {
                valueId: 'address1',
              },
            },
            {
              id: 'page_title',
              type: 'Text',
              children: 'Components',
              props: {
                variant: 'pageTitle', // heading1, heading2, heading3, boldQuestion
              },
            },
            {
              type: 'HStack',
              props: {
                width: '100%',
                spacing: '24px',
              },
              children: [
                {
                  id: 'firstName',
                  type: 'InputField',
                  props: {
                    label: 'First Name',
                    placeholder: 'First Name',
                    valueId: 'firstName',
                    validationType: 'string',
                    validations: [
                      {
                        type: 'required',
                        params: ['First Name is required'],
                      },
                    ],
                  },
                },
                {
                  id: 'lastName',
                  type: 'InputField',
                  props: {
                    label: 'Last Name',
                    placeholder: 'Last Name',
                    valueId: 'lastName',
                    validationType: 'string',
                    validations: [
                      {
                        type: 'required',
                        params: ['Last Name is required'],
                      },
                    ],
                  },
                },
              ],
            },
            {
              type: 'HStack',
              props: {
                width: '100%',
                spacing: '32px',
              },
              children: [
                {
                  id: 'email',
                  type: 'InputField',
                  props: {
                    disabled: true,
                    label: 'E-mail',
                    placeholder: 'E-mail',
                    valueId: 'email',
                    validationType: 'string',
                    // validations: [
                    //   {
                    //     type: 'required',
                    //     params: ['E-mail is required'],
                    //   },
                    // ],
                  },
                },
                {
                  type: 'DateTimePicker',
                  props: {
                    label: 'Date of Birth',
                    placeholder: 'DD-MM-YYYY',
                    // column to write in database
                    valueId: 'birthDate',
                  },
                },
              ],
            },
            {
              id: 'IDENTITY',
              type: 'FileUpload',
              props: {
                label: "Upload Picture Drivers's License or Government ID",
                valueId: 'IDENTITY',
                documentType: 'driverLicense',
              },
            },
          ],
        },
      ],
    },
  ],
};
