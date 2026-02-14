'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserProfile } from '../types';
import { getInitials } from '@/utils/format';

interface ProfileCardProps {
  readonly profile: UserProfile;
}

export function ProfileCard({ profile }: Readonly<ProfileCardProps>) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="bg-primary text-primary-foreground flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold">
            {profile.avatar ? (
              <Image
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full rounded-full object-cover"
                width={64}
                height={64}
              />
            ) : (
              getInitials(profile.name)
            )}
          </div>
          <div>
            <CardTitle>{profile.name}</CardTitle>
            <p className="text-muted-foreground text-sm">{profile.email}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {profile.bio && (
            <div>
              <h4 className="mb-1 text-sm font-semibold">Bio</h4>
              <p className="text-muted-foreground text-sm">{profile.bio}</p>
            </div>
          )}
          {profile.location && (
            <div>
              <h4 className="mb-1 text-sm font-semibold">Location</h4>
              <p className="text-muted-foreground text-sm">{profile.location}</p>
            </div>
          )}
          {profile.website && (
            <div>
              <h4 className="mb-1 text-sm font-semibold">Website</h4>
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm hover:underline"
              >
                {profile.website}
              </a>
            </div>
          )}
          {profile.skills.length > 0 && (
            <div>
              <h4 className="mb-2 text-sm font-semibold">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
