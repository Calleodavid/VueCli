<template>
  <div>
    <titlePage title="Contact" />
    <div class="container">
      <div class="container-fluid">
        <tableContact :data="data" @save-user="save" />
        <form-contact @save-user="save" />
      </div>
    </div>
  </div>
</template>

<script>
import formContact from "@/components/formContact";
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          first_name: "Jesse",
          last_name: "Simmons",
          contact: "(47) 9 9945-6789",
          gender: "Male",
        },
        {
          id: 2,
          first_name: "John",
          last_name: "Jacobs",
          contact: "(47) 9 9945-6789",
          gender: "Male",
        },
        {
          id: 3,
          first_name: "Tina",
          last_name: "Gilbert",
          contact: "(47) 9 9945-6789",
          gender: "Female",
        },
        {
          id: 4,
          first_name: "Clarence",
          last_name: "Flores",
          contact: "(47) 9 9945-6789",
          gender: "Male",
        },
        {
          id: 5,
          first_name: "Anne",
          last_name: "Lee",
          contact: "(47) 9 9945-6789",
          gender: "Female",
        },
      ],
    };
  },
  components: { formContact },
  methods: {
    save(user) {
      const lastId = this.data[this.data.length - 1].id;
      user.id = lastId + 1;
      this.data.push(user);
    },
  },
};
</script>

<style>
</style>