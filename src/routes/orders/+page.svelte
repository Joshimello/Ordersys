<script>
  import * as Table from '$lib/components/ui/table'
  export let data
  $: ({ records } = data)
</script>

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.Head class="w-[120px]">Order ID</Table.Head>
      <Table.Head>Employee ID</Table.Head>
      <Table.Head>Product ID</Table.Head>
      <Table.Head class="text-right">Price</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each records as record}
    <Table.Row>
      <Table.Cell class="font-medium">{record.id}</Table.Cell>
      <Table.Cell>{record.employee} ({record.expand?.employee.name})</Table.Cell>
      <Table.Cell>{record.product} ({record.expand?.product.class})</Table.Cell>
      <Table.Cell class="text-right">{record.price}</Table.Cell>
    </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>