var svg = d3.select('svg');

/* Your code goes here */

d3.csv('./data.csv', function(dataIn){
    console.log(dataIn);

    svg.selectAll('circle')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('cx', function(d){
            return d.x;

        })
        .attr('cy', function(d){
            return d.y;

        })

        .attr('r', function(d){
            return d.r;

        })
        .attr('fill', function(d){
            return d.fill;

        });



})

var scaleRuler = d3.scaleLinear().domain([0,100]).range([0,10]);

console.log(scaleRuler(95))

var scalesizes = d3.scaleOrdinal().domain(["small,", "medium", "large"]).range([5, 10, 15]);

console.log(scalesizes("large"))