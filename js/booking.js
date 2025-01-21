emailjs.init("zAwudlSUcZQfCgDCE");

document
  .getElementById("rentCarForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.textContent = "Sending...";

    emailjs
      .sendForm("service_9gx59kh", "template_gea2kli", this)
      .then(() => {
        alert(
          "Your car rental request has been submitted! A confirmation email has been sent."
        );
        submitBtn.textContent = "Submit";
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Failed to send your request. Please try again.");
        submitBtn.textContent = "Submit";
      });
  });







  
document.getElementById("car_company").addEventListener("change", function () {
  const company = this.value;
  const modelSelect = document.getElementById("car_model");
  modelSelect.innerHTML =
    '<option value="" disabled selected>Select a car model</option>';

  if (company === "toyota") {
    const toyotaModels = ["Corolla", "Landruiser", "Fortuner"];
    toyotaModels.forEach((model) => {
      const option = document.createElement("option");
      option.value = model.toLowerCase();
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  } else if (company === "honda") {
    const hondaModels = ["Vezel", "Civic", "City"];
    hondaModels.forEach((model) => {
      const option = document.createElement("option");
      option.value = model.toLowerCase();
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  } else if (company === "hyundai") {
    const hyundaiModels = ["Elantra", "Sonata", "Tucson"];
    hyundaiModels.forEach((model) => {
      const option = document.createElement("option");
      option.value = model.toLowerCase();
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  } else if (company === "kia") {
    const kiaModels = ["Stonic", "Carnival", "Sportage"];
    kiaModels.forEach((model) => {
      const option = document.createElement("option");
      option.value = model.toLowerCase();
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  } else if (company === "suzuki") {
    const suzukiModels = ["Cultus", "Alto", "WagonR"];
    suzukiModels.forEach((model) => {
      const option = document.createElement("option");
      option.value = model.toLowerCase();
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  }
});
