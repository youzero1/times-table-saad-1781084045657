import MultiplicationTable from '@/components/MultiplicationTable';

export default function TablePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-indigo-700 mb-2 tracking-tight">
            Multiplication Table of 28
          </h1>
          <p className="text-gray-500 text-lg">
            Complete reference table for multiples of 28
          </p>
        </div>
        <MultiplicationTable number={28} />
      </div>
    </div>
  );
}
