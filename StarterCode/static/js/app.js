function buildMetadata(sample) {
    d3.json("samples.json").then(data) => {
        var metadata = data.metadata;
        var resultsarray = metadata.filter(sampleobject => sampleobject.id == sample);
    }
}