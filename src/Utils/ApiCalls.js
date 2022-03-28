import envVariables from "../EnvVariables";

export default {
  /* eslint import/no-anonymous-default-export: off */
  getConsultations: async () => {
    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/api/consultations`);
    const data = await response.json(); 
    return data.data;
  },

  getConstacts: async () => {
    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/api/contacts`);
    const data = await response.json();
    return {
      email: data.data[0].attributes.email,
      phone: data.data[0].attributes.phone
    };
  },

  getAboutMe: async () => {
    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/api/about-mes?populate=*`);
    const data = await response.json();
    return {
      aboutMe:data.data[0].attributes.about_me,
      pictureUrl: envVariables.BACKEND_BASE_URL + data.data[0].attributes.picture.data.attributes.url
    };
  }
};