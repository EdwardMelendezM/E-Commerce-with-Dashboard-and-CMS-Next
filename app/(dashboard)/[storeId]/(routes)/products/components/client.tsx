'use client'

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";


interface ProductClientProps{
  data:ProductColumn[];
}

const ProductClient: React.FC<ProductClientProps> = ({
  data
}) => {

  const router = useRouter()
  const params = useParams()


  return ( 
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage products for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/products/new `)}
        >
          <Plus className='mr-2 h-4 w-4'/>
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
      />

      <Heading
          title="API"
          description="Api calls for Products"
      />
      <Separator />
      <ApiList
        entityIdName="productId"
        entityName="products"
      />

    </>
   );
}
 
export default ProductClient;