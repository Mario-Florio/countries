
async function getData() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    return countries;
};

export { getData };