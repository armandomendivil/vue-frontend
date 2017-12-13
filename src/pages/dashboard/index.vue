<template>
  <div>
      <h3>DashBoard</h3>
      <TableComponent
        :items="users"
        :columns="columns"
      />
  </div>
</template>

<script>
import TableComponent from '@/components/Table';

export default {
  data() {
    return {
      users: [],
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
          label: 'Last NAme',
          field: 'lastname',
        },
      ],
    }
  },
  components: {
    TableComponent,
  },
  async created() {
    var response = await this.$http.get('http://localhost:9000/users')
    this.users = response.data.user;
  }
}
</script>
