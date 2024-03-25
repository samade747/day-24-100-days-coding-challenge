
{
    let blockLet: string = "visible inside the block";
    const blockConst: string = "also only inside the block";
    console.log(blockLet); 
    console.log(blockConst); 
}

try {
    console.log(blockLet); 
} catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}

try {
    console.log(blockConst); 
} catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
