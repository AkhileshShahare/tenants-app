interface ServiceInit {
  status: 'init';
}
interface ServiceLoading {
  status: 'loading';
}
interface ServiceLoaded<T> {
  status: 'loaded';
  payload: T;
}
interface ServiceError {
  status: 'error';
  error: Error;
}
export type Service<Tenant> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<Tenant>
  | ServiceError;


interface Tenant {
  id: string;
  name: string;
  description: string;
  code: string;
  type: string;
  status: string;
}