import { createElement } from 'react';
import { isArray } from 'lodash-es';
import { v4 as uuidv4 } from 'uuid';

const createElementFromJson = (json, components) => {
  const { Resource } = components;
  const {
    id,
    // key,
    type,
    resource,
    props = {},
    children,
  } = json;

  if (!type) throw new Error('No type was passed!');
  if (!components?.[type]) throw new Error(`No component found for this type: ${type}`);

  if (resource) {
    return (
      <Resource
        // key={key ?? id}
        key={uuidv4()}
        json={json}
      />
    );
  }

  return createElement(
    components[type],
    {
      ...props,
      // key: key ?? id,
      id: id ?? uuidv4(),
      key: uuidv4(),
    },
    isArray(children) && children.length > 0
      ? children.map((child) => createElementFromJson(child, components))
      : children,
  );
};

export default createElementFromJson;
