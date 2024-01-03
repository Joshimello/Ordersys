<script>
  import '../app.pcss'
  import '@fontsource-variable/inter'
  import { goto } from '$app/navigation'

  import * as Tabs from '$lib/components/ui/tabs'
  import { Button, buttonVariants } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog'
  import { Input } from '$lib/components/ui/input'
  import { Label } from '$lib/components/ui/label'
  import * as Select from '$lib/components/ui/select'

  export let data
  $: ({ products, employees } = data)

  let product = { value: '' }
  let employee = { value: '' }
</script>

<div class="flex flex-col p-6">
  <div class="flex justify-between">
    <span class="text-3xl font-bold">Orders System</span>
  </div>
  <div class="pt-4">
    <Tabs.Root value="orders">
      <div class="flex justify-between">
        <Tabs.List>
          <Tabs.Trigger value="orders" on:click={() => goto('/orders')}>Orders</Tabs.Trigger>
          <Tabs.Trigger value="products" on:click={() => goto('/products')}>Products</Tabs.Trigger>
          <Tabs.Trigger value="employees" on:click={() => goto('/employees')}>Employees</Tabs.Trigger>
        </Tabs.List>

        <Dialog.Root>
          <Dialog.Trigger class={buttonVariants({ variant: 'default' })}>
            Add something
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Add something</Dialog.Title>
              <Dialog.Description>
                Choose one of the below item to add.
              </Dialog.Description>
            </Dialog.Header>

            <Tabs.Root value="order">
              <Tabs.List>
                <Tabs.Trigger value="order">Orders</Tabs.Trigger>
                <Tabs.Trigger value="product">Products</Tabs.Trigger>
                <Tabs.Trigger value="employee">Employees</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="order">
                <form method="POST" action="/orders">
                  <div class="grid gap-4 py-4">
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label class="text-right">ID</Label>
                      <Input name="order_id" value="" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label class="text-right">Price</Label>
                      <Input name="price" type="number" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label class="text-right">Employee</Label>
                      <Input class="hidden" name="employee" value={employee.value}/>
                      <Select.Root bind:selected={employee}>
                        <Select.Trigger class="col-span-3">
                          <Select.Value placeholder="Select" />
                        </Select.Trigger>
                        <Select.Content>
                          {#each employees as i}
                          <Select.Item value={i.id}>{i.name}</Select.Item>
                          {/each}
                        </Select.Content>
                      </Select.Root>
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label class="text-right">Product</Label>
                      <Input class="hidden" name="product" value={product.value}/>
                      <Select.Root bind:selected={product}>
                        <Select.Trigger class="col-span-3">
                          <Select.Value placeholder="Select" />
                        </Select.Trigger>
                        <Select.Content>
                          {#each products as i}
                          <Select.Item value={i.id}>{i.class}</Select.Item>
                          {/each}
                        </Select.Content>
                      </Select.Root>
                    </div>
                  </div>
                  <div class="w-full flex justify-end">
                    <Button type="submit">Add order</Button>
                  </div>
                </form>
              </Tabs.Content>
              <Tabs.Content value="product">
                <form method="POST" action="/products">
                  <div class="grid gap-4 py-4">
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label class="text-right">ID</Label>
                      <Input name="product_id" value="" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label class="text-right">Price</Label>
                      <Input name="price" type="number" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label class="text-right">Class</Label>
                      <Input name="class" value="" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label class="text-right">Color</Label>
                      <Input name="color" value="" class="col-span-3" />
                    </div>
                  </div>
                  <div class="w-full flex justify-end">
                    <Button type="submit">Add product</Button>
                  </div>
                </form>
              </Tabs.Content>
              <Tabs.Content value="employee">
                <form method="POST" action="/employees">
                  <div class="grid gap-4 py-4">
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label class="text-right">ID</Label>
                      <Input name="employee_id" value="" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label class="text-right">Name</Label>
                      <Input name="name" value="" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label class="text-right">Gender</Label>
                      <Input name="gender" value="" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label class="text-right">Age</Label>
                      <Input name="age" type="number" class="col-span-3" />
                    </div>
                  </div>
                  <div class="w-full flex justify-end">
                    <Button type="submit">Add employee</Button>
                  </div>
                </form>
              </Tabs.Content>
            </Tabs.Root>
          </Dialog.Content>
        </Dialog.Root>
      </div>
      <Tabs.Content value="orders">
        <slot></slot>
      </Tabs.Content>
      <Tabs.Content value="products">
        <slot></slot>
      </Tabs.Content>
      <Tabs.Content value="employees">
        <slot></slot>
      </Tabs.Content>
    </Tabs.Root>
  </div>
</div>