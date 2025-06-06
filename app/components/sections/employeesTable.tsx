'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

type Employee = {
  id: number;
  name: string;
  department: string;
  salary: number;
  status: string;
  created_at?: string | null;
};

export default function EmployeeTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('/api/employees', {
        method: 'GET',
      });
      if (response.ok) {
        const result = await response.json();
        setEmployees(result);
      } else {
        setErrorMsg("Failed to fetch employees");
      }
      setLoading(false);
    };

    fetchEmployees();
  }, []);

  if (loading) return <p className="text-center mt-4 text-white">Loading employees...</p>;
  if (errorMsg) return <p className="text-red-500 text-center mt-4">{errorMsg}</p>;

  return (
    <div className="overflow-x-auto p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Employees Table</h2>
      <table className="min-w-full bg-slate-600 border rounded shadow-sm text-white">
        <thead>
          <tr className="bg-slate-700 text-left">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Department</th>
            <th className="py-2 px-4 border-b">Salary</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Joined</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id} className="hover:bg-slate-500">
              <td className="py-2 px-4 border-b">{emp.name}</td>
              <td className="py-2 px-4 border-b">{emp.department}</td>
              <td className="py-2 px-4 border-b">Rs {emp.salary}</td>
              <td className="py-2 px-4 border-b">{emp.status}</td>
              <td className="py-2 px-4 border-b">
                {emp.created_at ? new Date(emp.created_at).toLocaleDateString() : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
