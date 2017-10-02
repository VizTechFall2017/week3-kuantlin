var svg = d3.select('svg');

myArray = [];

for (i =0; i<20; i++) {

    var object = {cx:1000 * Math.random(),cy: Math.random()* 1000, r:i*2};

    myArray.push(object);}

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        return d.cx;

    })
    .attr('cy', function(d){
        return d.cy;

    })

    .attr('r', function(d){
        return d.r;

    })
    .attr('fill', function(d){
        return d.color;
    })



    .attr('fill', 'lightblue')
    .attr('fill-opacity', 0.5)
    .attr('stroke-width', 2)
    .attr('stroke', 'darkred');

myArray = [];

for (i =0; i<50; i++) {

    var object = {cx:1000 * Math.random(),cy: Math.random()* 1000, r:i*.75};

    myArray.push(object);}

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        return d.cx;

    })
    .attr('cy', function(d){
        return d.cy;

    })

    .attr('r', function(d){
        return d.r;

    })
    .attr('fill', function(d){
        return d.color;
    })



    .attr('fill', 'blue')
    .attr('fill-opacity', 0.2)
    .attr('stroke-width', 2)
    .attr('stroke', 'darkred');


