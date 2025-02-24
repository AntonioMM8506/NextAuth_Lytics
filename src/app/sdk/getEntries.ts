import initializeContentstackSdk from "../sdk/utils";

/*
const getEntries = async (contentTypeUid: string) => {
    const Stack = initializeContentstackSdk();
    const Query = Stack.ContentType(contentTypeUid).Query();
    
    return Query.toJSON()
      .find()
      .then((result: any) => {
        console.log(`Entries from ${contentTypeUid}:`, result[0]);
        return result[0]; // Content is typically inside the first array index
      })
      .catch((error: any) => {
        console.error(`Error fetching entries from ${contentTypeUid}:`, error);
        return null;
      });
};
*/


const getEntries = async (contentTypeUid: string) => {
    const Stack = initializeContentstackSdk();
    const Query = Stack.ContentType(contentTypeUid).Query();
    
    return await Query.toJSON()
      .find()
      .then((result: any) => {
        if (!result[0] || result[0].length === 0) {
          console.warn(`No entries found for content type: ${contentTypeUid}`);
          return null;
        }
        const entry = result[0][0]; 

         const firstEntry ={
          title: entry.title,
          imageUrl: entry.mypicture?.url || "",
          createdAt: entry.created_at,
          updatedAt: entry.updated_at,
        };

        console.log("firstEntry", firstEntry);
        return firstEntry;
      })
      .catch((error: any) => {
        console.error(`Error fetching entries from ${contentTypeUid}:`, error);
        return null;
      });
  };
  
export default getEntries;
