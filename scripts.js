// Fuel Efficiency Calculation
function calculateFuel() {
    const distance = parseFloat(document.getElementById('distance').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const efficiency = parseFloat(document.getElementById('efficiency').value);

    if (isNaN(distance) || isNaN(weight) || isNaN(efficiency)) {
        document.getElementById('fuel-result').textContent = "Please enter valid numbers.";
        return;
    }

    const baseFuelConsumption = 10.0;
    const fuel = (distance * weight * baseFuelConsumption) / efficiency;
    document.getElementById('fuel-result').textContent = `Fuel required: ${fuel.toFixed(2)} units`;
}

// Cargo Manifest Parser
function parseManifest() {
    const manifestInput = document.getElementById('manifest-input').value;
    try {
        const manifest = JSON.parse(manifestInput);
        const formattedManifest = JSON.stringify(manifest, null, 2);
        document.getElementById('manifest-output').textContent = formattedManifest;
    } catch (error) {
        document.getElementById('manifest-output').textContent = "Invalid JSON format.";
    }
}
