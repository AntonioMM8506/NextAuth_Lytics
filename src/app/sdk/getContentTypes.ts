import initializeContentstackSdk from "../sdk/utils";

const getContentTypes = async () => {
    const Stack = initializeContentstackSdk();
    
    return Stack.getContentTypes()
      .then((response: any) => {
        console.log("Available Content Types:", response);
        return response;
      })
      .catch((error: any) => {
        console.error("Error fetching content types:", error);
        return [];
      });
};

export default getContentTypes;