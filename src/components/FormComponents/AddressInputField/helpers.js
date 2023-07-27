/* eslint-disable camelcase */

export const mapSuggestionsToOptions = (data) => {
  const array = data.map((suggestion) => {
    const {
      place_id,
      description,
      structured_formatting: { main_text, secondary_text },
    } = suggestion;
    return {
      suggestion,
      main_text,
      secondary_text,
      description,
      place_id,
    };
  });

  return array;
};

export const findPropertyInPlaceComponents = ({ property, components }) => {
  const found = components.find((component) => {
    if (component.types.includes(property)) {
      return true;
    }
    return false;
  });

  return found?.short_name || '';
};
