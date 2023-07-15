'use client'

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { CategoryColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";


interface CategoryClientProps{
  data:CategoryColumn[];
}

const CategoryClient: React.FC<CategoryClientProps> = ({
  data
}) => {

  const router = useRouter()
  const params = useParams()


  return ( 
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new `)}
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
          description="Api calls for Categories"
      />
      <Separator />
      <ApiList
        entityIdName="categoryId"
        entityName="categories"
      />

    </>
   );
}
 
export default CategoryClient;