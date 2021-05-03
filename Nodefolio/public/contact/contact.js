function createForm(form) {
    let entries = new FormData(form);
    let values = {};
    const url = "/api/contact";

    for (let entry of entries.entries()) {
      values[entry[0]] = entry[1];
    }
    
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      return "success";
  }