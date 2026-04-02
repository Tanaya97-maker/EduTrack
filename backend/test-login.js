async function testLogin() {
    const data = {
        email: "admin@example.com", // Adjust if you know a valid email, or just use anything to check the DB call
        password: "123"
    };

    console.log('Testing Login with email:', data.email);

    try {
        const response = await fetch("http://localhost:8000/api?action=login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log("Login Result:", JSON.stringify(result, null, 2));
    } catch (e) {
        console.error("Test error:", e);
    }
}

testLogin();
