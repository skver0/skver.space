export type Metadata = {
  title: string,
  description: string,
  author: string,
  tags: string[],
  date: string
}

export type MarkdownData = {
  path: string,
  metadata: Metadata
}