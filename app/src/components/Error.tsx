interface Error{
    error: string;
}
export function Error({error}: Error) {
    return <h1 className="error">{error}</h1>;
  }