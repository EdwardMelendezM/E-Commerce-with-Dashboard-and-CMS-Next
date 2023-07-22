import prismadb from "@/lib/prismadb";

const getStockCount = async (storeId: string)=>{
  const stockCount = await prismadb.product.count({
    where:{
      storeId,
      isArchived:true
    }
  })

  return stockCount
}
 
export default getStockCount;