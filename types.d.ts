import { Source } from 'callbag';

declare const take: <T>(max: number) => (source: Source<T>) => Source<T>;
export default take;
