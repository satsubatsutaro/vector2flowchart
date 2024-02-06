const util = require("util")
const parsed = util.parseArgs({
	options: {
		s: { type: "boolean" },
	},
	allowPositionals: true,
})

filename = parsed["positionals"][0]

var readlines = require('fs').readFileSync(filename, 'utf-8')
    .split('\r\n')
    .filter(Boolean);

var boxes = []
readlines.forEach(function(element){
    linenum = parseInt(element.match(/^\d+/)).toString();
    var conditional = element.match(/^\d+ (.+)\s+if\s+(.+)$/i);
    var unconditional = element.match(/unconditionally/i);
    if(conditional != null && unconditional == null){
        var op = conditional[1];
        var cond = conditional[2];
        if("s" in parsed["values"]){
            cond = linenum + ": " +cond;
            op = linenum + "_2: " +op;
        }
        boxes.push(`op${linenum}{${cond}}`)
        boxes.push(`op${linenum}_2[${op}]`)
    }
    else{
        var match2 = element.match(/^\d+ (.+)$/i);
        var op = match2[1];
        if("s" in parsed["values"]){
            op = linenum + ": " +op;
        }
        boxes.push(`op${linenum}[${op}]`)
    }
});
//console.log(boxes);

var connections = []

for (var i = 0; i < boxes.length; i++) {
    var from = boxes[i].match(/^([^\{\[\(]+)/i)[1];

    if(boxes[i].match(/\{/i)){
        var to_true = boxes[i+1].match(/^([^\{\[\(]+)/i)[1];
        connections.push(`${from}-->|true|${to_true}`)
        if(boxes.length > (i + 2)){
            var to_false = boxes[i+2].match(/^([^\{\[\(]+)/i)[1];
            connections.push(`${from}-->|false|${to_false}`)
        }
    }
    else if(boxes[i].match(/\s*goto\s+/i)) {
        var to = boxes[i].match(/goto\D+(\d+)/i)[1];
        connections.push(`${from}-->op${to}`)
    }
    else if(boxes[i].match(/stop/i)) {
    }
    else if(boxes.length > (i + 1)){
        var to = boxes[i+1].match(/^([^\{\[\(]+)/i)[1];
        connections.push(`${from}-->${to}`)
    }
}
//console.log(connections);
console.log("```mermaid")
console.log("flowchart TD")
console.log(boxes.join("\r\n"));
console.log(connections.join("\r\n"));
console.log("```")