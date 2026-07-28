import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { secret } = await searchParams;

  // Protect the page – only allow access if the secret matches
  if (secret !== process.env.ADMIN_SECRET) {
    redirect("/");
  }

  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Submissions</h1>

      {contacts.length === 0 ? (
        <p className="text-gray-500">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((c) => (
            <div
              key={c.id}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-semibold">{c.name}</span>
                  <span className="text-gray-500 ml-2">{c.email}</span>
                  {c.company && (
                    <span className="text-gray-400 ml-2">· {c.company}</span>
                  )}
                </div>
                <span className="text-sm text-gray-400">
                  {new Date(c.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{c.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}