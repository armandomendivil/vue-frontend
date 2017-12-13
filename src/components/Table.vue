<template lang="html">
  <div class="">
    <table class="table">
      <thead>
        <tr>
          <th v-for="(column, index) in columns">
            {{column.label}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td v-for="column in columns">
            {{item[column.field]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['items', 'columns'],
}
</script>

<style lang="css">
</style>
