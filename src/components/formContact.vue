<template>
  <section>
    <b-field label="Nome">
      <b-input v-model="user.first_name"></b-input>
    </b-field>

    <b-field label="Sobrenome">
      <b-input v-model="user.last_name" maxlength="30"> </b-input>
    </b-field>

    <b-field label="Contato">
      <b-input
        v-model="user.contact"
        maxlength="30"
        v-mask="['(##) ####-####', '(##) #####-####']"
      ></b-input>
    </b-field>

    <b-field label="Gênero">
      <b-select v-model="user.gender" placeholder="Selecione o gênero">
        <option valor="Male" key="Male">Male</option>
        <option valor="Female" key="Female">Female</option>
      </b-select>
    </b-field>
    <div class="buttons">
      <b-button @click="save" type="is-primary"> Salvar </b-button>
      <b-button @click="user = {}" type="is-danger"> Cancelar </b-button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    save() {
      this.$emit("save-user", this.user);
      this.user = {};
    },
  },
};
</script>

<style>
</style>