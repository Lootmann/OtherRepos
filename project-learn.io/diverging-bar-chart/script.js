anychart.onDocumentReady(function () {
  const winlossData = [
    [65, 17, "2015-16"],
    [61, 21, "2014-15"],
    [55, 27, "2013-14"],
    [37, 45, "2012-13"],
    [25, 41, "2011-12"],
    [25, 57, "2010-11"],
    [25, 57, "2009-10"],
    [17, 65, "2008-09"],
    [25, 57, "2007-08"],
    [40, 42, "2006-07"],
    [37, 45, "2005-06"],
    [48, 34, "2004-05"],
    [26, 56, "2003-04"],
    [32, 50, "2002-03"],
    [24, 58, "2001-02"],
    [26, 56, "2000-01"],
    [15, 67, "1999-00"],
    [19, 31, "1998-99"],
    [21, 61, "1997-98"],
    [26, 56, "1996-97"],
  ];

  const chart = anychart.bar();

  const createSeries = function (columnNumber, name) {
    const data = [];
    for (var i = 0; i < winlossData.length; i++) {
      const value = winlossData[i][columnNumber];
      const center = 0;
      if (name === "Wins") {
        data.push({
          x: winlossData[i][2],
          low: center,
          high: center + value,
          value: value,
        });
      } else {
        data.push({
          x: winlossData[i][2],
          low: -center,
          high: -center - value,
          value: value,
        });
      }
    }

    const series = chart.rangeBar(data);
    series.name(name);
  };

  // create series
  createSeries(0, "Losses");
  createSeries(1, "Wins");

  // set the chart title
  chart
    .title()
    .enabled(true)
    .text("20 Years of LA Lakers Win-Loss Record with Kobe Bryant (1996-2016)");

  // enable the chart legend
  chart.legend().enabled(true);

  // create a stacked bar chart from the multi-series bar chart
  chart.yScale().stackMode("value");

  // set a container id for the chart
  chart.container("container");

  chart.dataArea().background().enabled(true);
  chart.dataArea().background().fill("#000000 0.8");

  // initiate chart drawing
  chart.draw();
});
