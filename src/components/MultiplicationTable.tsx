import { useState } from 'react';
import clsx from 'clsx';
import { Hash } from 'lucide-react';

type MultiplicationTableProps = {
  number: number;
};

export default function MultiplicationTable({ number }: MultiplicationTableProps) {
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const rows = Array.from({ length: 28 }, (_, i) => ({
    multiplier: i + 1,
    product: number * (i + 1),
  }));

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 flex items-center gap-3">
        <Hash className="text-white w-7 h-7" />
        <h2 className="text-2xl font-bold text-white tracking-wide">
          {number} × n — First 28 Multiples
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-indigo-50 border-b border-indigo-100">
              <th className="py-4 px-6 text-left text-indigo-500 font-semibold uppercase tracking-wider w-16">#</th>
              <th className="py-4 px-6 text-center text-indigo-500 font-semibold uppercase tracking-wider">Expression</th>
              <th className="py-4 px-6 text-center text-indigo-500 font-semibold uppercase tracking-wider">Multiplier</th>
              <th className="py-4 px-6 text-right text-indigo-500 font-semibold uppercase tracking-wider">Product</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ multiplier, product }) => (
              <tr
                key={multiplier}
                onMouseEnter={() => setHighlighted(multiplier)}
                onMouseLeave={() => setHighlighted(null)}
                className={clsx(
                  'border-b border-gray-100 transition-colors duration-150 cursor-pointer',
                  highlighted === multiplier
                    ? 'bg-indigo-50'
                    : multiplier % 2 === 0
                    ? 'bg-gray-50'
                    : 'bg-white'
                )}
              >
                {/* Row number */}
                <td className="py-3 px-6">
                  <span
                    className={clsx(
                      'inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold',
                      highlighted === multiplier
                        ? 'bg-indigo-600 text-white'
                        : 'bg-indigo-100 text-indigo-600'
                    )}
                  >
                    {multiplier}
                  </span>
                </td>

                {/* Expression */}
                <td className="py-3 px-6 text-center">
                  <span
                    className={clsx(
                      'font-mono text-base font-medium',
                      highlighted === multiplier ? 'text-indigo-700' : 'text-gray-700'
                    )}
                  >
                    {number} × {multiplier}
                  </span>
                </td>

                {/* Multiplier bar */}
                <td className="py-3 px-6">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-40 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={clsx(
                          'h-2 rounded-full transition-all duration-300',
                          highlighted === multiplier ? 'bg-indigo-500' : 'bg-indigo-300'
                        )}
                        style={{ width: `${(multiplier / 28) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-6 text-right">{multiplier}</span>
                  </div>
                </td>

                {/* Product */}
                <td className="py-3 px-6 text-right">
                  <span
                    className={clsx(
                      'font-mono text-lg font-bold',
                      highlighted === multiplier
                        ? 'text-indigo-700'
                        : product % 100 === 0
                        ? 'text-amber-600'
                        : 'text-gray-800'
                    )}
                  >
                    {product.toLocaleString()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer summary */}
      <div className="bg-indigo-50 px-8 py-5 flex flex-wrap gap-6 justify-between items-center border-t border-indigo-100">
        <div className="flex items-center gap-2 text-sm text-indigo-600">
          <span className="font-semibold">First multiple:</span>
          <span className="font-mono font-bold text-indigo-800">{number}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-indigo-600">
          <span className="font-semibold">Last multiple:</span>
          <span className="font-mono font-bold text-indigo-800">{(number * 28).toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-indigo-600">
          <span className="font-semibold">Sum of all:</span>
          <span className="font-mono font-bold text-indigo-800">
            {rows.reduce((acc, r) => acc + r.product, 0).toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-indigo-600">
          <span className="font-semibold">Average:</span>
          <span className="font-mono font-bold text-indigo-800">
            {(rows.reduce((acc, r) => acc + r.product, 0) / rows.length).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
