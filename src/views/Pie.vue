<template>
  <div class="chartjs">
    <h1>Chart.js</h1>
    <div style="width: 80%; height: 30%; margin: auto;">
      <Pie />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Pie from "@/components/Chart/Pie/index.vue";

@Component({
  components: {
    HelloWorld,
    Pie
  }
})
export default class Home extends Vue {}
</script>
