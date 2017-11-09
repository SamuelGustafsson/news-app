export interface INews {
  readonly imageURL: string;
  readonly title: string;
  readonly tags: ReadonlyArray<string>;
  readonly content: string;
}
