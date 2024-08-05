export interface UseForm<T> {
  defaultValues: T
  validate: (values: T) => Partial<T>
}

export type Submitter<T> = (values: T) => void | Promise<void>
