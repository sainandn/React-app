export function AllList() {
    const EmpAllData = [
        {
            id: 1,
            FirstName: "sai",
            LastName: "kumar",
            email: "sai@gmail.com"
        },
        {
            id: 2,
            FirstName: "sri",
            LastName: "kumar",
            email: "sri@gmail.com"
        },
        {
            id: 3,
            FirstName: "salman",
            LastName: "raj",
            email: "salman@gmail.com"
        },
        {
            id: 4,
            FirstName: "rajja",
            LastName: "kumar",
            email: "rajja@gmail.com"
        }
    ];

    return (
        <div>
            <h1>All Employee List</h1>
            <table border="1" style={{ borderCollapse: "collapse", width: "80%", margin: "20px auto" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {EmpAllData.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.FirstName}</td>
                            <td>{emp.LastName}</td>
                            <td>{emp.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
