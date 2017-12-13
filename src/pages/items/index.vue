<template>
  <div class="">
    <h3>Listado Items</h3>
    <TableComponent
      :items="item"
      :columns="columns"
      :rows="rows"
    />
  </div>
</template>

<script>
import TableComponent from '@/components/Table';

export default {
  name: 'Items',
  data() {
    return {
      item: [{}],
      columns: [
        {
          label: 'ID',
          field: '_id',
        },
        {
          label: 'Nombre',
          field: 'name',
        },
        {
          label: 'Descripcion',
          field: 'description',
        },
      ],
    };
  },
  components: {
    TableComponent,
  },
  async created() {
    const api = 'http://localhost:9000/items';

    var response = await this.axios.get(api);
    this.item = response.data.item;
  }
};
</script>
