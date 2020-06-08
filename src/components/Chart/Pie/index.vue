<template>
  <canvas :id="bindTo" />
</template>

<script lang="ts">
import Vue from "vue";
import { Chart } from "chart.js";
import { Data, Methods, Computed, Props } from "./types";

export default Vue.extend<Data, Methods, Computed, Props>({
  name: "PieChart",
  data() {
    return {
      bindTo: "chart",
      chart: null,
      chartData: {
        labels: ["one", "two"],
        datasets: [
          {
            type: "pie",
            label: `test`,
            borderWidth: 0,
            borderColor: "transparent",
            backgroundColor: ["#e0648c", "#cfcfcf"],
            data: [1, 3]
          }
        ]
      },
      chartOptions: {
        cornerRadius: 5
      }
    };
  },
  watch: {
    "chartData.datasets": {
      immediate: true,
      handler() {
        this.onChangeChartData();
      }
    },
    "chartData.labels"() {
      this.onChangeChartData();
    }
  },
  mounted() {
    this.generateChart();
  },
  beforeDestroy() {
    if (this.chart) this.chart.destroy();
  },
  methods: {
    generateChart() {
      if (this.chart) this.chart.destroy();
      const canvas = document.getElementById(this.bindTo) as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");

      if (!canvas || !ctx) return;

      this.chart = new Chart(ctx, {
        type: "pie",
        data: this.chartData,
        options: this.chartOptions
      });
    },
    onChangeChartData() {
      if (!this.chart) return;
      this.chart.update();
      this.$emit("chart:update");
    }
  }
});
</script>

<style lang="scss" scoped>
canvas {
  height: 100%;
}
</style>
