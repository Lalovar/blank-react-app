



function chida(callback) {
    let a = "perro";
    const res = callback(a);
    return res;
}


console.log(
    chida(a => a + " javi")
);
