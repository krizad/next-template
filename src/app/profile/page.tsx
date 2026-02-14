'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProfileCard } from '@/features/user-profile/components/profile-card';
import { ProfileStats } from '@/features/user-profile/components/profile-stats';
import { ProfileEditForm } from '@/features/user-profile/components/profile-edit-form';
import {
  UserProfile,
  ProfileStats as ProfileStatsType,
  UpdateProfileInput,
} from '@/features/user-profile/types';

// Mock data
const mockProfile: UserProfile = {
  id: '1',
  email: 'john.doe@example.com',
  name: 'John Doe',
  bio: 'Full-stack developer passionate about building great user experiences.',
  location: 'San Francisco, CA',
  website: 'https://johndoe.dev',
  skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS'],
  createdAt: new Date('2023-01-15'),
  updatedAt: new Date(),
};

const mockStats: ProfileStatsType = {
  postsCount: 42,
  followersCount: 1234,
  followingCount: 567,
};

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(mockProfile);

  const handleUpdateProfile = async (data: UpdateProfileInput) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setProfile({ ...profile, ...data });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button onClick={() => setIsEditing(!isEditing)} variant="outline">
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {isEditing ? (
            <ProfileEditForm initialData={profile} onSubmit={handleUpdateProfile} />
          ) : (
            <ProfileCard profile={profile} />
          )}
        </div>
        <div>
          <ProfileStats stats={mockStats} />
        </div>
      </div>
    </div>
  );
}
