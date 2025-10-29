'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">حدث خطأ</h1>
        <p className="text-gray-600 mb-6">{error.message || 'Something went wrong'}</p>
        <button 
          onClick={() => reset()} 
          className="px-6 py-3 bg-timber-600 text-white rounded-lg hover:bg-timber-700 transition-colors"
        >
          إعادة المحاولة / Try Again
        </button>
      </div>
    </div>
  );
}

