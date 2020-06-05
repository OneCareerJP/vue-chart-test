<template>
  <canvas :id="bindTo" />
</template>

<script lang="ts">
import Vue from "vue";
import { Chart } from "chart.js";
import { Data, Methods, Computed, Props } from "./types";
// @ts-ignore
import { customDraw } from "./roundedBar";

export default Vue.extend<Data, Methods, Computed, Props>({
  name: "HorizontalChart",
  data() {
    return {
      bindTo: "chart",
      chart: null,
      chartData: {
        labels: ["one", "two", "three", "four"],
        datasets: [
          {
            label: `test`,
            backgroundColor: "#55bdfe",
            barPercentage: 0.5,
            data: [2, 4, 6, 8]
          }
        ]
      },
      chartOptions: {
        scales: {
          xAxes: [
            // Ｘ軸のオプション
            {
              gridLines: {
                borderDash: [5, 3]
              },
              ticks: {
                min: 0,
                callback: (value, index, values) => {
                  if (
                    (values.length - 1) / 2 === index ||
                    values.length - 1 === index
                  )
                    return value;
                  else return "";
                }
              }
            }
          ]
        }
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
  created() {
    // TODO 横軸の場合動かないので調査要
    this.customDrawInit();
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
        type: "horizontalBar",
        data: this.chartData,
        options: this.chartOptions
      });
    },
    customDrawInit() {
      // @ts-ignore
      Chart.elements.Rectangle.prototype.draw = customDraw;
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
