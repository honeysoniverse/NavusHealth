import { components } from '../components';
import createElementFromJson from '../utils/createElementFromJson';

export const useCreateElementFromJson = () => (json) => createElementFromJson(json, components);
