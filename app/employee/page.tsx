
'use client';
import { useEffect, useState } from 'react';

type Employee = {
  id: number;
  name: string;
  Department: string;
};

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch('/api/employees')
      .then((res) => res.json())
      .then((data) => {
        console.log('📦 Fetched employees:', data);
        setEmployees(data);
      });
  }, []);

  const handleDelete = async (id: number) => {
    const res = await fetch('/api/employees', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      alert('Deleted!');
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    } else {
      alert('Delete failed!');
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>

      {employees.length === 0 ? (
        <p className="text-gray-500">No employees found.</p>
      ) : (
        employees.map((emp) => (
          <div
            key={emp.id}
            className="flex justify-between items-center bg-gray-100 p-4 mb-3 rounded shadow"
          >
            <div>
              <p className="font-semibold text-lg">{emp.name}</p>
              <p className="text-sm text-gray-600">{emp.Department}</p>
            </div>
            <button
              onClick={() => handleDelete(emp.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              🗑 Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
