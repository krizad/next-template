'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
          <Textarea
            label="Bio"
            value={formData.bio || ''}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            placeholder="Tell us about yourself"
            rows={4}
          />
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
          <Input
            label="Skills (comma-separated)"
            value={formData.skills?.join(', ') || ''}
            onChange={(e) =>
              setFormData({ ...formData, skills: e.target.value.split(',').map((s) => s.trim()) })
            }
            placeholder="React, TypeScript, Node.js"
          />
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
