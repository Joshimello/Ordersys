<script>
  import * as Table from '$lib/components/ui/table'
  export let data
  $: ({ records } = data)
</script>

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.Head class="w-[120px]">Product ID</Table.Head>
      <Table.Head>Class</Table.Head>
      <Table.Head>Color</Table.Head>
      <Table.Head class="text-right">Price</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each records as record}
    <Table.Row>
      <Table.Cell class="font-medium">{record.id}</Table.Cell>
      <Table.Cell>{record.class}</Table.Cell>
      <Table.Cell>{record.color}</Table.Cell>
      <Table.Cell class="text-right">{record.price}</Table.Cell>
    </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>