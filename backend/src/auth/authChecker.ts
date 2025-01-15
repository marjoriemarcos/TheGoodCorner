import { type AuthChecker } from "type-graphql";

interface userContext {
    user?: {
      roles: string;
      name: string,
      hashedPassword: string,
      email: string
    };
  }

export const authChecker: AuthChecker<userContext> = ({ context }, needeRoles) => {
    if (context.user) {
        if (needeRoles.includes(context.user.roles)) return true;
    } 
    return false
  
}