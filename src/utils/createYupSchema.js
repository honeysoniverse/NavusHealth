import * as yup from 'yup';

const extractInputFields = (children, componentTypes, initValues = []) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < children.length; i++) {
    // check if current child is input field
    if (componentTypes?.[children[i].type]) {
      const { valueId, validationType, validations } = children[i].props;
      // eslint-disable-next-line no-param-reassign
      initValues.push({
        valueId, validationType, validations,
      });
    }
    // if children has children
    if (children[i].children) {
      extractInputFields(children[i].children, componentTypes, initValues);
    }
    // if not just i++ for next child
  }

  return initValues;
};

const initializeSchema = (schema, config) => {
  const { valueId, validationType, validations = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });
  // eslint-disable-next-line no-param-reassign
  schema[valueId] = validator;
  return schema;
};

export const createYupSchema = (page, components) => {
  const { children } = page;
  const inputFields = extractInputFields(children, components);
  const initValues = {};
  inputFields.forEach((item) => { initValues[item.valueId] = ''; });
  const yepSchema = inputFields.reduce(initializeSchema, {});
  const validateSchema = yup.object().shape(yepSchema);

  return validateSchema;
};

export const createYupSchemas = (pages, components) => {
  const schemas = [];

  pages.forEach((page) => {
    const schema = createYupSchema(page, components);
    schemas.push(schema);
  });

  return schemas;
};
