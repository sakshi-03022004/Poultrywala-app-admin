// test.js

export const fetchCountries = async () => {
  try {
    const response = await fetch("http://localhost/GitlabProject/Project/poultry_wala/application/api/loginController.php/getContry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ getContry: "getContry" }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
