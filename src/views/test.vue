<template>
  <h1>{{ $store.state.userName }}</h1>
  <p><button @click="changeStore()" > commit </button></p>
  <p><button @click="settimeDispath()" > cdispath </button></p>
  <p> 来吧展示 : {{$store.state.roleIds}}</p>
<ul>
    <li v-for="(item,index) of $store.state.dataList" :key="index">{{item}}</li>
</ul>
</template>

<script>
export default {
  name: 'test',
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
        this.$store.commit("setUserInfo",[1,2,3,3,45,56,67,21122]);
        console.log(this.$store.state.dataList);
      },
      settimeDispath(){
          this.$store.dispatch("setRoleId","1212123434");
      }
  },
  mounted() {
      console.log(this.$store.state.dataList);
        console.log(this.$store.state.dataList);
  }
}
</script>
