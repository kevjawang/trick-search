export interface Trick {
  id: string
  title: string
  url: string
  trick_tags?: string[]
  categories?: string[]
}

export interface TricksData {
  tricks: Trick[]
}