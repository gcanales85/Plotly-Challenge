function builddashboard(){
    var dropdown = d3.select("#selDataset")
    d3.json("samples.json").then((dataset)=>{
        var names = dataset.names
        names.forEach((name)=>{
            dropdown.append("option").text(`${name}`).property("value",name)
        });
        demographic(names[0])
    });
}
builddashboard();

function demographic(id){
    d3.json("samples.json").then((dataset)=>{
        var metadata = dataset.metadata
        var filterdata = metadata.filter(row=> row.id == id)
        var demoinfo = d3.select("#sample-metadata")
        demoinfo.html("")
        Object.entries(filterdata[0]).forEach(([key,value])=>{
            demoinfo.append("h7").text(`${key};${value}`);
        });

    });

}