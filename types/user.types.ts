// User API Types - Matching backend response structure

export interface User {
  userId: number
  fullname: string
  email: string
  contact: string
  address: string
  dob: string // ISO date string (YYYY-MM-DD)
  interested: string // Course interest (e.g., "ioe", "medical", "csit")
  latestQualification: string // e.g., "class11", "class12", "+2"
  isVerified: boolean
  role: 'USER' | 'ADMIN'
}

export interface UserResponse {
  message: string
  data: User
}

export interface UpdateUserRequest {
  fullname: string
  email: string
  contact: string
  address: string
  dob: string
  interested: string
  latestQualification: string
}

export interface UpdateUserResponse {
  message: string
  data: User
}

// Error response type
export interface ApiErrorResponse {
  message: string
  data: null
}
