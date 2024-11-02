"use server";

const BASE_URL = process.env.NEXT_PUBLIC_BASEURL;

export const GetAllChef = async (query?: Record<string, string>) => {
  try {

    console.log("i'm form midd",query);
    
    const response = await fetch(`${BASE_URL}/chef?${new URLSearchParams(query)}`, {
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
  try {
    const response = await fetch(`${BASE_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

  
    if (!response.ok) {
      throw new Error(result.message || "Failed to create order");
    }

    return result;
  } catch (error: any) {
    console.error("Error in createOrder:", error.message);

    return {
      success: false,
      message: error.message,
    };
  }
};
export const customMenu = async (data: any) => {
  try {
    const response = await fetch(`${BASE_URL}/cumstommenu`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

  
    if (!response.ok) {
      throw new Error(result.message || "Failed to create order");
    }

    return result;
  } catch (error: any) {
    console.error("Error in createOrder:", error.message);

    return {
      success: false,
      message: error.message,
    };
  }
};
export const sendemail = async (data: any) => {
  try {

     
     
    const response = await fetch(`${BASE_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
    
  
    if (!response.ok) {
      throw new Error(result.message || "Failed to create order");
    }

    return result;
  } catch (error: any) {
    console.error("Error in createOrder:", error.message);

    return {
      success: false,
      message: error.message,
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
export const LivePromocode = async (code:string,chefId:string) => {
  try {
    const response = await fetch(`${BASE_URL}/promocode?code=${code}&chefId=${chefId}`, {
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