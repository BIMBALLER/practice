function giveAdvice() {
    // Get values from input
    const temperature = Number(document.getElementById("tempInput").value);
    const isRaining = document.getElementById("rainCheck").checked;
    const hasUmbrella = document.getElementById("umbrellaCheck").checked;
    
    const result = document.getElementById("result");
    
    let message = "";

    // Main conditionals
    if (temperature >= 30) {
        message = `🌞 It's very hot (${temperature}°C)! Wear light clothes.`;
    } 
    else if (temperature >= 20 && temperature < 30) {
        if (isRaining) {
            message = `🌧️ It's ${temperature}°C and raining.`;
            if (hasUmbrella) {
                message += "<br>✅ Take your umbrella and wear light clothes.";
            } else {
                message += "<br>❌ Take umbrella if possible, or you will get wet!";
            }
        } else {
            message = `😊 Perfect weather (${temperature}°C). Wear normal clothes and enjoy!`;
        }
    } 
    else if (temperature >= 10 && temperature < 20) {
        message = `🧥 It's cool (${temperature}°C). Wear a light jacket.`;
    } 
    else if (temperature < 10) {
        message = `❄️ It's cold (${temperature}°C)! Wear warm clothes.`;
    } 
    else {
        message = "❌ Please enter a valid temperature.";
    }

    // Final output
    result.innerHTML = message;
}
8
