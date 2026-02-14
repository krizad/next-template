/**
 * User Profile Feature Types
 */

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  bio?: string;
  avatar?: string;
  location?: string;
  website?: string;
  skills: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdateProfileInput {
  name?: string;
  bio?: string;
  location?: string;
  website?: string;
  skills?: string[];
}

export interface ProfileStats {
  postsCount: number;
  followersCount: number;
  followingCount: number;
}
