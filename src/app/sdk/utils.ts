import Contentstack from "contentstack";

const initializeContentstackSdk = () => {
  const {
    NEXT_STACK_API_KEY,
    NEXT_DELIVERY_TOKEN,
    NEXT_PREVIEW_TOKEN,
    NEXT_ENVIRONMENT,
    NEXT_PUBLIC_REGION
  } = process.env;


  const region: Contentstack.Region = Contentstack.Region.US;
  /*
  const region: Contentstack.Region | undefined = (function (
    regionValue: string
  ) {
    switch (regionValue) {
      case "US":
        return Contentstack.Region.US;
      case "EU":
        return Contentstack.Region.EU;
      case "AZURE_NA":
        return Contentstack.Region.AZURE_NA;
      case "AZURE_EU":
        return Contentstack.Region.AZURE_EU;
      case "GCP_NA":
        return Contentstack.Region.GCP_NA;
      default:
        return undefined;
    }
  })(NEXT_PUBLIC_REGION as string);

  

  if (!region) {
    throw new Error(
      "Invalid region provided in NEXT_PUBLIC_REGION. Valid values are: " +
        Object.keys(Contentstack.Region).join(", ")
    );
  }
  */

  const Stack = Contentstack.Stack({
    api_key: NEXT_STACK_API_KEY as string,
    delivery_token: NEXT_DELIVERY_TOKEN as string,
    environment: NEXT_ENVIRONMENT as string,
    region: region,
  });


  return Stack;
};

export default initializeContentstackSdk;