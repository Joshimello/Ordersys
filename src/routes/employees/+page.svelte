<script>
  import * as Table from '$lib/components/ui/table'
  export let data
  $: ({ records } = data)
</script>

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.Head class="w-[120px]">Employee ID</Table.Head>
      <Table.Head>Name</Table.Head>
      <Table.Head>Gender</Table.Head>
      <Table.Head class="text-right">Age</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each records as record}
    <Table.Row>
      <Table.Cell class="font-medium">{record.id}</Table.Cell>
      <Table.Cell>{record.name}</Table.Cell>
      <Table.Cell>{record.gender}</Table.Cell>
      <Table.Cell class="text-right">{record.age}</Table.Cell>
    </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>