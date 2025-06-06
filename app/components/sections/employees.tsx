'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

type Employee = {
  id: number;
  Name: string;
  Department: string;
  salary: number;
  status: string;
  created_at?: string | null;
};

export default function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const { data, error } = await supabase.from('employees').select('*');
      if (error) {
        console.error('Error fetching employees:', error);
      } else if (data) {
        setEmployees(data);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Employees</h1>
      <ul className="space-y-2">
        {employees.length === 0 && <p className="text-white">No employees found.</p>}
        {employees.map((emp) => (
          <li key={emp.id} className="border p-4 rounded bg-slate-600 shadow text-white">
            <p><strong>Name:</strong> {emp.Name}</p>
            <p><strong>Department:</strong> {emp.Department}</p>
            <p><strong>Salary:</strong> Rs {emp.salary}</p>
            <p><strong>Status:</strong> {emp.status}</p>
            <p>
              <strong>Created At:</strong> {emp.created_at ? new Date(emp.created_at).toLocaleDateString() : 'N/A'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
