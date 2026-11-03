export type ListingState = "active" | "favorite" | "discarded";
export type Listing = { id: string; title: string; location: string; type: string; source: string; rent: number; expenses?: number; rooms: number; surface: number; age: number; balcony: string; patio: string; garage: string; pets: string; score: number; gradient: string };
