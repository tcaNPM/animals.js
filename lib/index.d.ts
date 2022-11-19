export type CatImageType = "image" | "gif";

declare module "animals.js" {
  export function cat(type: CatImageType): Promise<string>;
  export function dog(): Promise<string>;
  export function fox(): Promise<string>;
  export function duck(): Promise<string>;
}
