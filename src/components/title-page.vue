<template>
  <div class="page">
      <h1 id="title"> {{ title }} </h1>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            require: true,
            default: 'Home',
        }
    }
}
</script>