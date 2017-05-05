var ref = "8. Adhikari S, Turner M, Subramanian S. Hairpin Priming Is Better Suited than In Vitro, Polyadenylation to Generate cDNA for Plant miRNA qPCR[J]. Molecular Plant, 2013, 6(1):229-231."
var reg1 = /\d+\.(.*)/
var reg2 = /\.(.*)\[[A-Z]\]/
console.log(reg1.exec(ref));
console.log(reg2.exec(ref));
