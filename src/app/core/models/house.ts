export interface House {
  id: number;
  name: string;
  description: string;
  short_description?: string;
  createdAt?: string;
  image?: string;
  latitude?: string;
  longitude?: string;
  available?: string;
  positiveReviews?: string;
  negativeReviews?: string;
  amenities: Array<Object>;
  dateRanges: Array<Object>;
}
