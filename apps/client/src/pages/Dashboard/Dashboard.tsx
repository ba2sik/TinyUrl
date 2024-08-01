import React from 'react';
import { usePopularDomains } from '../../hooks/usePopularDomains';

export const Dashboard: React.FC = () => {
  const popularDomainsResults = usePopularDomains();
  const popularDomains = popularDomainsResults.data ?? [];

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen w-full">
      <h1 className="text-5xl font-bold">Dashboard</h1>
      <h1 className="text-2xl">Welcome to the dashboard!</h1>
      <div className="p-4">
        <table className="table w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2">Domain</th>
              <th className="border border-gray-300 px-4 py-2">URLs</th>
              <th className="border border-gray-300 px-4 py-2">Total Clicks</th>
            </tr>
          </thead>
          <tbody>
            {popularDomains.map((popularDomain, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50"
              >
                <td className="border border-gray-300 px-4 py-2">{popularDomain.domain}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="list-disc pl-4">
                    {popularDomain.urls.map((url, i) => (
                      <li key={i}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">{popularDomain.totalClicks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
