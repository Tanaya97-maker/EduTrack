async function testInsert() {
    const timestamp = Date.now();
    const data = {
        op: "add_student",
        email: `teststudent${timestamp}@example.com`,
        roll_no: `TEST${timestamp}`,
        stud_name: "Test Student",
        semester: "sem1",
        division: "A",
        dept_id: 1
    };

    try {
        const response = await fetch("http://localhost:8000/api?action=manage_user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log("Insert Result:", JSON.stringify(result, null, 2));

        const getResponse = await fetch("http://localhost:8000/api?action=get_all&user_id=1&user_type=admin");
        const getAllResult = await getResponse.json();
        console.log("Students Count after insert:", getAllResult.students.length);
        console.log("First student:", getAllResult.students[0]);
    } catch (e) {
        console.error("Test error:", e);
    }
}


testInsert();
