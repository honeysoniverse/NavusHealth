/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
export const extractFormPagesFromArray = (array) => {
  const pages = array.filter((child) => child.type === 'FormPage');
  return pages;
};

export const cleanFormForTemplate = (form, indexOfTargetPage, pagesWrapperIndex, wrapperChildCounts) => {
  // copy form to modify
  const retVal = JSON.parse(JSON.stringify(form));
  // clean pageWrapperArray
  retVal.children[pagesWrapperIndex].children = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < wrapperChildCounts; i++) {
    // if page wrapper child is not page than it is some other component which we keep for rendering
    if (form.children[pagesWrapperIndex].children[i].type !== 'FormPage') {
      retVal.children[pagesWrapperIndex].children.push(form.children[pagesWrapperIndex].children[i]);

      // else if it is a FormPage with index of page we are looking for, keep it
    } else if (i === indexOfTargetPage) {
      retVal.children[pagesWrapperIndex].children.push(form.children[pagesWrapperIndex].children[i]);
    }
  }
  return retVal;
};

// eslint-disable-next-line no-unused-vars
export const buildPageTemplates = (json) => {
  const pagesWrapperIndex = json.children.map((child) => child.type).indexOf('PagesWrapper');
  const wrapperChildCounts = json.children[pagesWrapperIndex].children.length;
  const templates = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < wrapperChildCounts; i++) {
    if (json.children[pagesWrapperIndex].children[i].type === 'FormPage') {
      // 1. pass whole form
      // 2. pass array index of target page
      // 3. pass index of wrapper in its array which could contain some other objects such as image
      // 4. pass wrapperChildCounts so we don't need to search for it since we have it
      const template = cleanFormForTemplate(json, i, pagesWrapperIndex, wrapperChildCounts);
      templates.push(template);
    }
  }

  return templates;
};

export const buildPagesFromJson = (json) => {
  const { children, type } = json;

  if (type !== 'Form') throw new Error('Root component must be type of: Form');

  const pageWrapper = children.filter((child) => child.type === 'PagesWrapper');

  if (pageWrapper.length === 0) throw new Error('Your Form component must contain one child type of: PagesWrapper');
  if (pageWrapper.length > 1) throw new Error('Your Form component has more than one child type of: PagesWrapper. Your Form component must contain only ONE component type of: PagesWrapper');

  const templates = buildPageTemplates(json);

  return templates;
};
