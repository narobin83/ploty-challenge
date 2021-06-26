function buildGauge(wfreq) {
    var level = parseFloat(wfreq) * 20;

    var degrees = 180 - level;
    var radius = 0.5;
    var radians = (degrees * Math.PI) / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
    
}