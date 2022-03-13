import envVariables from "../EnvVariables";

export default {
  /* eslint import/no-anonymous-default-export: off */
  getConsultations: async () => {
    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/api/consultations`, {
      headers: new Headers({
        'Authorization': `Bearer ${envVariables.API_TOKEN}`
    })});
    const data = await response.json(); 
    return data.data;
  },

  getConstacts: async () => {
    const response = await fetch(`${envVariables.BACKEND_BASE_URL}/api/contacts`, {
      headers: new Headers({
        'Authorization': `Bearer ${envVariables.API_TOKEN}`
    })});
    const data = await response.json();
    return {
      email: data.data[0].attributes.email,
      phone: data.data[0].attributes.phone
    };
  }
};