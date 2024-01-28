import axios from "axios";
import apiConfigs from "..";

/*
this is the main function to exeucte all the axios API call, 
i created this to make all the call from the same file to handle
 and secure the code on future prospective
*/
export const apiRouterCall = async ({
  method,
  id,
  endPoint,
  data,
  params,
  token,
  source,
  url,
}) => {
  try {
    return axios({
      method: method,
      url: url
        ? url
        : id
        ? `${apiConfigs[endPoint]}/${id}`
        : apiConfigs[endPoint],
      headers: {
        token: token ? token : window.sessionStorage.getItem("token"),
      },
      data: data ? data : null,
      params: params ? params : null,
      cancelToken: source ? source.token : null,
    });
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
