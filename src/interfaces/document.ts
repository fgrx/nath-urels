import type { ImageFunction } from "astro:content";

export interface Document {
    image: ImageFunction,
    alternativeText: string
}
