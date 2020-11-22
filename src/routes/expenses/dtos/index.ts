export interface IRequestCreateDTO {
  title: string
  description: string
  tag: string
  value: number
}
export interface IResponseCreateDTO extends IRequestCreateDTO {
  id: number
}
