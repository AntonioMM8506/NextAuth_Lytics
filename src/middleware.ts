export {default} from "next-auth/middleware";
export const config = {matcher: ["/dashboard"]}

//File created in order to avoid to access to pages without opened session