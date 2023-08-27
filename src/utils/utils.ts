// works with svg and other file formats as well
export function getImageUrl(name: string): string {
  return new URL(`../assets/${name}`, import.meta.url).href;
}

export default getImageUrl;
