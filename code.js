// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

const sayHello = (input) => {
    if (typeof input !== `string`) {
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
};
