import { PB_URL } from '$env/static/private'
import PocketBase from 'pocketbase'

export const load = async () => {
  const pb = new PocketBase(PB_URL)
  const records = await pb.collection('orders').getFullList({
    expand: 'employee,product'
  })
  return { records }
}

export const actions = {
  default: async ({ request }) => {
    const pb = new PocketBase(PB_URL)
    const data = await request.formData()
    const record = await pb.collection('orders').create(data)
  }
}