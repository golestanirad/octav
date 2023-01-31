import _ from "lodash";

export const reduceObject = (
  object: object,
  neededValueTypes: string[] = ["string", "number"],
  neededKeys?: string[]
) => {
  return _.reduce(
    object,
    function (result, value, key) {
      if (neededValueTypes.includes(typeof value)) {
        if (!neededKeys) {
          result[key] = value;
        } else {
          if (neededKeys.includes(key)) {
            result[key] = value;
          }
        }
      }
      return result;
    },
    {} as any
  );
};

export const getObjectKeys = (o: {}) => {
  return Object.keys(o);
};

export const getObjectValues = (o: {}) => {
  return Object.values(o);
};

///// for the function below we could also use https://lodash.com/docs/4.17.15#startCase
//but I prefer to have more control on it by my own method
export const convertCamelCaseToTitle = (text: string) => {
  const result = text.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};
