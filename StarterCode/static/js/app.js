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