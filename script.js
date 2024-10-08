document.getElementById("generateBtn").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value;
    const hiddenMessage = " Hidden message: You are amazing!";
    const output = userInput + hiddenMessage;
    document.getElementById("outputText").textContent = output;
});
