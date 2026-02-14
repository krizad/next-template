'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { UpdateProfileInput } from '../types';

interface ProfileEditFormProps {
  initialData: UpdateProfileInput;
  onSubmit: (data: UpdateProfileInput) => Promise<void>;
  isLoading?: boolean;
}

export function ProfileEditForm({ initialData, onSubmit, isLoading }: ProfileEditFormProps) {
  const [formData, setFormData] = useState<UpdateProfileInput>(initialData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>Update your profile information</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            value={formData.name || ''}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
          />
          <div>
            <label className="text-foreground mb-2 block text-sm font-medium">Bio</label>
            <textarea
              value={formData.bio || ''}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Tell us about yourself"
              rows={4}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring focus:ring-offset-background flex w-full rounded-md border px-3 py-2 text-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Input
            label="Location"
            value={formData.location || ''}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="City, Country"
          />
          <Input
            label="Website"
            type="url"
            value={formData.website || ''}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            placeholder="https://example.com"
          />
          <div>
            <label className="text-foreground mb-2 block text-sm font-medium">
              Skills (comma-separated)
            </label>
            <Input
              value={formData.skills?.join(', ') || ''}
              onChange={(e) =>
                setFormData({ ...formData, skills: e.target.value.split(',').map((s) => s.trim()) })
              }
              placeholder="React, TypeScript, Node.js"
            />
          </div>
          <div className="flex gap-4">
            <Button type="submit" isLoading={isLoading}>
              Save Changes
            </Button>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
