<template>
  <h1>{{ $store.state.userName }}</h1>
  <p><button @click="changeStore()" > 改变 </button></p>
  
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test 改变 hot module replacement.</p>
    
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
      changeStore(){
        this.$store.state.userName = 'sssssss';
      }
  },
  mounted() {

  }
}
</script>
