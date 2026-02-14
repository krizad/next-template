import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockUsers } from '@/app/api/_data/users';
import { CreateUserForm } from './create-user-form';
import { UserList } from './user-list';

/**
 * Server Component — runs entirely on the server.
 * No 'use client' directive = data is fetched at request time without client JS.
 */
export default async function ServerExamplePage() {
  // Direct data access — no fetch() or API calls needed in Server Components
  // In production, this would be a database query (e.g., prisma.user.findMany())
  const users = mockUsers;
  const totalUsers = users.length;

  // You can also do async operations directly
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Server Components & Actions</h1>
        <p className="text-muted-foreground mt-2">
          This page demonstrates React Server Components (RSC) and Server Actions patterns.
        </p>
      </div>

      {/* Info Cards — rendered on server, zero client JS */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Rendered At (UTC)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium">{timestamp}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Rendering</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium">Server Component</div>
            <p className="text-muted-foreground text-xs">No client JS for this section</p>
          </CardContent>
        </Card>
      </div>

      {/* Server Action Form — progressive enhancement */}
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Create User (Server Action)</CardTitle>
            <CardDescription>
              This form uses a Server Action. It works even with JavaScript disabled (progressive
              enhancement).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CreateUserForm />
          </CardContent>
        </Card>
      </div>

      {/* User List with Server Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Users (Server-rendered)</CardTitle>
          <CardDescription>
            This list is rendered on the server. Delete uses a Server Action.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserList users={users} />
        </CardContent>
      </Card>

      {/* Pattern explanation */}
      <div className="bg-muted mt-8 rounded-lg p-6">
        <h3 className="mb-3 font-semibold">When to use Server Components vs Client Components</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="mb-2 text-sm font-medium text-green-600">Server Components (default)</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>- Fetch data directly (DB, API)</li>
              <li>- Access backend resources</li>
              <li>- Keep sensitive data on server</li>
              <li>- Large dependencies (stay on server)</li>
              <li>- Static content rendering</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-blue-600">
              Client Components (&apos;use client&apos;)
            </h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>- Interactivity (onClick, onChange)</li>
              <li>- State (useState, useReducer)</li>
              <li>- Effects (useEffect)</li>
              <li>- Browser APIs (localStorage)</li>
              <li>- Custom hooks with state</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
