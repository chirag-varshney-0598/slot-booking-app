export const baseURL = "https://app.appointo.me"; //main base url to make all the calls

//these are the common base url end points throgh which we need to call the api, i did this to manage them easily if we need to change the base endpoints
let scripttag = "scripttag"; //v0

const apiConfigs = {
  mock_timeslots: `${baseURL}/${scripttag}/mock_timeslots`,
};

export default apiConfigs;
