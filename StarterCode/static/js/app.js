function buildMetadata(sample) {
    d3.json("samples.json").then(data) => {
        var metadata = data.metadata;
        var resultsarray = metadata.filter(sampleobject => sampleobject.id == sample);
        var results = resultsarray[0]
        var PANEL = d3.select('#sample-maetadata');
        PANEL.html("");
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text('${key}: ${value');
        })
    }
}

function buildCharts(sample) {
    d3.json("samples.json").then((data) => {
        var samples= data.samples;
        var resultsarray= samples.filter(sampleobject => sampleobject.id == sample);
        var result= resultsarray[0]
    
        var ids = result.otu_ids;
        var labels = result.otu_labels;
        var values = result.sample_values; 

        var bar_data =[
            {
              y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
              x:values.slice(0,10).reverse(),
              text:labels.slice(0,10).reverse(),
              type:"bar",
              orientation:"h"
      
            }
          ];
      
          var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: { t: 30, l: 150 }
          };
      
          Plotly.newPlot("bar", bar_data, barLayout);
        });
        