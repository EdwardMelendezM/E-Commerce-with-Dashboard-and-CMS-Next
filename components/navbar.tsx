import { UserButton } from "@clerk/nextjs";
import {MainNav} from "@/components/ui/main-nav";

const Navbar = () => {
  return ( 
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>
          This will be a store switcher
        </div>
        <MainNav />
        <div>
          This will be a routes
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <UserButton />
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;