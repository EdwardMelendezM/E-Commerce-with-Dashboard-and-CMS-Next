'use client'

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ColorColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";


interface ColorsClientProps{
  data: ColorColumn[];
}

const ColorsClient: React.FC<ColorsClientProps> = ({
  data
}) => {

  const router = useRouter()
  const params = useParams()


  return ( 
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage colors for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/colors/new `)}
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
          description="Api calls for Colors"
      />
      <Separator />
      <ApiList
        entityIdName="colorsId"
        entityName="colors"
      />

    </>
   );
}
 
export default ColorsClient;