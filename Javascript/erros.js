try {
    const name = "Alexandre de Castro Nunes";
    const myError = new Error("Custom Message");
    throw myError; // Dispara o erro.
}catch (err) {
    console.log("Error: ", err);
} finally {
    console.log("Keep going...")
}