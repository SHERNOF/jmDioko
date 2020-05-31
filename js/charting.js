window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Comparable Comprehensive Income Statement"
    },
    subtitles: [
      {
        text: "Click Legend to Hide or Unhide Data Series"
      }
    ],
    axisX: {
      title: "Comparison - Annual"
    },
    axisY: {
      title: "Gross",
      titleFontColor: "#4F81BC",
      lineColor: "#4F81BC",
      labelFontColor: "#4F81BC",
      tickColor: "#4F81BC"
    },
    axisY2: {
      title: "Expenses",
      titleFontColor: "#C0504E",
      lineColor: "#C0504E",
      labelFontColor: "#C0504E",
      tickColor: "#C0504E"
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [
      {
        type: "column",
        name: "Gross",
        showInLegend: true,
        yValueFormatString: "#,##0.#",
        dataPoints: [
          { label: "2018", y: 753796 },
          { label: "2019", y: 1242865 }
        ]
      },
      {
        type: "column",
        name: "Expenses",
        axisYType: "secondary",
        showInLegend: true,
        yValueFormatString: "#,##0.#",
        dataPoints: [
          { label: "2018", y: 589031 },
          { label: "2019", y: 979467 }
        ]
      }
    ]
  })
  chart.render()

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false
    } else {
      e.dataSeries.visible = true
    }
    e.chart.render()
  }

  var chart = new CanvasJS.Chart("chartContainerPie", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Tools and Equipment"
    },
    data: [
      {
        type: "pie",
        startAngle: -10,
        toolTipContent: "<b>{label}</b>: {y}%",
        // showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 10,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 1.8, label: "Demolition Hammer" },
          { y: 4.4, label: "Portable Drill" },
          { y: 1.8, label: "Chipping Hammer" },
          { y: 7, label: "Grider #4" },
          { y: 7, label: "Grider #7" },
          { y: 30.7, label: "Welding Machin" },
          { y: 3.5, label: "Chopsaw" },
          { y: 2.6, label: "Drill Press" },
          { y: 7.9, label: "Mixer" },
          { y: 3.5, label: "Submersible Pump" },
          { y: 1.8, label: "Water Pump" },
          { y: 3.5, label: "Concrete Cutter" },
          { y: 8.8, label: "Concrete Vibrator" },
          { y: 7, label: "Cutting Outfit" },
          { y: 3.5, label: "Genste 100KVA" },
          { y: 1.8, label: "Compactor" },
          { y: 0.9, label: "Elf" },
          { y: 0.9, label: "Dump truck" },
          { y: 1.8, label: "Forard/Cargo truck" }
        ]
      }
    ]
  })
  chart.render()
}

// window.onload = function () {

//  }
