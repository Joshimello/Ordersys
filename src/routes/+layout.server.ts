import { PB_URL } from '$env/static/private'
import PocketBase from 'pocketbase'

export const load = async () => {
  const pb = new PocketBase(PB_URL)
  const products = await pb.collection('products').getFullList()
  const employees = await pb.collection('employees').getFullList()
  return { products, employees }
}