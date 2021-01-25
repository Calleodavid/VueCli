<template>
  <section>
    <b-field>
      <b-button
        label="Clear selected"
        type="is-danger"
        icon-left="close"
        :disabled="!selected"
        @click="selected = null"
      />
    </b-field>

    <b-tabs>
      <b-tab-item label="Table">
        <b-table
          :data="data"
          :columns="columns"
          :selected.sync="selected"
          focusable
        >
        </b-table>
      </b-tab-item>

      <b-tab-item label="Selected">
        <pre>{{ selected }}</pre>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: this.data[1],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true,
        },
        {
          field: "first_name",
          label: "First Name",
        },
        {
          field: "last_name",
          label: "Last Name",
        },
        {
          field: "contact",
          label: "Contact",
          centered: true,
        },
        {
          field: "gender",
          label: "Gender",
        },
      ],
    };
  },
};
</script>