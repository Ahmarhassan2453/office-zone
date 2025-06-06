'use client';

import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

// ✅ Correct field names matching Supabase exactly
type Employee = {
  id: number;
  name: string;
  department: string;
  salary: number;
  status: string;
  created_at?: string | null;
};

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      const { data, error } = await supabase
        .from('employees')
        .select('*');

      if (error) {
        setErrorMsg(error.message);
        console.error("Error fetching employees:", error);
      } else {
        setEmployees(data as Employee[]);
      }
      setLoading(false);
    };

    fetchEmployees();
  }, []);

  if (loading) return <p className="text-center mt-6">Loading employees...</p>;
  if (errorMsg) return <p className="text-red-600 text-center mt-6">Error: {errorMsg}</p>;
  if (employees.length === 0) return <p className="text-center mt-6">No employees found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Employees List</h1>
      <ul className="space-y-4">
        {employees.map((emp) => (
          <li key={emp.id} className="p-4 border rounded shadow-sm bg-white">
            <p><strong>Name:</strong> {emp.name}</p>
            <p><strong>Department:</strong> {emp.department}</p>
            <p><strong>Salary:</strong> Rs {emp.salary}</p>
            <p><strong>Status:</strong> {emp.status}</p>
            <p><strong>Joined:</strong> {emp.created_at ? new Date(emp.created_at).toLocaleDateString() : 'N/A'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
