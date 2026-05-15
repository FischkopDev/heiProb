'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProblemItem {
  id: number;
  title: string;
  category: string;
  status: 'Ungelöst' | 'In Bearbeitung' | 'Gelöst';
  statusColor: 'amber' | 'green' | 'slate';
  summary: string;
}

const statusOptions = [
  { value: 'Ungelöst', label: 'Ungelöst', color: 'amber' },
  { value: 'In Bearbeitung', label: 'In Bearbeitung', color: 'green' },
  { value: 'Gelöst', label: 'Gelöst', color: 'slate' },
] as const;


export  default function AddChallengePage() {
  const router = useRouter();
  const [formState, setFormState] = useState<Omit<ProblemItem, 'id' | 'statusColor'>>({
    title: '',
    category: '',
    status: 'Ungelöst',
    summary: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof typeof formState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/challenges/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formState.title,
          category: formState.category,
          state: formState.status,
          description: formState.summary,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || 'Failed to add challenge');
      }

      console.log('Herausforderung erfolgreich erstellt:', result);
      router.push('/challenge');
    } catch (err: any) {
      console.error('Error adding challenge:', err);
      setError(err.message || 'Ein Fehler ist aufgetreten.');
      setIsLoading(false);
    }
  };


  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-black">Herausforderung hinzufügen</h1>
        <p className="text-slate-500">Erfasse eine neue Herausforderung mit allen relevanten Informationen.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
        {error && (
          <div className="rounded-2xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
            {error}
          </div>
        )}
        <div className="grid gap-6 lg:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Titel*</span>
            <input
              type="text"
              value={formState.title}
              onChange={(event) => handleChange('title', event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Kategorie*</span>
            <input
              type="text"
              value={formState.category}
              onChange={(event) => handleChange('category', event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Status</span>
            <select
              value={formState.status}
              onChange={(event) => handleChange('status', event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Kurzbeschreibung</span>
          <textarea
            value={formState.summary}
            onChange={(event) => handleChange('summary', event.target.value)}
            className="mt-2 w-full min-h-[120px] rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
            required
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => router.back()}
            disabled={isLoading}
            className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Abbrechen
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Wird gespeichert...' : 'Herausforderung speichern'}
          </button>
        </div>
      </form>
    </div>
  );
}
