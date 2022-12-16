var my_module=require("./my_module")
console.log((function(setting){
    console.log(setting)
    return setting.split('').reverse().join('')
})(my_module.name))