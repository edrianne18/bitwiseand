function bitwise_and(){
    var x = ("5.13".split("."));
    var y = ("3.11".split("."));
    var a = [];
    var b = [];
        for (var z = 0; z < x.length; z++){
            a[z]=parseInt(x[z]);
            b[z]=parseInt(y[z]);
            var string1 = a[0] & b [0];
            var string2 = a[1] & b [1];
        }
    document.write("[ "+string1+" , "+string2+" ]");
}