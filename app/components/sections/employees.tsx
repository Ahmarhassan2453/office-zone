'use client';

import React, { useEffect, useState } from 'react';

type Employee = {
  id: number;
  name: string;
  Department: string;
  Salary: number;
  status: string;
  created_at?: string | null;
};

export default function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<Employee>>({});

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch('/api/employees');
        const data = await res.json();

        if (res.ok) {
          setEmployees(data);
          console.log('✅ Fetched from API:', data);
        } else {
          console.error('❌ API Error:', data.error);
        }
      } catch (error) {
        console.error('❌ Network Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/employees?id=${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (res.ok) {
        setEmployees((prev) => prev.filter((emp) => emp.id !== id));
        console.log('🗑 Deleted:', data);
      } else {
        console.error('❌ Delete failed:', data.error);
      }
    } catch (error) {
      console.error('❌ Delete network error:', error);
    }
  };

  const handleEdit = (emp: Employee) => {
    setEditingId(emp.id);
    setEditData({ ...emp });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch('/api/employees', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
      });

      const data = await res.json();

      if (res.ok) {
        setEmployees((prev) =>
          prev.map((emp) => (emp.id === editData.id ? { ...emp, ...editData } as Employee : emp))
        );
        console.log('✅ Updated:', data);
        setEditingId(null);
        setEditData({});
      } else {
        console.error('❌ Update failed:', data.error);
      }
    } catch (error) {
      console.error('❌ Update error:', error);
    }
  };

  const handleChange = (field: keyof Employee, value: string | number) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-black">Employees</h1>

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : employees.length === 0 ? (
        <p className="text-white">No employees found.</p>
      ) : (
        <ul className="space-y-4">
          {employees.map((emp) => (
            <li
              key={emp.id}
              className="border border-slate-50 bg-slate-700 p-4 rounded-lg shadow text-white"
            >
              <div className="flex justify-between items-start gap-4 flex-wrap">
                {editingId === emp.id ? (
                  <div className="flex flex-col gap-2 flex-grow">
                    <input
                      className="text-black p-1 rounded"
                      value={editData.name || ''}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Name"
                    />
                    <input
                      className="text-black p-1 rounded"
                      value={editData.Department || ''}
                      onChange={(e) => handleChange('Department', e.target.value)}
                      placeholder="Department"
                    />
                    <input
                      className="text-black p-1 rounded"
                      type="number"
                      value={editData.Salary || ''}
                      onChange={(e) => handleChange('Salary', Number(e.target.value))}
                      placeholder="Salary"
                    />
                    <input
                      className="text-black p-1 rounded"
                      value={editData.status || ''}
                      onChange={(e) => handleChange('status', e.target.value)}
                      placeholder="Status"
                    />
                  </div>
                ) : (
                  <div>
                    <p><strong>Name:</strong> {emp.name}</p>
                    <p><strong>Department:</strong> {emp.Department}</p>
                    <p><strong>Salary:</strong> Rs {emp.Salary}</p>
                    <p><strong>Status:</strong> {emp.status}</p>
                    <p><strong>Created At:</strong> {emp.created_at ? new Date(emp.created_at).toLocaleDateString() : 'N/A'}</p>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  {editingId === emp.id ? (
                    <>
                      <button
                        onClick={handleUpdate}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                      >
                        💾 Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                      >
                        ❌ Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(emp)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(emp.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        🗑 Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
