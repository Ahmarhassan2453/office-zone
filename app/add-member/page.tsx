'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddMemberPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    Department: '',
    Salary: '',
    status: 'Active',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        Salary: parseInt(formData.Salary),
        created_at: new Date().toISOString(), 
      }),
    });

    if (response.ok) {
      alert('Team member added successfully!');
      router.push('/'); 
    } else {
      alert('Error adding member');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow-lg rounded">
      <h1 className="text-3xl font-bold mb-6">Add New Team Member</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="Department"
          placeholder="Department"
          value={formData.Department}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="int8"
          name="Salary"
          placeholder="Salary"
          value={formData.Salary}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <select
        
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
