"use server";

const BASE_URL = process.env.NEXT_PUBLIC_BASEURL;

export const getUser = async (query?:any) => {
  try {

    
    
    const response = await fetch(`${BASE_URL}/user?email=${query}`, {
      cache: "no-store",
    });

    const result = await response.json();

 
    

    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
export const getUserOrder = async (query?:any) => {
  try {

    
    
    const response = await fetch(`${BASE_URL}/order?userId=${query}`, {
      cache: "no-store",
    });

    const result = await response.json();

 
    

    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};