"use server";

const BASE_URL = process.env.NEXT_PUBLIC_BASEURL;

export const GetAllChef = async () => {
  try {
    const response = await fetch(`${BASE_URL}/chef`, {
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
export const GetSingleChef = async (id:string) => {
  try {
    const response = await fetch(`${BASE_URL}/chef/${id}`, {
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
export const createOrder = async (data: any) => {
  console.log("this is dara",data);
  
  try {
    const response = await fetch(`${BASE_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    //console.log(result)
 
    return result;
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

export const GetorderDetails = async (id:string) => {
  try {
    const response = await fetch(`${BASE_URL}/order/${id}`, {
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