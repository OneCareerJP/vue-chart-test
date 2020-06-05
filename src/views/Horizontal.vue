<template>
  <div class="chartjs">
    <h1>Chart.js</h1>
    <div style="width: 80%; height: 30%; margin: auto;">
      <Horizontal />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Horizontal from "@/components/Horizontal.vue";

@Component({
  components: {
    HelloWorld,
    Horizontal
  }
})
export default class Home extends Vue {}
</script>
