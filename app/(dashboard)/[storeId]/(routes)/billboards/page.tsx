import BillboardClient from "./components/client";

const BillboardsPage = () => {
  return ( 
    <div className="flex-cols">
      <div className="flex-1 space-y-4 p-8 pt-8">
        <BillboardClient/>
      </div>
    </div>
   );
} 
 
export default BillboardsPage;