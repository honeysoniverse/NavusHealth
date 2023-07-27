/* eslint-disable max-len */
export const mockFormResponseVersion2 = {
  id: 'qwert',
  type: 'Form',
  formId: 1,
  clientId: 1,
  eventId: 1,
  eventCode: "abc",
  orderRequired: "n",
  children: [
    {
      type: 'HStack',
      props: {
        width: '100%',
        spacing: '24px',
        justifyContent: 'space-evenly',
      },
      children: [
        {
          id: 'slp_logo',
          type: 'Image',
          props: {
            src: '/assets/loews_logo.png',
          },
        },
      ],
    },
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
              children: 'COVID Testing Registration',
              props: {
                variant: 'pageTitle',
              },
            },
            {
              id: 'text_1',
              type: 'Text',
              children: 'This form acts as your registration for your COVID test at new bridge Medical Center. Please have a valid form of identification available when completing the questions.',
              props: {
                variant: 'heading2',
              },
            },
            {
              id: 'text_2',
              type: 'Text',
              children: ' Once your form is submitted you will receive a QR code to your email account. Please use this code to check in for covid testing.',
              props: {
                variant: 'heading2',
              },
            },
            {
              id: 'text_3',
              type: 'Text',
              children: 'Need Help?',
              props: {
                variant: 'boldQuestion',
              },
            },
            {
              id: 'text_4',
              type: 'Text',
              children: 'Please direct all your questions to ',
              props: {
                variant: 'heading3',
              },
            },
            {
              id: 'linked_mali',
              type: 'Link',
              children: 'Customercare@navushealth.com ',
              props: {
                href: 'mailto:Customercare@navushealth.com ',
                variant: 'emailLink',
              },
            },
          ],
        },
        {
          id: 'form_page_2',
          type: 'FormPage',
          children: [
            {
              id: 'page_title_2',
              type: 'Text',
              children: 'Demographic Information',
              props: {
                variant: 'pageTitle',
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
                    
                    label: 'E-mail',
                    placeholder: 'E-mail',
                    valueId: 'email',
                    
                    validations: [
                      {
                        type: 'required',
                        params: ['E-mail is required'],
                      },
                    ],
                  },
                },
                {
                  type: 'DateTimePicker',
                  props: {
                    
                    label: 'Date of Birth',
                    placeholder: 'MM-DD-YYYY',
                    // column to write in database
                    valueId: 'birthDate',
                    // validationType: 'string',
                    validations: [
                      {
                        type: 'required',
                        params: ['DOB is required'],
                      },
                    ],
                  },
                },
              ],
            },
            {
              id: 'phoneinputfield',
              type: 'PhoneInputField',
              props: {
                label: 'Phone Number',
                valueId: 'phoneNumber',
                placeholder: 'Confirm your Phone Number',
                validationType: 'string',
                validations: [
                  {
                    type: 'required',
                    params: ['Phone number is required'],
                  },
                ],
              },
            },
            {
              id: 'addressInputField',
              type: 'AddressInputField',
              props: {
                
                label: 'Street Address 1',
                placeholder: 'Washington Street',
                valueId: 'addressInputField',
                
                validations: [
                  {
                    type: 'required',
                    params: ['Street address is required'],
                  },
                ],
              },
            },
            // {
            //   id: 'streetAddress2',
            //   type: 'InputField',
            //   props: {
                
            //     label: 'Street Address 2',
            //     placeholder: 'Washington Street',
            //     valueId: 'streetAddress2',
                
            //     validations: [
            //       {
            //         type: 'required',
            //         params: ['Street address is required'],
            //       },
            //     ],
            //   },
            // },
            // {
            //   type: 'HStack',
            //   props: {
            //     width: '100%',
            //     spacing: '12px',
            //   },
            //   children: [
            //     {
            //       id: 'city',
            //       type: 'InputField',
            //       props: {
                    
            //         label: 'City',
            //         placeholder: 'Your City',
            //         valueId: 'city',
                    
            //         validations: [
            //           {
            //             type: 'required',
            //             params: ['City is required'],
            //           },
            //         ],
            //       },
            //     },
            //     {
            //       id: 'state',
            //       type: 'UsStateDropdown',
            //       fontSize:
            //       {
            //         base: '8', sx: '9', sm: '10', md: '12', lg: '14', xl: '16',
            //       },
            //       props: {
                    
            //         validations: [
            //           {
            //             type: 'required',
            //             params: ['State is required'],
            //           },
            //         ],
            //       },
            //     },
            //     {
            //       id: 'zipCode',
            //       type: 'InputField',
            //       props: {
                    
            //         label: 'Zip Code',
            //         placeholder: '07102',
            //         valueId: 'zipCode',
                    
            //         validations: [
            //           {
            //             type: 'required',
            //             params: ['Zip Code is required'],
            //           },
            //           {
            //             type: 'min',
            //             params: [4, 'Zip code cannot be less than 4 characters'],
            //           },
            //           {
            //             type: 'max',
            //             params: [5, 'Zip code cannot be more than 5 characters'],
            //           },
            //         ],
            //       },
            //     },
            //   ],
            // },

            {
              type: 'HStack',
              props: {
                width: '100%',
                spacing: '12px',
              },
              children: [
                {
                  id: 'race',
                  type: 'RaceDropdown',
                },
                {
                  id: 'ethnicity',
                  type: 'EthnicityDropdown',
                },
              ],
            },
            {
              id: 'genderQuestion',
              type: 'Question',
              props: {
                question: 'Biological Gender',
                placeholder: 'Choose gender',
                valueId: 'gender',
                answers: [
                  {
                    id: '1',
                    label: 'Female',
                    value: 'female',
                    reference: 'pregnantQuestion',
                  },
                  {
                    id: '2',
                    label: 'Male',
                    value: 'male',
                  },
                  {
                    id: '0',
                    label: 'Other',
                    value: 'other',
                  },
                ],
                // validationType: 'radio',
                validations: [
                  {
                    type: 'required',
                    params: ['Question is required'],
                  },
                ],
              },
            },
            {
              type: 'VStack',
              props: {
                width: '100%',
                alignItems: 'flex-start',
              },
              children: [
                {
                  type: 'Text',
                  children: 'Identification validation:',
                  props: {
                    variant: 'heading2',
                  },
                },
                {
                  type: 'Text',
                  children: 'Picture of a government issued ID, e.g. Driver\'s License, Passport and/or State ID is required for testing services. For minors, please upload parent/guardian identification.',
                  props: {
                    variant: 'heading3',
                  },
                },
              ],
            },
            {
              id: 'pictureId',
              type: 'FileUpload',
              props: {
                label: 'Upload Picture Drivers\'s License or Government ID',
                valueId: 'pictureId',
                documentType: 'driverLicense',
              },
            },
          ],
        },
        {
          id: 'form_page_4',
          type: 'FormPage',
          children: [
            {
              id: 'page_title_3',
              type: 'Text',
              children: 'Insurance Information',
              props: {
                variant: 'pageTitle',
              },
            },
            {
              id: 'text_2',
              type: 'Text',
              children: 'Please provide the following information for the Primary Member/ Policy Holder on the Insurance account.',
              props: {
                variant: 'heading2',
              },
            },
            // {
            //   id: 'pregnantQuestion',
            //   type: 'Question',
            //   valueId: 'pregnant',
            //   props: {
            //     question: 'Are you pregnant ?',
            //     valueId: 'pregnant',
            //     answers: [
            //       {
            //         id: '1',
            //         label: 'Yes',
            //         value: true,
            //       },
            //       {
            //         id: '2',
            //         label: 'No',
            //         value: false,
            //       },
            //     ],
            //   },
            // },
            {
              id: 'insuranceQuestion',
              type: 'Question',
              props: {
                question: 'Do you have Insurance?',
                valueId: 'insurance',
                // 
                // validations: [
                //   {
                //     type: 'required',
                //     params: ['Insurance is required'],
                //   },
                // ],
                answers: [
                  {
                    id: '1',
                    label: 'Yes',
                    value: true,
                    reference: 'insuranceYes',
                  },
                  {
                    id: '2',
                    label: 'No',
                    value: false,
                    reference: 'insuranceNo',
                  },
                ],
              },
              children: [
                {
                  id: 'insuranceNo',
                  type: 'VStack',
                  props: {
                    width: '100%',
                    alignItems: 'flex-start',
                  },
                  children: [
                    {
                      id: 'socialSecurityNumber',
                      type: 'InputField',
                      props: {
                        label: 'Social Security Number',
                        placeholder: 'ex: 23',
                        valueId: 'socialSecurityNumber',
                        
                        // validations: [
                        //   {
                        //     type: 'required',
                        //     params: ['Social Security Number is required'],
                        //   },
                        // ],
                      },
                    },
                  ],
                },
                {
                  id: 'insuranceYes',
                  type: 'VStack',
                  props: {
                    width: '100%',
                    alignItems: 'flex-start',
                  },
                  children: [
                    {
                      type: 'InsurancePlanDropdown',
                      props: {
                        valueId: 'insuranceCompany',
                        label: 'Insurance Compgany',
                        placeholder: 'Select Insurance Company',
                      },
                    },
                    {
                      id: 'insurancePolicyHolder',
                      type: 'InputField',
                      props: {
                        label: 'Policy Holder Full Name',
                        placeholder: 'Policy Holder Full Name',
                        valueId: 'insurancePolicyHolder',
                        
                        validations: [
                          {
                            type: 'required',
                            params: ['Policy Holder Full Name is required'],
                          },
                        ],
                      },
                    },
                    {
                      type: 'DateTimePicker',
                      props: {
                        label: 'Policy Holder\'s DOB',
                        placeholder: 'DD-MM-YYYY',
                        // column to write in database
                        valueId: 'policyHolderDateOfBirth',
                      },
                    },
                    {
                      id: 'insuranceSubscriberId',
                      type: 'InputField',
                      props: {
                        label: 'Insurance Member/Subscriber ID',
                        placeholder: 'Insurance Member/Subscriber ID',
                        valueId: 'insuranceSubscriberId',
                        
                        validations: [
                          {
                            type: 'required',
                            params: ['Insurance Member/Subscriber ID is required'],
                          },
                        ],
                      },
                    },
                    {
                      id: 'insurancePolicyNumber',
                      type: 'InputField',
                      props: {
                        label: 'Insurance Policy Number',
                        placeholder: 'Insurance Policy Number',
                        valueId: 'insurancePolicyNumber',
                        
                        // validations: [
                        //   {
                        //     type: 'required',
                        //     params: ['Insurance Policy Number is required'],
                        //   },
                        // ],
                      },
                    },
                    {
                      id: 'insuranceCardFront',
                      type: 'FileUpload',
                      props: {
                        label: 'Upload Photo of the Front Side of your Insurance Card',
                        valueId: 'insuranceCardFront',
                        documentType: 'insuranceCard',
                      },
                    },
                    {
                      id: 'insuranceCardBack',
                      type: 'FileUpload',
                      props: {
                        label: 'Upload Photo of the Back Side of your Insurance Card',
                        valueId: 'insuranceCardBack',
                        documentType: 'insuranceCard',
                      },
                    },
                  ],
                },
              ],
            },
            {
              id: 'vaccinationQuestion',
              type: 'Question',
              props: {
                question: 'Vaccinated for COVID-19 ?',
                valueId: 'vaccination',
                answers: [
                  {
                    id: '1',
                    label: 'Yes',
                    value: true,
                    reference: 'vaccinationYes',
                  },
                  {
                    id: '2',
                    label: 'No',
                    value: false,
                  },
                ],
                // 
                // validations: [

                // ],
              },
              children: [
                {
                  id: 'vaccinationYes',
                  type: 'FileUpload',
                  props: {
                    label: 'Upload Vaccine Card',
                    valueId: 'vaccinationCard',
                    documentType: 'vaccineCard',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'form_page_5',
          type: 'FormPage',
          children: [
            {
              id: 'page_title_5',
              type: 'Text',
              children: 'Clinical Questions',
              props: {
                variant: 'pageTitle',
              },
            },
            {
              type: 'VStack',
              children: [
                {
                  type: 'HStack',
                  props: {
                    minWidth: {
                      base: '100%', sm: '100%', md: '600px', lg: '800px', xl: '800px',
                    },
                  },
                  children: [
                    {
                      id: 'firstCovidTestQuestion',
                      type: 'Question',
                      props: {
                        question: 'Is this your first COVID test?',
                        valueId: 'firstCovidTest',
                        answers: [
                          {
                            id: '1',
                            label: 'Yes',
                            value: true,
                          },
                          {
                            id: '2',
                            label: 'No',
                            value: false,
                          },
                        ],
                      },
                    },
                    {
                      id: 'symptomsQuestion',
                      type: 'Question',
                      props: {
                        question: 'Are you symptomatic, e.g.flu like symptoms?',
                        valueId: 'symptomsQuestion',
                        answers: [
                          {
                            id: '1',
                            label: 'Yes',
                            value: true,
                          },
                          {
                            id: '2',
                            label: 'No',
                            value: false,
                          },
                        ],
                      },
                    },
                    {
                      id: 'pregnantQuestion',
                      type: 'Question',
                      valueId: 'pregnant',
                      props: {
                        question: 'Are you pregnant ?',
                        valueId: 'pregnant',
                        answers: [
                          {
                            id: '1',
                            label: 'Yes',
                            value: true,
                          },
                          {
                            id: '2',
                            label: 'No',
                            value: false,
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'form_page_6',
          type: 'FormPage',
          children: [
            {
              id: 'page_title_6',
              type: 'Text',
              children: 'Scheduling',
              props: {
                variant: 'pageTitle',
              },
            },
            {
              id: 'scheduling',
              type: 'Scheduling',
            },
          ],
        },
        {
          id: 'form_page_7',
          type: 'FormPage',
          children: [
            {
              id: 'page_title_7',
              type: 'Text',
              children: 'Consent',
              props: {
                variant: 'pageTitle',
              },
            },
            {
              type: 'VStack',
              props: {

                alignItems: 'flex-start',
              },
              children: [
                {
                  type: 'Text',
                  children: 'Authorization for disclosure of protected health information',
                  props: {
                    variant: 'heading1',
                    align: 'left',
                  },
                },
                {
                  type: 'Text',
                  children: 'I understand that by using the same email address as a known person or family member I consent to and authorize that known person access to my personal health information described below. I hereby authorize Navus Health, LLC (“Provider”) to use and disclose my Protected Health Information[1], results of my SARS-CoV-2 (“COVID-19”) test as designated below, to: ',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: 'Recipient(s):',
                  props: {
                    variant: 'heading2',
                  },
                },
                {
                  type: 'Text',
                  children: '-  Bergen New Bridge Medical Center., at 230 East Ridgewood Ave. Paramus, NJ 07652 ("New Bridge") ',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: `The following Protected Health Information about me may be disclosed to the Recipient:\n\n
                  All Laboratory Reports and related information from COVID-19 testing performed by Provider on behalf of Sponsors.\n\n
                  The purpose of this Authorization is for my in-person attendance at, and participation in, events sponsored by New Bridge.\n\n
                  I understand that once Provider discloses my COVID-19 test results to New Bridge, federal and state privacy laws may no longer protect such information, and the entity receiving such information may re-disclose it.\n\n
                  I understand that the terms of this Authorization are governed by the Health Insurance Portability and Accountability Act of 1996, as amended, and its implementing regulations (“HIPAA”). I understand that I have the right to revoke this Authorization at any time prior to the disclosure of my Protected Health Information to the Recipient identiﬁed above. I may revoke this Authorization by providing written notice to New Bridge or the Provider at the address or email address listed above that includes my name, address, telephone number, the date of this Authorization, the date of the revocation, and my signature.\n\n
                  I understand that I must sign this Authorization in order to receive COVID-19 testing from Provider, as the Lab Report is being created for the purpose of disclosure to the Recipient listed above.\n\n
                  I understand that the Protected Health Information used or disclosed pursuant to this Authorization may be subject to redisclosure by the Recipient listed above, in which case it will no longer be protected by HIPAA. This Authorization expires upon Provider’s disclosure of the Protected Health Information speciﬁed above, or on the date that is one year following the date of this Authorization, whichever occurs ﬁrst. I hereby acknowledge that I have been given a copy of this Authorization for my records.
                  [1] “Protected Health Information” is deﬁned at 45 C.F.R. 160.103, and generally includes any information, including genetic information, created or received by a health care provider or a health plan that relates to an individual’s past, present, or future physical or mental health or condition, or to the past, present or future provision of or payment for health care rendered to an individual.
                  `,
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: 'Patient Acknowledgement & Consent to COVID−19 testing',
                  props: {
                    variant: 'heading2',
                  },
                },
                {
                  type: 'Text',
                  children: '1.  I voluntarily consent to the collection and submission of my specimen to Bergen New Bridge Medical Center for purposes of a COVID−19 diagnostic test (“COVID−19 Test”).',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: '2. The specimen being submitted for a COVID−19 Test is my own. I have not adulterated the specimen in any way.',
                  props: {
                    variant: 'heading3',
                  },

                },
                {
                  type: 'Text',
                  children: '3.  I acknowledge that my specimen is being collected pursuant to the terms of a standing order issued by Gian Varbaro, (the “Ordering Practitioner”). The Ordering Practitioner may be contacted as follows:',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: 'Gian Varbaro, 201.967.4000 Ext. 54411, 30 East Ridgewood Avenue, Paramus, NJ 07652',
                  props: {
                    variant: 'heading2',
                  },
                },
                {
                  type: 'Text',
                  children: 'NPI: 1952463101',
                  props: {
                    variant: 'heading2',
                  },
                },
                {
                  type: 'Text',
                  children: '4.  I acknowledge that the results of the COVID−19 Test performed on my specimen will be disclosed to the Ordering Practitioner to the extent required by law.',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: '5.  I understand that the COVID−19 Test detects if I may have SARS-CoV-2 at the time of the test. It does not test for immunity or if I have had the SARS-CoV-2 virus in the past.',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: '6.  I understand that, as with any medical test, there is the potential for false positive or false negative results from a COVID−19 Test.',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: '7.  I assume complete and full responsibility to take appropriate action with regard to my COVID−19 Test results.',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: '8.  I understand that Navus Health, LLC (“Navus”) is not a health care provider, and is assisting the Lab in collecting the specimen from me for COVID−19 Testing and in reporting my COVID-19 Test results.',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: '9.  Notice of Privacy Practices: The Lab’s Notice of Privacy Practices describes how it may use and disclose your protected health information (as deﬁned under the Health Insurance Portability and Accountability Act of 1996, as amended, and its implementing regulations) for purposes that are permitted or required by law. To review a copy of the Lab’s Notice of Privacy Practices please click [here]. I acknowledge that the Lab has provided me with a copy of its Notice of Privacy Practices.',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: '10.  Release of Navus and the Lab: To the fullest extent permitted by law, I hereby release, discharge and hold harmless, Navus and the Lab, including, without limitation, any its respective members, shareholders, directors, managers, oﬃcers, employees, representatives and agents from any and all claims, liabilities, losses and damages, of whatever kind or nature, arising out of or in connection with any act or omission relating to the collection, submission and performance of my COVID-19 Test or the disclosure of my COVID-19 Test results as permitted by law.',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: '11.  I acknowledge that the Lab may disclose my COVID−19 Test results and related information to county, state, and local governmental entities as required by law.',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: '*If the patient is a minor, the above signature must be from the patient’s personal representative.',
                  props: {
                    variant: 'heading3',
                  },
                },
                {
                  type: 'Text',
                  children: 'Release and waiver of liability',
                  props: {
                    variant: 'heading2',
                  },
                },
                {
                  type: 'Text',
                  children: 'I hereby waive and forever release Navus Health, New Bridge and the Personnel, and their respective owners, affiliates, and employees, staff, representatives and agents of each from any and all claims or causes of action I or my heirs or assigns now have or may have in the future relating to COVID testing services.',
                  props: {
                    variant: 'heading3',
                  },
                },
              ],
            },
            {
              id: 'signature',
              type: 'Signature',
              props: {
                label: 'Please sign agreement',
                // column to write in database
                valueId: 'signature',
              },
            },

          ],
        },
      ],
    },
    {
      type: 'HStack',
      props: {
        minWidth:
        {
          base: '100%', sm: '100%', md: '600px', lg: '800px', xl: '800px',
        },
      },
      children: [
        {
          id: 'page_title_3',
          type: 'Text',
          children: 'Powered by NavusHealth',
          props: {
            color: 'white',
          },
        },
      ],
    },
  ],
};
