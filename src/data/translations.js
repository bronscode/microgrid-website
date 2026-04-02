import { mapValues, merge } from "lodash-es";

const i18n = {
  en: {
    nav: {
      home: "home",
      features: "features",
      about: "about",
      contact: "Contact us",
    },
    test: {
      hi: "Hello",
    },
  },
  nl: {
    nav: {
      home: "home",
      features: "features",
      about: "about",
      contact: "Contact us",
    },
    test: {
      hi: "Hallo",
    },
  },
};

// Conversion to plugin format
const mapT = (t, l) => {
  if (typeof t === "object") {
    return mapValues(t, (x) => mapT(x, l));
  } else {
    return { [l]: t };
  }
};

const translations = {};

for (const k in i18n) {
  merge(translations, mapT(i18n[k], k));
}

export default translations;
