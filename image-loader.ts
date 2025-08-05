import { basePath } from "./next.config";

console.log('basePath: ', basePath);

export default function imageLoader({
  src,
}: {
  src: string
}) {
  return `${basePath}${src}`;
}